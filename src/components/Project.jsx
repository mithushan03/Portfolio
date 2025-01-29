const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            SmartTemp Control
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            SmartTemp Control is an innovative IoT-based solution designed for efficient room temperature monitoring and control. Built using NodeMCU, it integrates sensors and mobile connectivity to provide real-time temperature data and remote control. This system demonstrates the application of electrical and electronics engineering principles, such as sensor interfacing, circuit design, and wireless communication, offering a practical example of how technology can enhance comfort and energy efficiency in modern environments.
            </p>
          </div>

          {/* Biosta AI Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
            RFID AttendEase: Smart Attendance System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            RFID AttendEase is an innovative attendance management system that uses RFID technology to automate and streamline the process of recording attendance. By simply scanning an RFID tag, the system captures attendance data and automatically logs it in a Google Sheet. This eliminates manual entry, reduces errors, and provides real-time updates, making attendance tracking more efficient and convenient for both students and administrators.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
