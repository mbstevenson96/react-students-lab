import Student from "../Student/Student";

const StudentList = (props) => {
  return (
    <>
    <div>
      {props.students.map(student => 
        <Student 
          student={student} 
          key={student.name}
        />
      )}
    </div>
    </>
  );
}

export default StudentList;