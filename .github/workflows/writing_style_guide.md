# TWMP writing style guide
This guide defines the standards for all content on TWMP. We follow [Google’s standards](https://developers.google.com/style) to ensure our documentation is accessible, professional, and easy to translate.

---
# Table of contents
- [Voice and tone](#voice-and-tone)
- [Consistency](#consistency)
- [Pronouns and inclusion](#pronouns-and-inclusion)
- [Formatting](#formatting)
  - [Headings and text](#headings-and-text)
  - [Images and screenshots](#images-and-screenshots)
- [Technical elements](#technical-elements)
   
## Voice and tone
- **Focus on the User:** Use second person ("you"). Avoid **"I," "we," or "the user."**
  - **Yes:** You can configure your settings here.
  - **No:** I will show you how the user configures settings.
- **Use active voice:** Be direct about who or what is performing the action.
  - **Yes:** The command starts the server.
  - **No:** The server is started by the command.
- **Be descriptive, not opinionated:** Avoid words like _just, simply, obviously, easy, or basically_. If a task requires five steps, don't call it _"simple."_
- **Empathetic:** Acknowledge that learning is hard. Avoid "gatekeeping" language.
- **Direct:** Be concise. Don't use ten words when five will do.
- **Encouraging:** Use a positive tone that builds the reader's confidence.
- **Peer-to-peer:** Avoid sounding like a dry academic textbook. Use contractions, for example, don't, you're, to keep the tone conversational.

## Consistency
In technical writing, using different words for the same thing causes confusion.

- Standardize UI actions:
  - **Click:** Use for buttons or links.
  - **Select:** Use for checkboxes or dropdown options.
  - **Enter:** Use for typing into a text box.
- Standardize terms: Pick one name for a feature and stay with it. If you call it a "Search Bar," do not call it a "Search Box" later in the article.

## Pronouns and inclusion
- Gender-neutrality: Use **they, them, or their** as a singular pronoun. Never use _he/she or his/her_.
- Address the reader: Whenever possible, avoid pronouns entirely and use _'you'_ instead.
  - Yes: After you log in, open your dashboard.

  - No: After the user logs in, they can open their dashboard.

## Formatting

### Headings and text
- **Sentence case:** Capitalize only the first word of headings, for example, _How to write a pitch_.
- **UI elements:** Use **bold** for items the user interacts with, for example, **Click Save**.
- **Acronyms:** Spell out the full name the first time you use it, for example, _User Interface (UI)_.
- **Numbers and dates**
  - **Numbers:** Use numerals for 10 and above (10, 11, 12). Spell out numbers one through nine.
  - **Dates:** Always use the **Month Day, Year** format for example, January 1, 2025.

## Images and screenshots
Every image must help the reader complete a task.
- **Compression:** Images must be under 200KB to ensure the site loads fast.
- **Alt Text:** You must provide a description for screen readers.
- **Captions:** Use a label and a short description.
- **Example:** Screenshot
- **Figure 1:**  The GitHub sidebar where you can find the Issues tab.

## Technical elements
- **Code blocks:** Always specify the language for syntax highlighting, for example, ```javascript.
- **Inline code:** Use backticks for file names (index.html), variables, or paths.
- **Links:** Link text should describe exactly where the link goes.
  - Yes: See the [GitHub Issue Template] for details.
  - No: To see the template, [click here].