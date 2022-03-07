export default function StartBtn({start , isPaused}) {
  return (
    <div className="btn">
      <button onClick={start}>
        {isPaused?"Resume":"Start"}
      </button>
    </div>
  );
}