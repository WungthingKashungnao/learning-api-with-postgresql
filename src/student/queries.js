const { text } = require("express");

const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteAllStudents = "DELETE FROM students";
const deleteStudentById = "DELETE FROM students WHERE id = $1";
const updateStudentName = "UPDATE students SET name = $1 where id = $2";
// const getStudentById = (id) => {
//   const sql = `SELECT * FROM students WHERE id = $1`; //$1 to prevent sql injection
//   //   code to prevent sql injection start
//   const values = [id];
//   return { text: sql, values: values };
//   //   code to prevent sql injection start end
// };

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  deleteAllStudents,
  deleteStudentById,
};
