import React, { useState, useEffect, useRef } from 'react';

interface PodcastEpisode {
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  link: string;
  thumbnail: string;
}

interface RSSFeedItem {
  title?: string;
  description?: string;
  pubDate: string;
  link: string;
  enclosure?: {
    link?: string;
  };
  thumbnail?: string;
  itunes?: {
    duration?: string;
    image?: string;
  };
}

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentEpisodeIndex: number | null;
}

const Podcast = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Audio player state
  const [audioState, setAudioState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    currentEpisodeIndex: null
  });
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        // Using a CORS proxy to fetch the RSS feed
        const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
        const rssUrl = 'https://anchor.fm/s/1059995ac/podcast/rss';
        const response = await fetch(`${proxyUrl}${encodeURIComponent(rssUrl)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch podcast data');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          const podcastEpisodes: PodcastEpisode[] = data.items.map((item: RSSFeedItem, index: number) => ({
            title: item.title || `Episode ${index + 1}`,
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || 'No description available',
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            duration: item.itunes?.duration || 'Unknown',
            audioUrl: item.enclosure?.link || item.link,
            link: item.link,
            thumbnail: item.thumbnail || item.itunes?.image || '/podcast-placeholder.jpg'
          }));
          
          setEpisodes(podcastEpisodes);
        } else {
          throw new Error('Invalid RSS feed response');
        }
      } catch (err) {
        console.error('Error fetching podcast:', err);
        setError('Unable to load podcast episodes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastData();
  }, []);

  const handlePlayEpisode = (audioUrl: string, link: string, episodeIndex: number) => {
    if (!audioRef.current) return;
    
    // If clicking on the same episode that's already loaded
    if (audioState.currentEpisodeIndex === episodeIndex) {
      if (audioState.isPlaying) {
        audioRef.current.pause();
        setAudioState(prev => ({ ...prev, isPlaying: false }));
      } else {
        audioRef.current.play();
        setAudioState(prev => ({ ...prev, isPlaying: true }));
      }
      return;
    }
    
    // Loading new episode
    if (audioUrl && (audioUrl.includes('.mp3') || audioUrl.includes('audio'))) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
      setAudioState(prev => ({
        ...prev,
        currentEpisodeIndex: episodeIndex,
        currentTime: 0,
        duration: 0
      }));
      
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          setAudioState(prev => ({
            ...prev,
            duration: audioRef.current!.duration
          }));
        }
      }, { once: true });
      
      audioRef.current.play().then(() => {
        setAudioState(prev => ({ ...prev, isPlaying: true }));
      }).catch(() => {
        // If direct play fails, open the episode link
        window.open(link, '_blank');
      });
    } else {
      window.open(link, '_blank');
    }
  };
  
  // Format time in MM:SS format
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate remaining time
  const getRemainingTime = (): string => {
    const remaining = audioState.duration - audioState.currentTime;
    return formatTime(remaining);
  };
  
  // Handle audio time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const updateTime = () => {
      setAudioState(prev => ({
        ...prev,
        currentTime: audio.currentTime
      }));
    };
    
    const handleEnded = () => {
      setAudioState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
    };
    
    const handlePause = () => {
      setAudioState(prev => ({ ...prev, isPlaying: false }));
    };
    
    const handlePlay = () => {
      setAudioState(prev => ({ ...prev, isPlaying: true }));
    };
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);
  
  // Seek functionality
  const handleSeek = (newTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setAudioState(prev => ({ ...prev, currentTime: newTime }));
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-300/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-purple-400 text-lg font-medium mb-4 tracking-wider">
            FEDEL PODCAST
          </h3>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Leadership Conversations
            </span>
          </h1>
          <p className="text-xl text-gray-300/90 leading-relaxed max-w-3xl mx-auto mb-12">
            Join us for inspiring conversations with leaders who are shaping the future. 
            Discover insights, strategies, and stories that will transform your leadership journey.
          </p>
        </div>

        {/* Episodes Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
            <p className="text-gray-300 mt-4">Loading podcast episodes...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="glass-dark rounded-3xl p-8 max-w-md mx-auto">
              <p className="text-red-400 mb-4">{error}</p>
              <a 
                href="https://anchor.fm/s/1059995ac/podcast/rss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600/90 hover:bg-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Visit Podcast Directly
              </a>
            </div>
          </div>
        ) : episodes.length > 0 ? (
          <>
            {/* Featured Episode */}
            <div className="max-w-2xl mx-auto mb-20">
              <div className="glass-dark rounded-3xl p-8 text-center animate-fade-in-up">
                <div className="space-y-6">
                  {/* Featured Episode Thumbnail */}
                  <div className="relative max-w-xs mx-auto">
                    <div className="bg-gradient-to-br from-purple-200 to-orange-200 p-6 rounded-2xl">
                      <img 
                        src={episodes[0]?.thumbnail} 
                        alt={episodes[0]?.title}
                        className="w-full h-48 object-cover rounded-xl shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDIwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTkyIiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9Ijk2IiByPSIzMCIgZmlsbD0iIzlDMzNENCIvPgo8cGF0aCBkPSJNODUgODFMMTE1IDk2TDg1IDExMVY4MVoiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUM5Q0FBIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiI+Rm9kY2FzdDwvdGV4dD4KPC9zdmc+Cg==';
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Featured Episode Info */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-medium text-white">
                      Episode 1: {episodes[0]?.title || 'Leading with Purpose'}
                    </h2>
                    <p className="text-gray-400 text-sm">FEDEL Podcast</p>
                  </div>
                  
                  {/* Player Controls */}
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    {audioState.currentEpisodeIndex === 0 && audioState.duration > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{formatTime(audioState.currentTime)}</span>
                          <span className="text-purple-400">-{getRemainingTime()}</span>
                          <span>{formatTime(audioState.duration)}</span>
                        </div>
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-700 rounded-full">
                            <div 
                              className="h-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-300"
                              style={{ 
                                width: `${(audioState.currentTime / audioState.duration) * 100}%` 
                              }}
                            ></div>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max={audioState.duration}
                            value={audioState.currentTime}
                            onChange={(e) => handleSeek(parseFloat(e.target.value))}
                            className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Control Buttons */}
                    <div className="flex items-center justify-center space-x-4">
                      <button 
                        className="text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-50"
                        disabled={audioState.currentEpisodeIndex !== 0}
                        onClick={() => handleSeek(Math.max(0, audioState.currentTime - 15))}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                        </svg>
                      </button>
                      <button 
                        onClick={() => episodes[0] && handlePlayEpisode(episodes[0].audioUrl, episodes[0].link, 0)}
                        className={`text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          audioState.currentEpisodeIndex === 0 && audioState.isPlaying 
                            ? 'bg-red-600 hover:bg-red-500' 
                            : 'bg-purple-600 hover:bg-purple-500'
                        }`}
                      >
                        {audioState.currentEpisodeIndex === 0 && audioState.isPlaying ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </button>
                      <button 
                        className="text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-50"
                        disabled={audioState.currentEpisodeIndex !== 0}
                        onClick={() => handleSeek(Math.min(audioState.duration, audioState.currentTime + 15))}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* All Episodes List */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-white mb-12 text-left">
                All Episodes
              </h2>
              
              <div className="space-y-4">
                {episodes.map((episode, index) => (
                  <div 
                    key={index}
                    className="group glass-dark rounded-2xl p-4 hover:bg-white/5 transition-all duration-300 animate-fade-in-up cursor-pointer"
                    style={{animationDelay: `${index * 0.05}s`}}
                    onClick={() => handlePlayEpisode(episode.audioUrl, episode.link, index)}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Small Square Thumbnail */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-purple-200 to-orange-200 p-1">
                          <img 
                            src={episode.thumbnail} 
                            alt={episode.title}
                            className="w-full h-full object-cover rounded-md"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjEyIiBmaWxsPSIjOUMzM0Q0Ii8+CjxwYXRoIGQ9Ik0yNyAyN0wzNyAzMkwyNyAzN1YyN1oiIGZpbGw9IndoaXRlIi8+CjwvdGN2Zz4K';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Episode Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300 truncate">
                          Episode {index + 1}
                        </h3>
                        <p className="text-gray-400 text-sm truncate">
                          Episode {index + 1}: {episode.title}
                        </p>
                        {audioState.currentEpisodeIndex === index && (
                          <div className="mt-2">
                            <div className="text-xs text-purple-400">
                              {audioState.isPlaying ? 'Playing' : 'Paused'} • 
                              {audioState.duration > 0 && (
                                <span>-{getRemainingTime()} remaining</span>
                              )}
                            </div>
                            {audioState.duration > 0 && (
                              <div className="mt-1 w-full h-1 bg-gray-700 rounded-full">
                                <div 
                                  className="h-1 bg-purple-400 rounded-full transition-all duration-300"
                                  style={{ 
                                    width: `${(audioState.currentTime / audioState.duration) * 100}%` 
                                  }}
                                ></div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Play/Pause Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          audioState.currentEpisodeIndex === index
                            ? audioState.isPlaying
                              ? 'bg-red-600 opacity-100'
                              : 'bg-purple-600 opacity-100'
                            : 'bg-purple-600 opacity-0 group-hover:opacity-100'
                        }`}>
                          {audioState.currentEpisodeIndex === index && audioState.isPlaying ? (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="glass-dark rounded-3xl p-8 max-w-md mx-auto">
              <p className="text-gray-300 mb-4">No episodes found.</p>
              <a 
                href="https://anchor.fm/s/1059995ac/podcast/rss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600/90 hover:bg-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Visit Podcast
              </a>
            </div>
          </div>
        )}

        {/* RSS Feed Integration Info */}
        <div className="glass-dark p-8 rounded-3xl mb-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">
              🎧 Live RSS Feed Integration
            </h3>
            <p className="text-gray-300/80 leading-relaxed max-w-2xl mx-auto">
              This page automatically displays your latest podcast episodes from your Anchor.fm RSS feed. 
              New episodes will appear here automatically when you publish them!
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="glass border border-purple-400/50 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/15 hover:scale-105"
              >
                Refresh Episodes
              </button>
            </div>
          </div>
        </div>
        <div className="glass-dark p-12 rounded-3xl text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white">
              Never Miss an Episode
            </h2>
            <p className="text-gray-300/90 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our podcast and get notified when new episodes are released. 
              Join thousands of leaders who trust FEDEL for their leadership development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://anchor.fm/s/1059995ac/podcast/rss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600/90 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                SUBSCRIBE NOW
              </a>
              <a 
                href="mailto:leaders_fedel@outlook.com?subject=Podcast Inquiry" 
                className="glass border border-purple-400/50 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/15 hover:scale-105"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef}
        preload="none"
        className="hidden"
      />
    </section>
  );
};

export default Podcast;

