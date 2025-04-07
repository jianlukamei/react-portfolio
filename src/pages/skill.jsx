// import React from 'react';
// import './skill.css';
// import Component from './skillchart';

// const skills = [
//   { name: 'HTML-5', percentage: 80, color: 'info' },
//   { name: 'Css-3', percentage: 85, color: 'success' },
//   { name: 'Bootstrap-5', percentage: 70, color: 'primary' },
//   { name: 'Javascript', percentage: 50, color: 'warning' }
// ];

// function Skills() {
//   return (
//     <div id="skills" className="bg-black">
//       <div className="container">
//         <div className="text-center pt-5 pb-3">
//           <span className="text-light skill text-center fs-2">
//             My <span className="text-primary">Skills</span>
//           </span>
//         </div>
      
//         <div className="d-flex flex-column gap-3 skill-div pt-4">
//           {skills.map((skill, index) => (
//             <div className="progress" key={index}>
//               <span className="text-dark fs-6 justify-content-center align-items-center pe-2 progress-title">
//                 {skill.name}
//               </span>
//               <div
//                 className={`progress-bar progress-bar-striped bg-${skill.color}`}
//                 role="progressbar"
//                 style={{ width: `${skill.percentage}%` }}
//                 aria-valuenow={skill.percentage}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 {skill.percentage}%
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;