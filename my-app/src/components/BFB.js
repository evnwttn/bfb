import "../style.css";

export const BFB = () => {
  function sayHello() {
    alert("You clicked me!");
  }

  return (
    <button id="bfb" onClick={sayHello}>
      BFB
    </button>
  );
};
