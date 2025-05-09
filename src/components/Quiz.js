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
    <div className="alert alert--info">
      <strong>Check your knowledge:</strong>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx}>
            <h3>Question {idx + 1}:</h3>
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
        <button type="submit">Check your answers</button>
      </form>

      {score !== null && (
        <p style={{ fontWeight: "bold" }}>
          You scored {score} out of {questions.length}
        </p>
      )}
    </div>
  );
}
