const AssignedAssignments = ({ task }) => {

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="bg-white rounded-r-1 p-6">
      <h3 className="text-sm font-medium text-secondary-400 mb-2">
        Assigned Assignments
      </h3>
      <h2 className="text-xl font-bold text-secondary-500 mb-2">
        {task.title}
      </h2>
      <p className="text-secondary-400 text-sm mb-6">
        {task.categories.join(" . ")}
      </p>

      {/* Student Details */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-secondary-500 mb-4">
          Detail Student
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-secondary-400">Student's name</span>
            <span className="text-secondary-500 font-medium">
              : {task.student.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary-400">Student Class</span>
            <span className="text-secondary-500 font-medium">
              : {task.student.class}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary-400">Student Number</span>
            <span className="text-secondary-500 font-medium">
              : {task.student.number}
            </span>
          </div>
        </div>
      </div>

      {/* File Task */}
      <div>
        <h3 className="text-lg font-bold text-secondary-500 mb-4">File Task</h3>
        <p className="text-secondary-400 text-sm mb-4">
          Last Modified: {task.lastModified}
        </p>

        {/* File Upload Area */}
        <div className="relative border-2 border-dashed border-secondary-200 rounded-r-1 p-8 text-center mb-4">
          <i className="fa fa-file-o text-4xl text-secondary-300 mb-3"></i>
          <p className="text-secondary-400 text-sm">
            *drag or browser from device
          </p>
          <input
            type="file"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <button className="w-full bg-primary-500 text-white py-3 rounded-r-1 font-medium hover:bg-primary-600 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AssignedAssignments;
