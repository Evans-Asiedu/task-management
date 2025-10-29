import { useParams } from "react-router-dom";
import Header from "src/components/layout/Header";
import VideoPlayer from "src/components/VideoPlayer";
import AssignedAssignments from "src/components/AssignedAssignments";
import { taskDetails } from "src/data";

const TaskDetail = () => {
  const { id } = useParams();
  const task = taskDetails[id];

  if (!task) {
    return (
      <>
        <Header showActions={true} title="Detail Task" />
        <main className="h-full flex items-center justify-center bg-n-2">
          <h1 className="text-secondary-500">Task not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Header showActions={true} title="Detail Task" />
      <main className="h-full bg-n-2 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - Left Column */}
            <div className="bg-white rounded-r-1 lg:col-span-2 space-y-6">
              {/* Video Player */}
              <VideoPlayer
                thumbnail={task.thumbnail}
                title={task.title}
                duration={task.duration}
                currentTime={task.currentTime}
                progress={22}
              />

              {/* Task Title and Info */}
              <div className=" p-6">
                <h1 className="text-2xl font-bold text-secondary-500 mb-3">
                  {task.title}
                </h1>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-secondary-400 text-sm">
                      {task.categories.join(" . ")}
                    </span>
                    <button className="text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors">
                      + Get Mentors
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-secondary-400">
                  <div className="flex items-center space-x-2">
                    <i className="fa fa-users text-primary-500"></i>
                    <span>{task.studentsInvolved} Students Involved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fa fa-clock text-primary-500"></i>
                    <span>{task.durationHours} Hour</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className=" p-6">
                <h2 className="text-lg font-bold text-secondary-500 mb-4">
                  Description
                </h2>
                <p className="text-secondary-400 leading-relaxed">
                  {task.description}
                </p>
              </div>

              {/* Assessment */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-secondary-500 mb-4">
                  Essence of Assessment
                </h2>
                <div className="space-y-3">
                  {task.assessment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                        <i className="fa fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-secondary-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assignment Sidebar - Right Column */}
            <div className="space-y-6">
              <AssignedAssignments task={task} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskDetail;
