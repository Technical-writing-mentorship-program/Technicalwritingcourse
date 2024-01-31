---
title: "Authors"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
date: 2023-08-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "example-6a1a6be4373e933280d78ea53de6158e"
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

These fantastic folks volunteered their time and skills to create this Open Source Technical Writing Course for Beginners.

It's packed with useful stuff and totally **FREE for everyone!**

<body>

{{< details "Check your knowledge" >}}

<form id="quizForm">
  <h2>Question 1:</h2>
  <p>The main goal of technical writing is?</p>
  <label>
    <input type="radio" name="question1" value="Paris"> To confuse the audience
  </label><br>
  <label>
    <input type="radio" name="question1" value="complex"> To explain complex ideas clearly
  </label><br>
  <label>
    <input type="radio" name="question1" value="London"> To use complex language
  </label><br>

  <h2>Question 2:</h2>
  <p>Which of the following is an example of a document created through technical writing?</p>
  <label>
    <input type="radio" name="question2" value="3"> A fictional short story
  </label><br>
  <label>
    <input type="radio" name="question2" value="report"> A report on market trends in the finance industry
  </label><br>
  <label>
    <input type="radio" name="question2" value="4"> A cookbook with recipes from around the world
  </label><br>

  <br>
  <input type="submit" value="Check your answers" onclick="gradeQuiz()">
</form>

<p id="result"></p>

<script>
  function gradeQuiz() {
    event.preventDefault(); // Prevent form submission

    const answers = {
      question1: document.querySelector('input[name="question1"]:checked').value,
      question2: document.querySelector('input[name="question2"]:checked').value
    };

    // Correct answers
    const correctAnswers = {
      question1: "complex",
      question2: "report"
    };

    let score = 0;

    // Check answers and calculate score
    if (answers.question1 === correctAnswers.question1) {
      score++;
    }
    if (answers.question2 === correctAnswers.question2) {
      score++;
    }

    // Display the score
    document.getElementById('result').innerHTML = `You scored ${score} out of 2`;
  }
</script>

</body>

{{< /details >}}

<h3><span style="color: #FF0000;" class="highlight">Help us solve this challenge</span></h3>
{{< details " Write a sample application" open >}}

Get ready to start building projects
{{< /details >}}

## Editor:

- [Wisdom Nwokocha:](https://www.linkedin.com/in/joklinztech) a seasoned software engineer and a technical writer

## Meet the Authors:

- Susan Idii: A seasoned software engineer with a passion for clear communication, leads the Introduction to Technical Writing section, demystifying core concepts and best practices.

- [Temitope Victoria:](https://www.linkedin.com/in/temitope-victoria/) a technical writer and cloud engineer.

- [Blessing Ene Anyebe](https://www.linkedin.com/in/anyebe-blessing-ene-kwennb/): Blessing is a well-rounded tech person with skills that include design and frontend engineering. Currently she focuses on Technical Writing, API documentation, and Search Engine Optimization.

- [Akorede Da silva](https://www.linkedin.com/in/akorede-dasilva/) Akorede is a multi-disciplinary designer, product manager, XR developer and technical writer. 

_Why free?_

We believe everyone deserves to learn tech writing, no matter what! So grab this open-source course and unlock your future in tech writing.

{{< callout context="tip" title="Remeber" icon="rocket" >}}
This course is completely free and open to all! Get started today and open the door to your tech writing future!
{{< /callout >}}

Quiz
This is a <span style="color: #FF0000;" class="highlight">highlighted red</span> word.

<iframe src="https://forms.gle/ePPL3ELDu1NUyg5t7" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
