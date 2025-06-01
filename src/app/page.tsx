import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { DownloadCvSection } from "@/sections/DownloadCV";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { HiremeSection } from "@/sections/Hireme";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <HiremeSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <DownloadCvSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
