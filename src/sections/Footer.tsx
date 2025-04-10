"use client";

const footerLinks = [
  {
    title: "LinkedIn",
    targetLink: "https://www.linkedin.com/in/dulajbhagya/",
  },
  {
    title: "GitHub",
    targetLink: "https://github.com/DULAJBHAGYA",
  },
  {
    title: "Medium",
    targetLink: "https://medium.com/@dulajupananda",
  },
  {
    title: "Instagram",
    targetLink: "https://www.instagram.com/_dulaj.98/?hl=en",
  },
  {
    title: "Facebook",
    targetLink: "https://www.facebook.com/profile.php?id=100005369356450",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 relative">
      {/* Background glow */}
      <div className="absolute h-96 w-full bg-emerald-300/20 bottom-0 left-0 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="border-t border-white/15 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white/40 text-sm">
              &copy; 2025 Dulaj Upananda
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1 px-2 py-1"
                  onClick={() => console.log(`Clicked: ${link.title}`)}
                >
                  <span className="font-medium">{link.title}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="inline"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};