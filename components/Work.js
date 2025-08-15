'use client'
import React, { useState } from 'react';

// Sample data - replace with your actual career journey
const workExperience = [
  {
    id: 1,
    company: "Tech Startup Inc.",
    position: "Frontend Developer",
    duration: "2024 - Present",
    location: "San Francisco, CA",
    type: "Current",
    description: "Building cutting-edge web applications with React and modern JavaScript frameworks.",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    achievements: ["Led UI redesign increasing user engagement by 40%", "Mentored 3 junior developers"],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    company: "Digital Agency Ltd.",
    position: "Full Stack Developer",
    duration: "2022 - 2024",
    location: "New York, NY",
    type: "Previous",
    description: "Developed end-to-end solutions for diverse clients across various industries.",
    skills: ["JavaScript", "Python", "MySQL", "Docker"],
    achievements: ["Delivered 15+ client projects on time", "Improved app performance by 60%"],
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    company: "Creative Solutions Co.",
    position: "Junior Developer",
    duration: "2021 - 2022",
    location: "Remote",
    type: "Previous",
    description: "Started my professional journey, learning industry best practices and contributing to team projects.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    achievements: ["Completed intensive training program", "Built first production application"],
    color: "from-orange-500 to-red-600"
  }
];

const Work = () => {
  const [selectedJob, setSelectedJob] = useState(workExperience[0]);
  const [hoveredJob, setHoveredJob] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {/* <TrendingUp size={16} /> */}
            Career Journey
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            WORK LIFE
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oh this was such a lovely Journey! From curious beginner to seasoned professional, 
            here's how my career has evolved across different companies and challenges.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                {/* <Calendar size={20} /> */}
                Career Timeline
              </h3>
              <div className="space-y-4">
                {workExperience.map((job, index) => (
                  <div
                    key={job.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedJob.id === job.id 
                        ? 'transform scale-105' 
                        : hoveredJob === job.id 
                        ? 'transform scale-102' 
                        : ''
                    }`}
                    onClick={() => setSelectedJob(job)}
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    {/* Connecting Line */}
                    {index < workExperience.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                    )}
                    
                    <div className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedJob.id === job.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}>
                      <div className={`absolute -left-2 top-6 w-4 h-4 rounded-full border-4 ${
                        selectedJob.id === job.id ? 'bg-blue-500 border-blue-200' : 'bg-gray-300 border-gray-100'
                      }`}></div>
                      
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${job.color} text-white flex-shrink-0`}>
                          {/* <Building size={16} /> */}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{job.position}</h4>
                          <p className="text-sm text-gray-600 truncate">{job.company}</p>
                          <p className="text-xs text-gray-500 mt-1">{job.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedJob.color} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedJob.position}</h2>
                    <div className="flex items-center gap-4 text-white/90">
                      <div className="flex items-center gap-1">
                        {/* <Building size={16} /> */}
                        {selectedJob.company}
                      </div>
                      <div className="flex items-center gap-1">
                        {/* <MapPin size={16} /> */}
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center gap-1">
                        {/* <Calendar size={16} /> */}
                        {selectedJob.duration}
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedJob.type === 'Current' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/10 text-white/80'
                  }`}>
                    {selectedJob.type}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    {/* <Lightbulb size={18} /> */}
                    Role Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    {/* <Code size={18} /> */}
                    Technologies & Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-gradient-to-r ${selectedJob.color} text-white text-sm rounded-full font-medium shadow-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    {/* <Award size={18} /> */}
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {selectedJob.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{workExperience.length}</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Reflection */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Journey Continues...</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Each role has been a stepping stone, teaching me valuable lessons and helping me grow both 
              professionally and personally. From writing my first lines of code to leading complex projects, 
              this journey has been filled with challenges, victories, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;