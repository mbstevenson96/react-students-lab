const Score = (props) => {
  return (
    <>
      <h3>{props.studentName} scored {props.score.score}</h3>
    </>
  );
}

export default Score;