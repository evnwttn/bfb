import "../style.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const { register, handleSubmit, setValue } = useForm({
  defaultValues: {
    id: "Butt Sesh",
    author: "Button",
    tracks: [
      { title: "Track 1" },
      { title: "Track 2" },
      { title: "Track 3" },
      { title: "Track 4" },
      { title: "Track 5" },
    ],
    parameters: [
      "title",
      "Vocals",
      "Percussion",
      "Rhythm Guitar",
      "Lead Guitar",
      "Drums",
      "Piano",
      "FX",
      "Mix",
      "Master",
    ],
  },
});

const [sessionData, setSessionData] = useState();
const onSubmit = (data) => setSessionData(data);

const useEffect =
  (() => {
    console.log(sessionData);
  },
  [sessionData]);

export const BFB = () => {
  function pushDeButton() {
    console.log(session);
  }

  return (
    <button id="bfb" onClick={handleSubmit(onSubmit)}>
      BFB
    </button>
  );
};

// const targetFormat = {
//   id: "title",
//   author: "author",
//   tracks: [
//     {
//       title: "song 1",
//       parameters: [
//         { parameter: "para1", colour: "transparent", comment: "" },
//         { parameter: "para2", colour: "transparent", comment: "" },
//       ],
//     },
//     {
//       title: "song 2",
//       parameters: [
//         { parameter: "para1", colour: "transparent", comment: "" },
//         { parameter: "para2", colour: "transparent", comment: "" },
//       ],
//     },
//   ],
//   parameters: ["title", "para1", "para2"],
// };
