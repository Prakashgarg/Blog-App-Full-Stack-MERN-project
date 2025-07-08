import React from 'react';
import logo from '../assets/logo.svg'; // Update this path if needed

const footerData = [
  {
    title: 'Quick Links',
    links: ['Home', 'Best Sellers', 'Offers & Deals', 'Contact Us', 'FAQs'],
  },
  {
    title: 'Need Help?',
    links: [
      'Delivery Information',
      'Return & Refund Policy',
      'Payment Methods',
      'Track your Order',
      'Contact Us',
    ],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'Twitter', 'Facebook', 'YouTube'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img src={logo} alt="logo" className="w-32 sm:w-44 mb-4" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Footer Links grouped in one div */}
        <div className="flex flex-col sm:flex-row gap-8 md:w-2/3 justify-between">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline text-[#5044E4] transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t text-center text-xs text-gray-500">
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
