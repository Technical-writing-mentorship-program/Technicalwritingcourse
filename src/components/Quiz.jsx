import React, { useState } from "react";

export default function Quiz({ questions }) {
  const [score, setScore] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;

    questions.forEach((q, idx) => {
      const answer = e.target[`question${idx}`].value;
      if (answer === q.correct) newScore++;
    });

    setScore(newScore);
  };

  return (
    <div className="quizContainer alert">
      <strong><em>Check your knowledge:</em></strong>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div className="questionContainer" key={idx}>
            <h3>QUESTION {idx + 1}:</h3>
            <p>{q.text}</p>
            {q.options.map((opt, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question${idx}`}
                  value={opt.value}
                  required
                />{" "}
                {opt.label}
                <br />
              </label>
            ))}
          </div>
        ))}
        <button className="quizBtn" type="submit">Check your answers</button>
      </form>

      {score !== null && (
        <p className="resultLabel" style={{ fontWeight: "bold" }}>
          You scored {score} out of {questions.length}
        </p>
      )}
    </div>
  );
}
