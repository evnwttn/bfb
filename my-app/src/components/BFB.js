import "../style.css";

export const BFB = () => {
  function pushDeButton() {
    console.log("hello");
  }

  return (
    <button id="bfb" onClick={pushDeButton}>
      BFB
    </button>
  );
};
