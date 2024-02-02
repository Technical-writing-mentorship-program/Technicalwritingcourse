---
title: "Use of diagrams"
description: "Visual elements like diagrams, images, and illustrations are effective tools for making your documentation engaging and easy to understand. They're great for explaining complex concepts, processes, or workflows. Additionally, they break up large chunks of text and improve readability."
summary: "This article explains the use of diagrams in technical documentation. It also provides tips for creating effective diagrams and do's and don'ts for using images in technical documentation."
date: 2024-01-09T16:04:50+20:00
lastmod: 2023-11-17T13:12:49+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "diagram-6a1a6be4373e933280d78ea53de6158ue"
    weight: 1091
toc: true
seo:
  title: "The use of Diagrams"
  description: "Visual elements like diagrams, images, and illustrations are effective tools for making your documentation engaging and easy to understand. They're great for explaining complex concepts, processes, or workflows. Additionally, they break up large chunks of text and improve readability."
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Visual elements like diagrams, images, and illustrations are effective tools for making your documentation engaging and easy to understand. They're great for explaining complex concepts, processes, or workflows. Additionally, they break up large chunks of text and improve readability.

Using diagrams is an effective way to communicate complex ideas. They present information visually, making it easier to understand and remember compared to lengthy paragraphs.

Diagrams also illustrate relationships between concepts, helping you grasp the bigger picture. Incorporating them into your work can save time, simplify communication, and enhance documentation clarity.

{{< callout context="note" title="In this Module, you will learn:" icon="info-circle" >}}

- Why you need diagrams in technical documentation,
- Tools to diagrams,
- How to create effective diagrams, and
- Do's and don'ts for using images in technical documentation.

{{< /callout >}}

## Why do you need diagrams in your documentation?

Diagrams in your documentation can enhance communication. Consider using them for the following reasons:

- **Visual clarity:** People learn and understand information differently. Diagrams provide a visual representation, clarifying complex concepts and making information accessible.

- **Simplify complexity:** Technical documentation often involves intricate systems. A well-crafted diagram breaks down complexity, making it easier for readers to grasp.

- **Enhance comprehension:** A picture is worth a thousand words. Diagrams can replace lengthy text, showing relationships between components and improving comprehension.

- **Quick reference:** Diagrams serve as quick guides for troubleshooting or processes. Users can glance at them for guidance instead of reading through paragraphs.

- **Time-saving:** In the fast-paced world of technology, time matters. Diagrams help users quickly find information, reducing the time spent searching through extensive documentation.

{{< callout context="tip" title="Did you know?" icon="rocket" >}}
Did you know that most installation manuals use images to guide users through the process instead of text? Utitlizing this method allows these manuals to be used by people who speak different languages.
{{< /callout >}}

Diagrams are useful for conveying messages in various technical documentation forms, such as API documentation, how-to guides, tutorials, or a simple README file. However, creating diagrams may be challenging without design skills or proper tools.

## Tools you can use to create diagrams

Effective diagrams require the right tools. Numerous tools are available, but not all are equal. Here are some options:

