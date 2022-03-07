export default function ResetBtn({resetTime}) {
  return (
    <div className="btn">
      <button onClick={resetTime}>
        Reset
      </button>
    </div>
  );
}