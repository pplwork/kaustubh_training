export default function StopBtn({stop}) {
  return (
    <div className="btn">
      <button onClick={stop}>
        Stop
      </button>
    </div>
  );
}