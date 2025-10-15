import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
  const { id } = useParams();

  const studentData = {
    1: { name: "John Aimiel Pena", age: 25, course: "BSIT", description: "Hardworking and consistent student." },
    2: { name: "Student 2", age: 21, course: "BSCS", description: "Enjoys coding and web development." },
    3: { name: "Student 3", age: 19, course: "BSIS", description: "Loves UI/UX design and teamwork." },
  };

  const student = studentData[id];

  if (!student) return <p>No student found.</p>;

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {student.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Age: {student.age}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Course: {student.course}</p>
        <p className="text-gray-700 dark:text-gray-400 italic">{student.description}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
