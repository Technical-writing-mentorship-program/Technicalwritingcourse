---
title: "Intro to technical writing"
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
  title: "Introduction to technical writing" # custom title (optional)
  description: "In this module, you will learn what technical writing is, the different type of technical documentation, audience for technical documentation, purpose of technical documentation and technical writing process."
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Table of Contents

- What is technical writing?
- Different types of technical documentation
- The audience for technical documentation
- The purpose of technical documentation
- The technical writing process

## What is technical writing?

Technical writing is a highly valued skill today, and the demand for technical writers will keep growing because of rapid advancements in science and technology. But, then, what is technical writing?

Technical writing is a specialized field that delivers clear and understandable instructions, directions, guidance, or information to a specific audience through documentation.

Technical writing mainly aims to break down hard concepts or information into simple concepts easily understood by the targeted audience.

In simple terms, technical writing provides factual and concise information to facilitate understanding and task completion.


{{< callout context="note" title="Check your knowledge:" icon="info-circle" >}}

<body>
<form id="quizForm">
  <h2>Question 1:</h2>
  <p>The demand for technical writers keeps growing because the rapid advancement in science and technology
</p>
  <label>
    <input type="radio" name="question1" value="True"> True
  </label><br>
  <label>
    <input type="radio" name="question1" value="complex"> False
  </label><br>
  <label>
    <input type="radio" name="question1" value="London"> Maybe
  </label><br>
  <h2>Question 2:</h2>
  <p>What is the aim of technical writing?</p>
  <label>
    <input type="radio" name="question2" value="3"> To simplify a complex concept
  </label><br>
  <label>
    <input type="radio" name="question2" value="report"> To further complicate a complex concept
  </label><br>
  <label>
    <input type="radio" name="question2" value="4">  To write a complex concept  ambiguously
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
      question1: "True",
      question2: "3"
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
{{< /callout >}}


## Different Types of Technical Documentation

Technical documentation comprises detailed instructions, step-by-step guides, or information regarding a product or technology.



{{< callout context="tip" title="Did you know?" icon="rocket" >}}
To create effective technical documentation, a technical writer must possess subject matter expertise, ensuring their audience can effortlessly comprehend the instructions or guides.
{{< /callout >}}

        For instance, a technical writer lacking a strong background in programming cannot produce quality API documentation, as it demands a solid understanding of programming concepts like functions, arrays, objects, maps, and so on.

There are numerous types of technical documentation, and their writing style varies. Below is a list of some types of technical documentation:

- ##### Technical reports:

These documents provide detailed results of projects, research findings, investigations, and experiments in a specified field. They may include recommendations and conclusions.

The key elements of technical reports are the title, introduction, summary, experimental details, results and discussions, body, and conclusion.