- [Figma](https://figma.com): Known for interface design, Figma is also great for diagrams. Its user-friendly interface and collaborative features make it ideal for technical documentation.

- [Draw.io](https://draw.io): Specifically designed for graphs and diagrams, this tool supports collaboration and is free to use.

- [Lucidchart](https://lucidchart.com): Popular in cloud engineering, Lucidchart is free and excellent for creating architecture diagrams of complex systems.

- [Excalidraw](https://excalidraw.com): This tool creates sketch-like diagrams with a freehand feel, offering a natural and authentic look.

- [Microsoft Visio](https://products.office.com/en-us/visio/flowchart-software): If you use Microsoft Office, Visio is a powerful tool for professional-looking diagrams.

All these tools can export diagrams in various formats (SVG, PNG, JPG), making it easy to insert them into your documentation.

## How to create effective diagrams

Creating understandable diagrams is crucial. If your diagram is too complex, readers may struggle to follow your message. Here are tips for effective diagram creation:

**1. Keep It Simple, Yet Informative:**
Simplify your diagram for clarity. Each element should directly contribute to understanding the concept. For instance, in cloud engineering, architectural diagrams should present a high-level view without overwhelming details.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/34iz52azancbtzpmb3lm.png" alt="clear image" width="100%">

_**Figure 1**. Architectural diagram displaying clear information_

**2. Embrace Consistency:**
Consistency is key. Use uniform shapes, colors, and formatting throughout. In web development, consistent symbols in user flow diagrams make it easier for developers and designers to interpret user journeys across different parts of a website.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/go8ywzrdhobxd4ti7rln.png" alt="consistent image" width="100%">

_**Figure 2**. User flow diagram displaying image design consistency_

**3. Thoughtful Use of Labels and Annotations:**
Guide the reader with clear labels and annotations. In data science, well-placed annotations in process flow diagrams highlight critical steps, aiding data scientists in understanding and optimizing workflows.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gbck87oypf7opi8gw343.png" alt="data image" width="100%">

_**Figure 3**. Data flow diagram displaying proper use of labels_

**4. Align with Audience Expectations:**
Tailor your diagrams to your audience. In network security, align a network topology diagram with security professionals' expectations. Highlight security layers, emphasize attack vectors, and use familiar conventions for effective communication.

**5. Utilize Visual Hierarchy:**
Guide the reader's eye with visual hierarchy. In plain diagrams explaining conceptual ideas, use size, color, or placement to emphasize key elements. This enhances understanding, whether illustrating a decision-making process or showcasing relationships between concepts.

It's not just about creating a diagram but creating one that works. Keep it simple, consistent, and aligned with your audience's needs. Your diagrams, when simple and aligned, become powerful tools for communication in any technical domain. Embrace the visual language, and let your diagrams tell a compelling story!

## Do's and Don'ts for effective technical diagrams

As with any concept, usage rules apply. Consider the following when creating diagrams for technical documentation:

**Do's for Using Images in Technical Documentation:**

- **Utilize alt text:** Include descriptive alt text for images. This boosts SEO and ensures accessibility for screen reader users, enhancing inclusivity.

  The following is an example of alt text in markdown:

  ```markdown
  ![alt text](/path/to/image.png)
  ```

- **Figure descriptions:** Accompany images with clear figure descriptions. This helps readers, especially in scenarios like network security diagrams.

  The following is an example of a figure description in markdown:

  ```markdown
  Figure [NUMBER]. [DESCRIPTION]
  ```

- **Give credit:** Provide proper attribution when using images created by others. This maintains ethical standards in content creation, crucial in web development.

  The following is an example of image attribution in markdown:

  ```markdown
  ![alt text](/path/to/image.png)
  Figure [NUMBER]. [DESCRIPTION]
  Image source: [SOURCE]
  ```

  Or you can give credit in the figure description:

  ```markdown
  Figure [NUMBER]. [Image source] from [image author]
  ```

- **High resolution:** Maintain high-quality images for clear and legible details, benefiting both technical writers and developers.

- **Unified formats:** Stick to consistent image formats for a polished look. Whether you're a technical writer or developer, using a unified format enhances professionalism and readability.

{{< callout context="note" title="Check your knowledge:" icon="info-circle" >}}

<body>
<form id="quizForm">
  <h2>Question 1:</h2>
    <p>As a technical writer creating diagrams, I should do the following EXCEPT:</p>
    <label>
      <input type="radio" name="question1" value="consistent" /> Use consistent
      design elements </label><br/>
    <label>
      <input type="radio" name="question1" value="quality" /> Use poor quality
      images </label><br/>
    <label>
      <input type="radio" name="question1" value="alt-text" /> Utilize alt text
      for images </label><br/>
    <label>
      <input type="radio" name="question1" value="high-resolution" /> Provide
      high-resolution images </label><br/>
  <h2>Question 2:</h2>
    <p>Why is it important to give proper attribution when using images created by others in technical documentation?</p>
    <label>
      <input type="radio" name="question2" value="no impact" /> It has no impact
      on ethical standards </label><br/>
    <label>
      <input type="radio" name="question2" value="exclusivity" /> It ensures
      exclusivity for image creators </label><br/>
    <label>
      <input type="radio" name="question2" value="ethical" /> It maintains
      ethical standards in content creation </label><br/>
    <label>
      <input type="radio" name="question2" value="confusion" /> It increases
      confusion for readers </label><br/>
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
      question1: "quality",
      question2: "ethical"
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

**Don'ts for Using Images in Technical Documentation:**

- **Avoid overcomplicating images:** Steer clear of overwhelming your audience with overly complex images. Whether you're a developer illustrating code architecture or a technical writer creating process flow diagrams, prioritize simplicity. Avoid unnecessary details that might confuse rather than clarify.

- **Avoid unclear figure descriptions:** Ensure figure descriptions are clear and concise. Technical writers and editors should provide enough information for readers to understand the image's relevance. Ambiguous descriptions can lead to misinterpretation.

- **Avoid including personal information:** Be cautious not to include personal information in diagrams or screenshots, especially when showcasing your codebase. Prevent exposing sensitive information to the public.

- **Don't Neglect Consistency in Style:** Maintain a consistent style throughout your technical diagrams. Whether you're a developer illustrating system interactions or a technical writer creating documentation, inconsistency in style can lead to confusion. Stick to a unified design language to ensure a cohesive and professional appearance across all your visual elements.

{{< callout context="note" title="Exercise" icon="info-circle" >}}

**Complete the following exercises before procedding to the next module.**

Navigate to the [Technical Writers Mentorship Program YouTube page](https://www.youtube.com/@TechnicalWriti6/) and complete the following exercises:

- Watch the Introduction to Git and Github part 1 & 2 videos.
- Create an article on any blog of your choice explaining the steps to create a Github account.
- Make sure to include visual representation that guides a user at each step.

You must use an annotation tool such as [Annotely](https://annotely.com/editor) to create your diagrams.

Also, adhere to all the tips and measures from this documentation. After review, tag @TechnicalWriti6 on Twitter to the link to your article.

{{< /callout >}}

Answer the following questions.

<iframe src="https://forms.gle/NPS6C8bgw8aeCpS6A" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
