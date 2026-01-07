import React, { useState } from "react";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Whisper-Based Multi-Speaker Meeting Transcription System with Speaker Diarization",
      description: "A smart system that uses OpenAI’s Whisper model to accurately transcribe multi-speaker meetings and automatically identify who spoke when through speaker diarization.",
      technologies: ["OpenAI Whisper", "Speaker Diarization", "Python", "Audio Processing"],
      image: "/whisper.png"
    },
    {
      title: "RFID AttendEase: Smart Attendance System",
      description: "RFID AttendEase is an innovative attendance management system that uses RFID technology to automate and streamline the process of recording attendance. By simply scanning an RFID tag, the system captures attendance data and automatically logs it in a Google Sheet. This eliminates manual entry, reduces errors, and provides real-time updates, making attendance tracking more efficient and convenient for both students and administrators.",
      technologies: ["RFID", "Google Sheets API", "Arduino", "Automation"],
      image: "/RFID.png"
    } ,
    {
      title: "SmartTemp Control",
      description: "SmartTemp Control is an innovative IoT-based solution designed for efficient room temperature monitoring and control. Built using NodeMCU, it integrates sensors and mobile connectivity to provide real-time temperature data and remote control. This system demonstrates the application of electrical and electronics engineering principles, such as sensor interfacing, circuit design, and wireless communication, offering a practical example of how technology can enhance comfort and energy efficiency in modern environments.",
      technologies: ["NodeMCU", "IoT", "Sensors", "Wireless Communication"],
      image: "/smarttemp.jpg"
    }
      
  ];

  return (
    <div id="project" className="bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] min-h-screen flex items-center py-16">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-inter w-full">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] mb-12">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Area */}
              <div 
                className="h-48 bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-center text-lg font-semibold">
                    {project.title}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#fe5617]/10 text-[#fe5617] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-red-400 text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Large Image */}
                {selectedProject.image && (
                  <div className="mb-8 h-80 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 text-base mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#fe5617]/10 text-[#fe5617] px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-[#fe5617] text-white font-bold py-3 rounded-xl hover:bg-[#d4460a] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
