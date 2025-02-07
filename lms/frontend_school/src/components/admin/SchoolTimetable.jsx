import React from "react";
import { FaSchool } from "react-icons/fa6";

const timetableData = [
  {
    time: "07:30 - 08:15",
    Monday: "Sinhala",
    Tuesday: "Sinhala",
    Wednesday: "Sinhala",
    Thursday: "Sinhala",
    Friday: "Sinhala",
  },
  {
    time: "08:15 - 09:00",
    Monday: "Maths",
    Tuesday: "Science",
    Wednesday: "Sinhala",
    Thursday: "English",
    Friday: "Religion",
  },
  {
    time: "09:00 - 09:45",
    Monday: "History",
    Tuesday: "Maths",
    Wednesday: "Geography",
    Thursday: "Health",
    Friday: "Tamil",
  },
  {
    time: "10:00 - 10:45",
    Monday: "English",
    Tuesday: "Religion",
    Wednesday: "Science",
    Thursday: "Maths",
    Friday: "Geography",
  },
  {
    time: "10:45 - 11:30",
    Monday: "Health",
    Tuesday: "Sinhala",
    Wednesday: "History",
    Thursday: "Tamil",
    Friday: "English",
  },
  {
    time: "11:45 - 12:30",
    Monday: "Tamil",
    Tuesday: "Geography",
    Wednesday: "Maths",
    Thursday: "Science",
    Friday: "History",
  },
  {
    time: "12:30 - 01:15",
    Monday: "Sports",
    Tuesday: "English",
    Wednesday: "Religion",
    Thursday: "Sinhala",
    Friday: "Health",
  },
  {
    time: "01:15 - 02:00",
    Monday: "Club Activities",
    Tuesday: "Art",
    Wednesday: "Music",
    Thursday: "Dance",
    Friday: "Drama",
  },
];

export default function SchoolTimetable() {
  return (
    <div className="col-span-2 pt-8 space-y-2">
      <div className="flex text-center justify-center items-center gap-2">
        <FaSchool className="text-4xl text-blue-800" />
        <h2 className="text-2xl  text-blue-800 tracking-wider font-normal capitalize font-pacific  ">
          School Timetable
        </h2>
      </div>
      <div className="flex justify-between pt-2 items-center">
        <select
          type="text"
          placeholder=""
          className="px-4 py-1 w-[50%] text-gray-700 border border-gray-300 rounded-md text-sm"
        >
          <option value="">select grade</option>
          <option value="1">1 A</option>
          <option value="2">2 A</option>
          <option value="3">3 A</option>
          <option value="4">4 A</option>
        </select>
        <p className="text-sm ">
          Grade: <span className="font-semibold">11 A</span>
        </p>
      </div>
      <table className="min-w-full border-collapse border ">
          <thead className="">
            <tr className="text-xs bg-teal-800">
              <th className="border p-2">Time</th>
              <th className="border p-2">Monday</th>
              <th className="border p-2">Tuesday</th>
              <th className="border p-2">Wednesday</th>
              <th className="border p-2">Thursday</th>
              <th className="border p-2">Friday</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {timetableData.map((entry, index) =>
              <tr key={index}>
              <td className="border p-2">{entry.time}</td>
              <td className="border p-2">{entry.Monday}</td>
              <td className="border p-2">{entry.Tuesday}</td>
              <td className="border p-2">{entry.Wednesday}</td>
              <td className="border p-2">{entry.Thursday}</td>
              <td className="border p-2">{entry.Friday}</td>
            </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
