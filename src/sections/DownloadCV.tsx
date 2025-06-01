import grainImage from "@/assets/images/grain.jpg";

export const DownloadCvSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div 
            className="absolute inset-0 opacity-5 -z-10" 
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl">
                Want to know more about my professional journey?
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Download my comprehensive CV to explore my skills, experience, and qualifications in detail.
              </p>
            </div>

            <div>
              <a 
                href="/Dulaj Upananda CV Software Engineer.pdf" 
                download="Dulaj-Upananda-CV-Software-Engineer.pdf"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border
                 border-gray-900 hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold">Download My CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};