import pic1 from '../images/avatar.png';
import pic2 from '../images/1.png';

const students = [
  {
      id: 1,
      firstname: "Jane",
      lastname: "Doe",
      program: "Bachelors of Computer Science",
      school: "University of McMaster",
      experience: [{ name: 'RBC', role: "TSA"}, { name: 'CIBC', role: "Developer"}, { name: "Google", role: "CEO" }],
      skills: [{ skill: "java", score: '17'}, { skill: 'python', score: '25'}, { skill: 'C++', score: '134'}],
      image: pic1,
      score: 445
  },
  {
      id: 2,
      firstname: "Jacob",
      lastname: "Salavar",
      program: "Bachelor in Business Administration",
      school: "University of Waterloo",
      experience: [{ name: 'RangleIO', role: "Scrum Leader"}, { name: 'Amazon', role: "Data Scientist"}, { name: "Google", role: "Developer" }],
      skills: [{ skill: "java", score: '78'}, { skill: 'ADA', score: '56'}, { skill: 'C++', score: '80'}],
      image: pic2,
      score: 231
  }
];

export default students;
