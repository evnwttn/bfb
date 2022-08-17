export const BFB = () => {
  function sayHello() {
    alert("You clicked me!");
  }

  return (
      <button onClick={sayHello}>Default</button>;
  );
};
