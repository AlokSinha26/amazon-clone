import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    "Get to Know Us": [
      "About Us",
      "Careers",
      "Press Releases",
      "Amazon Science",
    ],
    "Connect with Us": ["Facebook", "Twitter", "Instagram"],
    "Make Money with Us": [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
    "Let Us Help You": [
      "COVID-19 and Amazon",
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  };

  return (
    <footer className="mt-8">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-amazon-light-dark hover:bg-amazon-dark-hover text-secondary-foreground py-3 text-sm transition-colors"
      >
        <div className="flex items-center justify-center gap-1">
          <ChevronUp className="w-4 h-4" />
          Back to top
        </div>
      </button>

      {/* Links Section */}
      <div className="bg-amazon-light-dark text-secondary-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-base mb-3">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-amazon-gray-dark hover:text-white hover:underline transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-amazon-light-dark border-t border-amazon-dark-hover">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <span className="text-2xl font-bold text-white">
              amazon<span className="text-amazon-orange">.in</span>
            </span>
            <div className="flex items-center gap-4">
              <select className="bg-transparent border border-amazon-gray-dark rounded px-3 py-1 text-sm text-white">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
              <select className="bg-transparent border border-amazon-gray-dark rounded px-3 py-1 text-sm text-white">
                <option value="in">India</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-amazon-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-amazon-gray-dark mb-4">
            <a href="#" className="hover:text-white hover:underline">
              Conditions of Use & Sale
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Privacy Notice
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Interest-Based Ads
            </a>
          </div>
          <p className="text-center text-xs text-amazon-gray-dark">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
