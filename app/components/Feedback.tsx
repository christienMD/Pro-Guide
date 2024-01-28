
const Feedback = ({ score }: { score: number }) => {
  let feedbackText = "";

  if (score > 70) {
    feedbackText = "Great!";
  } else if (score > 50 && score <= 70) {
    feedbackText = " That was Good, You can do better";
  } else {
    feedbackText = "Not a Great Performance";
  }

  return (
    <div>
      <h1 className="text-3xl  font-light">{feedbackText}</h1>
    </div>
  );
};

export default Feedback;