An example of a technical report is the [Complete Engineering and Economics of Solar Photovoltaic Hybrid Power System ](https://www.offidocs.com/public/?v=ext&pdfurl=https://ecse.monash.edu/techrep/reports/2004/MECSE-29-2004.pdf).

- ##### Installation Guides:

These documents assist users or customers in installing software, products, or systems correctly. Installation guides give general instructions about products or software and step-by-step instructions for installation. Examples of installation guides are home appliances, computer software, etc.

For example, the [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview) provides detailed step-by-step instructions for installing VScode on your computer.

- ##### User manuals:

These are also known as user guides or instruction manuals. It is a written document that provides information on product features, step-by-step guides, product functionality, and troubleshooting instructions in case of issues. An example of a user manual is [WhatsApp User Manual](https://www.wiseradviser.org/uploads/general/WhatsApp_User_Manual_Final.pdf).

- ##### Technical Specifications:

These are manuals or documents that detail a product's technical aspects. They also provide vital information about product development.

For instance, in software development, the technical specification manual provides essential information about an app, such as the problems it is solving, the features of the app, implementation plans, software's architecture, programming languages, and libraries to be used for developing the app, the hardware requirement and testing procedures.

An example of a technical specification document is the [Software Requirements Specification document](https://krazytech.com/projects/sample-software-requirements-specificationsrs-report-airline-database).

- ##### API Documentation:

These documents guide users on integrating an application programming interface(API). It includes details on endpoints, authentication, request and response formats. An example is the [Paystack](https://paystack.com/docs/api/) API documentation.

- ##### Technical proposal:

These are well-written documents that outline details of a proposed technical project, product, solution, and so on. The primary goal of a technical proposal is to show actionable plans to stakeholders or decision-makers, persuading them to accept and support the proposed project.

For instance, if a writer proposes a project to a company, the proposal should provide an overview, scope, target audience, and other essential project details.

Click on this [Technical Proposal Template](https://goprospero.com/proposal/software-development-proposal-template/) to learn how to structure your technical proposal.

- ##### White Papers:

These documents provide comprehensive analysis, information, or recommendations on a specific topic, product, or technology. White papers are used across various fields to provide in-depth reports to aid understanding and decision-making.

An example of a white paper is the [WhatsApp Security White Paper](https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf).

- ##### Release notes:

These are documents that inform users, developers, or administrators about recent features of a software product, bug fixes, or any other update.

For example, a software company may introduce new features in their product, such as dark mood support, improved mobile responsiveness, streamlined navigation, and bug fixes, through release notes.

[The Google Cloud Release Note](https://cloud.google.com/release-notes) is an example of a release note.

- ##### Online help:

These digital documents provide instructions, guidance, or information to assist users in effectively using products.

For example, Google [Chrome's](https://support.google.com/chrome/?hl=en#topic=7439538) online help informs users about the browser, new features, and issues reporting.

Online help enhances the user experience by offering troubleshooting guides and product insights.


<body>
<form id="quizForm">
  <h2>Question 1:</h2>
  <p>Paystack documentation is an example of:
</p>
  <label>
    <input type="radio" name="question1" value="api"> API documentation
  </label><br>
  <label>
    <input type="radio" name="question1" value="White"> White paper documentation

  </label><br>
  <label>
    <input type="radio" name="question1" value="Release"> Release note documentation
  </label><br>
  <h2>Question 2:</h2>
  <p> The goal of a technical proposal is to:</p>
  <label>
    <input type="radio" name="question2" value="3"> Provide comprehensive analysis, information, or recommendations on a specific topic, product, or technology.

  </label><br>
  <label>
    <input type="radio" name="question2" value="1"> Show actionable plans to stakeholders or decision-makers, persuading them to accept and support the proposed project

  </label><br>
  <label>
    <input type="radio" name="question2" value="4">  Provide instructions, guidance, or information to assist users in effectively using product
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
      question1: "api",
      question2: "1"
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
{{< /callout >}}


## Audience for technical documentation

To become an effective technical writer, you must know your audience. Your audience is the people for whom you are writing.

Understanding your audience is crucial because it determines what and how you communicate, allowing you to convey your message in a way that resonates with them. How can you know your audience?

You can understand your audience by asking yourself who they are. Consider questions like: Are my audience software developers, engineers, or technicians?

Are they beginners or experts in their field? Why are they reading my documentation? What do they expect from it?

Answering these questions will help you determine your target audience and guide you in tailoring your writing style and content to meet their needs effectively.

For instance, you want to write an article titled: **Introduction to technical writing**.

Here are some questions you need to ask yourself:

If you answer the questions above, this will help your readers understand this topic very well.

Now, let’s use the questions above to know your target audience.

- <span style="color: #FFCCCB;" class="highlight"> Who am I writing for? </span> Technical writers,

- <span style="color: #FFCCCB;" class="highlight"> What is their level of expertise?</span> Beginners

- <span style="color: #FFCCCB;" class="highlight"> What do they expect from my article? </span> They expect this article to give a comprehensive overview of technical writing, the audience for technical writing, types of technical documentation, tools and software for technical writing, and so on.



<body>
<form id="quizForm">
  <h2>Question 1:</h2>
  <p>Who is the audience of a technical writer?
</p>
  <label>
    <input type="radio" name="question1" value="1"> The people for whom THEY are writing
  </label><br>
  <label>
    <input type="radio" name="question1" value="White"> Everybody
</label><br>
  <label>
    <input type="radio" name="question1" value="Release"> I don’t know
  </label><br>
  <h2>Question 2:</h2>
  <p> One of the questions you need to ask yourself to determine your audience is..</p>
  <label>
    <input type="radio" name="question2" value="3"> Who am I writing for?
 </label><br>
  <label>
    <input type="radio" name="question2" value="1"> Will they criticize my documentation?
</label><br><label>
    <input type="radio" name="question2" value="4">  Are they more intelligent than I am?
  </label> <br><br>

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
      question1: "1",
      question2: "3"
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
{{< /callout >}}




## Purpose for Technical Documentation

There are numerous reasons for writing technical documentation. The purpose of technical documentation includes:

- ##### Guidance: 
It provides comprehensive and easy-to-follow guidance, instructions, and directions on using a product, software, or service.

- ##### Reference: 

It serves as reference materials for product or service users, as it details a product's different features.

- ##### Training materials: 

Technical documentation can be used to train new users, employees, or technicians.

- ##### Updates: 
It is used by companies to provide information about upgrades in their product or service.

- ##### Troubleshooting:

 Technical documentation provides troubleshooting guides that can help users when they encounter a problem while using a product.


 <body>
<form id="quizForm">
  <h2>Question 1:</h2>
  <p>Technical documentation can be used to train new users, employees, or technicians

</p>
  <label>
    <input type="radio" name="question1" value="1"> True
  </label><br>
  <label>
    <input type="radio" name="question1" value="2"> False
  </label><br>
  <label>
    <input type="radio" name="question1" value="London"> Maybe
  </label><br>
  <h2>Question 2:</h2>
  <p>One of these is  purpose of a technical documentation
</p>
  <label>
    <input type="radio" name="question2" value="1"> To provide reference
  </label><br>
  <label>
    <input type="radio" name="question2" value="2"> To further complicate a complex concept
  </label><br>
  <label>
    <input type="radio" name="question2" value="3">  I don't know
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
      question1: "1",
      question2: "1"
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
{{< /callout >}}


## Technical writing process

There are five technical writing steps.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_rMBQNHl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l2y9jgpfaxyg9wkox56o.png" width="400" height="300">



-  ##### Plan:
 A popular saying goes, “If you fail to plan, you plan to fail”. This principle applies to technical writing as well.

Before you begin writing, planning and preparing for your topic is essential. Planning can be as straightforward as creating bullet points outlining the project you want to cover.

This mental exercise will help you address important questions about your audience.

At the planning stage, you need to determine your document's purpose and scope, writing style, and length. A well-thought-out plan saves time and ensures a successful outcome.

- ##### Structure:

 Structure serves as the backbone of your documentation, providing the necessary organization for the hierarchy of your document.

You lay a framework for how your document will unfold at this stage. For instance, creating a table of contents enhances the organization of your content and mentally prepares you for the writing journey.

It is also important to note that the structure of your document is not a rigid constraint; it evolves as you write, allowing for adaptability as you write.

- ##### Research:
 This stage is the foundational step in the documentation process. It involves getting all the information you need for your writing.

This includes reading relevant documents, watching videos, and interviewing experts in the field.

For instance, if you want to write about Google Chrome, you will need to read Google Chrome documentation and other relevant documents to know about its features and how they work.
Watching tutorial videos, if needed, will help you gain more insights.

Furthermore, gaining hands-on experience through practice deepens your knowledge and contributes to the quality of your documentation.

Taking this approach will enable you to give your audience detailed and up-to-date information about the Google Chrome browser.

- ##### Write:
 In this stage, you will put all the information you have gathered into a logical and cohesive document. You must also write simply, clearly, and concisely, always keeping your audience in mind.

Adapt your language to resonate with the specific needs of your readers. For instance, if you are writing for beginners, focus on clarity and provide explanations to ensure solid understanding.

For experts, delve into technical details assuming a deeper knowledge base.

Remember that the document’s structure established in the earlier stage is your guide.

Ensure seamless navigation through the content by adhering to this structure.

For clarity, incorporate images, code snippets, tables, screenshots, and diagrams in your document as it helps your readers comprehend the message you are passing faster.

As you craft your document, envision your audience engaging with the material and tailor your writing to meet their expectations.

- ##### Review:

 This stage is the polishing stage. In this stage, your goal is to ensure the overall quality of your document. Start with reviewing your document.

As you review, pay close attention to maintaining a consistent writing style, correcting grammatical errors, and addressing misspelled words.

Next, consider seeking the input of experts or colleagues in the field to review your document formally.

The goal of this stage is not just error correction but the refinement of your document to meet the highest standard of clarity and professionalism.

- ##### Publish:
 This stage is the final step in releasing your document to reach your intended audience.

Platforms like Medium, Hashnode, Devrel, and other social media platforms can serve as avenues for sharing your work with the world.

Consider the nature of your content and your target audience when deciding the suitable platform for publication.
