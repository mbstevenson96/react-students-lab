import Score from "../Score/Score";


const Student = (props) => {
  return (
    <>
      <div id="student-div-container">
        <div id="student-div">
          <h2>{props.student.name}</h2>
          <p id="student-p">{props.student.bio}</p>
          {props.student.scores.map((score, idx) => 
            <Score 
              key={idx}
              score={score}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Student;