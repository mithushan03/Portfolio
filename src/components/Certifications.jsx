import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Lab Linux-Tutorial",
      description: "Learn how to solve real-world DevOps scenarios hands-on with this KodeKloud lab tutorial.",
      logo: "/codeInLogo.webp",
      type: "Certification"
    },
    {
      title: "SQL Mastery with MySQL",
      description: "Master SQL fundamentals and advanced queries with hands-on MySQL practice for real-world data management.",
      logo: "/MySQL.png",
      type: "Certificate"
    },
    {
      title: "Fundamentals of Digital System Design",
      description: "Completed Certification from University Of Moratuwa for Fundamentals of Digital System Design",
      logo: "/ENTC.webp",
      type: "Certification"
    },
    {
      title: "Participant of IEEExtreme 18.0 Programming Competition",
      description: "Participated in IEEExtreme 18.0, a 24-hour global competitive programming challenge organized by IEEE.",
      logo: "/ieeextreme.webp",
      type: "Certification"
    }
  ];

  return (
    <div id="certifications" className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen flex items-center py-16 relative overflow-hidden">
      <div className="max-w-[90%] md:max-w-[95%] mx-auto font-inter w-full relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-3">
            Certifications <span className="text-3xl">🏆</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg uppercase tracking-wider">
            ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE!
          </p>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Logo Area */}
              <div className="h-32 bg-white rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                ) : (
                  <div className="text-gray-400 text-sm font-semibold text-center px-2">
                    {cert.title}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-[#1a1a2e] font-bold text-lg mb-3 text-center">{cert.title}</h3>
              <p className="text-gray-700 text-sm mb-6 flex-grow text-center">{cert.description}</p>

              {/* Badge */}
              <div className="flex items-center justify-center">
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-purple-900 transition-all cursor-pointer">
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
