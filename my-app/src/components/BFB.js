import "../style.css";

const session = {
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
  author: "Button",
  id: "Butt Sesh",
  tracks: [
    { title: "Track 1" },
    { title: "Track 2" },
    { title: "Track 3" },
    { title: "Track 4" },
    { title: "Track 5" },
  ],
};

export const BFB = () => {
  function pushDeButton() {
    console.log(session);
  }

  return (
    <button id="bfb" onClick={pushDeButton}>
      BFB
    </button>
  );
};
