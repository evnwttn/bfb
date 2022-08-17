import "../style.css";

const axios = require("axios").default;

export const BFB = () => {
  function pushDeButton() {
    axios
      .post("http://localhost:5000/contact", {
        data: "hello",
      })
      .then((_data) => console.log(JSON.stringify(_data)))
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <button id="bfb" onClick={pushDeButton}>
      BFB
    </button>
  );
};
