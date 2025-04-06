import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { link } from "fs";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dulajbhagya/",
  },
  {
    title: "GitHub",
    href: "https://github.com/DULAJBHAGYA",
  },
  {
    title: "Medium",
    href: "https://medium.com/@dulajupananda",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_dulaj.98/?hl=en",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100005369356450",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2025 Dulaj Upananda
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href="#"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <ArrowUpRightIcon className="size-4" />
                <span className="font-semibold">{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};