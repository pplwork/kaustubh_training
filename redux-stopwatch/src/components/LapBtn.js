export default function LapBtn({lapTime}) {
  return (
    <div className="btn">
      <button onClick={lapTime}>
        Lap
      </button>
    </div>
  );
}