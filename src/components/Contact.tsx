import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-gray-900 tracking-wide">GET IN TOUCH</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready to begin your leadership journey? Contact us to learn more about our programs and how we can help you create meaningful impact.
              </p>
            </div>

            {/* Contact Information from your card */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-600 tracking-wide mb-1">ADDRESS</div>
                <div className="text-gray-900">plot 6A centenary</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 tracking-wide mb-1">PHONE</div>
                <div className="text-gray-900">+234-8119-471875</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 tracking-wide mb-1">EMAIL</div>
                <div className="text-gray-900">leaders_fedel@outlook.com</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 tracking-wide mb-1">SOCIAL MEDIA</div>
                <div className="text-gray-900">@joinfedel</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'https://calendly.com/leaders_fedel/30min';
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 tracking-wide mb-2">FIRST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 tracking-wide mb-2">LAST NAME</label>
                  <input 
                    type="text" 
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 tracking-wide mb-2">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 tracking-wide mb-2">ORGANIZATION</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 tracking-wide mb-2">PROGRAM INTEREST</label>
                <select className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none">
                  <option>Select a program</option>
                  <option>Executive Leadership Program</option>
                  <option>Emerging Leaders Initiative</option>
                  <option>Community Impact Fellowship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 tracking-wide mb-2">MESSAGE</label>
                <textarea 
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none resize-none"
                  placeholder="Tell us about your leadership goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors">
                BOOK A 30 MIN CALL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;