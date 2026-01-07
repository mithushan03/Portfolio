import React from "react";

const Experience = () => {
  const trainings = [
    {
      company: "ZTE Lanka PVT LTD",
      logo: "/zte.jpg",
      role: "Electrical and Electronics Engineer Trainee",
      date: "August 2025 – November 2025",
      description: "Gained hands-on experience in Solar Projects, Telecommunication infrastructure, and network-side operations.",
      points: [
        "Gained hands-on experience in telecom tower infrastructure and solar-powered base station systems. ",
        "Assisted in installation, monitoring, and maintenance of solar panels, batteries, and power units at tower sites.",
        "Supported basic network diagnostics and site inspections alongside senior engineers while following safety standards."
      ]
    },
    {
      company: "SLT Mobitel",
      logo: "/slt.png",
      role: "Telecommunication Engineer Intern",
      date: "June 2024 – August 2024",
      description: "Gained hands-on experience in broadband connectivity, telecom infrastructure, and enterprise networking.",
      points: [
        "Configured and troubleshot ADSL, ONT, and OneAccess devices for stable internet access.",
        "Supported copper line repairs and fiber optic (FTTH) installations.",
        "Assisted in network diagnostics alongside senior engineers."
      ]
    }
    
  ];

  return (
    <div id="experience" className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-inter py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617] text-center mb-12">
          Experiences
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Header section with company name */}
              <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-8 flex justify-center items-center h-32">
                <h2 className="text-2xl font-bold text-white text-center">{training.company}</h2>
              </div>

              {/* Logo placeholder circle */}
              <div className="flex justify-center -mt-12 relative z-10">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-white flex items-center justify-center shadow-lg overflow-hidden">
                  {training.logo ? (
                    <img src={training.logo} alt={training.company} className="w-20 h-20 object-contain" />
                  ) : (
                    <div className="text-sm font-bold text-[#fe5617] text-center px-2">
                      {training.company.split(" ")[0]}
                    </div>
                  )}
                </div>
              </div>

              {/* Content section */}
              <div className="bg-white p-8 pt-6">
                <h3 className="text-xl font-bold text-center text-[#1a1a2e]">{training.role}</h3>
                <p className="text-center text-[#fe5617] mt-2 font-semibold">{training.date}</p>

                <p className="text-center text-gray-600 mt-4 text-sm leading-relaxed">
                  {training.description}
                </p>

                <ul className="list-disc pl-5 mt-6 text-gray-700 space-y-2 text-sm">
                  {training.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
