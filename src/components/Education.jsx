const Education = () => {
  const education = [
    {
      school: "South Eastern University of Sri Lanka",
      degree: "B.Sc. (Hons) in Electrical and Electronics Engineering",
      period: "2022 - Present",
      highlights: [
        "Final-year undergraduate focusing on power systems, electronics, and communication.",
        "Projects across automation, IoT, and AI/ML applications.",
      ],
    },
    {
      school: "Vavuniya Tamil Madya Maha Vidyalayam",
      degree: "Advanced Level (Physical Science)",
      period: "Completed",
      highlights: [
        "Strong foundation in Mathematics and Physics.",
        "Leadership and teamwork through extracurricular activities.",
      ],
    },
  ];

  return (
    <section id="education" className="bg-white py-16 min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-inter space-y-14">
        <div className="text-center space-y-2">
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#fe5617]">Education</h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#fe5617] via-[#ff8c4a] to-[#ffe5d5] rounded-full" />

          <div className="space-y-10">
            {education.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* connector dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white border-4 border-[#fe5617] shadow-md" />

                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-[#1a1a2e]">{item.school}</h3>
                        <span className="text-xs font-semibold text-[#fe5617] bg-[#fff1e8] px-3 py-1 rounded-full uppercase tracking-wide">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[#fe5617] font-semibold mt-2">{item.degree}</p>
                      <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2 text-sm">
                        {item.highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
