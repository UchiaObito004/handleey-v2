export default function Footer() {
  const links = {
    Company: ['About', 'Services', 'Pricing', 'FAQ'],
    Contact: ['handleeysoftwares@gmail.com', 'New Delhi, India'],
    Legal: ['Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-white">Handleey</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building resilient digital products for modern enterprises.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {['Services', 'Why Us', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:handleeysoftwares@gmail.com" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  handleeysoftwares@gmail.com
                </a>
              </li>
              <li className="text-slate-500 text-sm">New Delhi, India</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Handleey Software Pvt Ltd. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
