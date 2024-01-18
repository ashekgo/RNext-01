import React from 'react'
import StudentImg from '../assets/avatar.png'

let studentsData = [
    { Class: 1, ID: 101, Name: 'Salahuddin', Score: 'A+', Percentage: 95 },
    { Class: 1, ID: 102, Name: 'Akash', Score: 'A', Percentage: 88 },
    { Class: 1, ID: 103, Name: 'Tamanna', Score: 'B', Percentage: 75 },
    { Class: 1, ID: 104, Name: 'Raju', Score: 'C', Percentage: 62 },
    { Class: 1, ID: 105, Name: 'Farhana', Score: 'D', Percentage: 50 },
    { Class: 1, ID: 106, Name: 'Asif', Score: 'A+', Percentage: 96 },
    { Class: 1, ID: 107, Name: 'Anika', Score: 'A', Percentage: 89 },
    { Class: 1, ID: 108, Name: 'Imran', Score: 'B', Percentage: 78 },
    { Class: 1, ID: 109, Name: 'Priya', Score: 'C', Percentage: 65 },
    { Class: 1, ID: 110, Name: 'Kamal', Score: 'A+', Percentage: 98 },
    { Class: 2, ID: 201, Name: 'Sadh', Score: 'A+', Percentage: 97 },
    { Class: 2, ID: 202, Name: 'Obaidul', Score: 'A', Percentage: 88 },
    { Class: 2, ID: 203, Name: 'Nasreen', Score: 'B', Percentage: 76 },
    { Class: 2, ID: 204, Name: 'Jahangir', Score: 'C', Percentage: 63 },
    { Class: 2, ID: 205, Name: 'Nisha', Score: 'D', Percentage: 52 },
    { Class: 2, ID: 206, Name: 'Naim', Score: 'A+', Percentage: 95 },
    { Class: 2, ID: 207, Name: 'Fariha', Score: 'A', Percentage: 90 },
    { Class: 2, ID: 208, Name: 'Riaz', Score: 'B', Percentage: 77 },
    { Class: 2, ID: 209, Name: 'Tania', Score: 'C', Percentage: 68 },
    { Class: 2, ID: 210, Name: 'Shaon', Score: 'A+', Percentage: 99 },
    { Class: 3, ID: 301, Name: 'Noyon', Score: 'A', Percentage: 92 },
    { Class: 3, ID: 302, Name: 'Sabbir', Score: 'A+', Percentage: 98 },
    { Class: 3, ID: 303, Name: 'Ritu', Score: 'B', Percentage: 85 },
    { Class: 3, ID: 304, Name: 'Fahim', Score: 'C', Percentage: 70 },
    { Class: 3, ID: 305, Name: 'Nusrat', Score: 'D', Percentage: 48 },
    { Class: 3, ID: 306, Name: 'Anis', Score: 'A+', Percentage: 94 },
    { Class: 3, ID: 307, Name: 'Liza', Score: 'A', Percentage: 87 },
    { Class: 3, ID: 308, Name: 'Rafi', Score: 'B', Percentage: 79 },
    { Class: 3, ID: 309, Name: 'Sumaiya', Score: 'C', Percentage: 66 },
    { Class: 3, ID: 310, Name: 'Farhan', Score: 'A+', Percentage: 97 }
  ]

  
  export default function Table({ classNumber }) {
    let studentsByClass = studentsData
        .filter((student) => student.Class === classNumber)
        .map((student) => (
            <tr key={student.ID} className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{student.ID}</td>
                <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                        <img
                            className="w-8 h-8"
                            src={StudentImg}
                            width={32}
                            height={32}
                            alt="John Smith"
                        />
                        <span className="whitespace-nowrap">{student.Name}</span>
                    </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">{student.Score}</td>
                <td className="p-5 text-sm md:text-xl text-center">{student.Percentage}%</td>
            </tr>
        ));

    return (
        <>
            <div className="max-w-[848px] mx-auto overflow-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#FFFFFF0D]">
                            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                                ID
                            </th>
                            <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
                            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render students for the given class */}
                        <tr className="bg-white/5">
                            <td className="p-5 text-sm md:text-xl" colSpan={4}>
                                Class {classNumber}
                            </td>
                        </tr>
                        {studentsByClass}
                    </tbody>
                </table>
            </div>
        </>
    );
}
