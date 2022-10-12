const Score = (props) => {
  return (
    <>
      <h3>Scored {props.score.score} on {props.score.date}</h3>
    </>
  );
}

export default Score;