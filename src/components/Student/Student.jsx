import Score from "../Score/Score";


const Student = (props) => {
  return (
    <>
      <h2>Name: {props.student.name}</h2>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx) => 
      <Score 
        key={idx}
        score={score}
        studentName={props.student.name}
      />
    )}
    </>
  );
}

export default Student;