---
title: "Writing in AsciiDoc Part 1"
description: "This article explains how to use AsciiDoc, a lightweight markup language, for creating structured documents with headings, lists, links, images, and code blocks, ideal for technical documentation and other written content."
summary: ""
date: 2024-09-27T16:32:46+01:00
lastmod: 2024-09-27T16:32:46+01:00
draft: false
seo:
  title: "Writing in AsciiDoc Part 1" # custom title (optional)
  description: "This article explains how to use AsciiDoc, a lightweight markup language, for creating structured documents with headings, lists, links, images, and code blocks, ideal for technical documentation and other written content." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
# Writing in AsciiDoc

## AsciiDoc is just a text

You can use AsciiDoc to quickly create professional-looking documents, whether you're writing a blog post or a book, without needing to learn complex formatting languages. With AsciiDoc, you can focus on writing your story or report and present it in a visually appealing format, like a stunning website or a well-designed book, without mastering a complicated program. To start writing in AsciiDoc, simply use a text editor. AsciiDoc takes care of the formatting and layout, allowing you to concentrate entirely on your content.<br/>
AsciiDoc's straightforward and intuitive syntax makes it easy to get started. You can use AsciiDoc to create documents in various formats, including HTML, PDF, and DocBook. Additionally, you can customize the output and include custom macros to suit your needs. Because AsciiDoc documents are plain text, you can easily collaborate with others.<br/>


## Wrapped Text and Hard Line Breaks in Asciidoc

You can use AsciiDoc's wrapped text and hard line breaks features to precisely control your document's layout. By default, you can rely on AsciiDoc to wrap text automatically, filling the available space and ensuring readability and adaptability across various formats. This flexibility in text-wrapping is particularly beneficial for paragraphs, as it creates a smooth, natural flow of text. Moreover, you can dictate how text wraps and how lines break, fine-tuning your content to meet specific requirements.<br/>
You can use hard line breaks to create lists, write verses, and separate lines in other situations. While wrapped text helps maintain readability in the source file, you may need to enforce hard line breaks to control how the text appears in the final document. <br/>AsciiDoc provides several ways to insert hard line breaks, allowing you to control the layout of your text precisely. You can insert a hard line break by ending a line with a space followed by a plus sign **(+).** This simple technique gives you control over your text layout and allows you to format your document precisely.

&nbsp;
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icdu6z3xh60861r3jbgl.png" alt="Fig 1. Hard line breaks in AsciiDocs" width="100%">

_Fig 1. Ending a line with a space followed by a plus sign (+) to start a new line without wrapping the text._


Additionally, you can use the following methods to incorporate hard line breaks in Asciidoc.


- The hard breaks option, you can enable hard line breaks by adding **[%hardbreaks]** before your content. This directive allows you to take control of your text layout and insert hard line breaks where needed.<br/>By adding **[%hardbreaks]**, you can precisely format your document and ensure that your text appears exactly as you intend.

&nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3g94bhliqaee7gjem9fd.png" alt="Fig 1. Hard breaks in AsciiDocs" width="100%">
&nbsp;

- Add the "hard breaks" attribute to the document's header to preserve line breaks throughout your whole document. You can achieve this by adding ''**=**'' to the title of the document and '**':hardbreaks:**" after that.

&nbsp;
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o6pa1ojyrp62irvdkajr.png" alt="Fig 2. Hard breaks in AsciiDocs" width="100%">


## Admonitions

Admonitions in AsciiDoc are an effective tool for improving your documentation. They are similar to special messages that highlight important information in a document.<br/> Assume you are reading a guide or a book, and the author wants you to pay attention to certain details, such as a warning about something dangerous or a helpful tip. Admonitions are used to make messages stand out, so you do not miss them.<br/>
AsciiDoc offers five admonition-style labels. 

- **Note :** By adding the "note" label, you give readers the extra insight they need to fully grasp the topic, highlighting related points and showing connections between ideas to expand on key concepts. <br/>This additional information, while not essential, provides a richer understanding of the topic, making your documentation more informative and engaging.


- **Tip:** By implementing the "tip" label, you provide valuable insights and best practices, to help readers work more efficiently and achieve better results.<br/> This friendly piece of advice allows readers to easily navigate challenges, making their experience more productive and enjoyable.


- **Important:** The "important" label denotes a level of seriousness greater than that of a standard note, such as a reminder to back up your data before making significant changes. <br/>It signifies the importance of paying close attention to a particular matter, emphasizing that it should not be overlooked, similar to a substantial reminder that warrants careful consideration.


- **Caution:** The "caution" is a warning about something that could cause problems if not handled carefully. It is like a gentle reminder to proceed with caution


- **Warning:**  The **"**warning**"** label actively warns readers of potential negative consequences, such as damage or loss, if they fail to follow instructions carefully, emphasizing the risks and urging them to take necessary precautions to avoid harm.

In AsciiDoc, **caution** and **warning** are both used to alert readers to potential risks, but they differ in their level of severity.<br/> A **caution** is intended to make the reader aware of something that could go wrong if they’re not careful, but the consequences are generally moderate. It’s like a gentle reminder to proceed with care, as ignoring it could lead to minor problems or inconveniences.<br/> On the other hand, a **warning** signals a more serious risk that could result in significant harm, such as system failure, data loss, or physical injury. It’s a stronger alert meant to stop the reader in their tracks, emphasizing that ignoring it could lead to major issues.<br/> While both are important, a **warning** carries a higher level of urgency and is used for more critical situations.

## **Punctuation**

In AsciiDoc, punctuation is used much like it is in regular text. You need to use punctuation correctly so that your text looks good and is easy to read. If you do it right, your text will look great, and people will understand what you're saying. In Asciidoc, punctuation is referred to as **quoted text.**

**Quoted Text**<br/>
In AsciiDoc, quoted text serves as a visual mechanism for highlighting dialogues or emphasizing particular content.<br/> Comparable to traditional quotation marks in standard writing, AsciiDoc presents additional formatting options for ensuring the effective visual distinction of quoted content.<br/>
One of the instances of quoted text in AsciiDoc is the asterisk, which is used primarily for emphasis, similar to how you might use bold or italics in other word processors.<br/>

&nbsp;
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r289lr3b6po6rh904ltn.png" alt="Fig 3. Quoted text in AsciiDocs" width="100%">

&nbsp;

Here are the alternative forms of quoted text that AsciiDoc recognizes. You can apply bold, italic, and monospace formatting to the text using the following syntax: 

&nbsp;
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/38qwtucqrnen5uor6jhc.png" alt="Fig 4. alternative forms of quoted text in AsciiDocs" width="100%">
&nbsp;

When writing in AsciiDoc, you can make certain words or phrases look special by giving them a "role". Think of it like labeling a word as "important" or "code.".<br/>
To do this, you add a special label before the word, like **[.userinput]#asciidoc#**. This tells the computer to make the word "asciidoc" look different.<br/>
However, sometimes, you might not want the computer to change the way your text looks. That's where "escaping" comes in. It's like telling the computer, "Hey, don't touch this text! Leave it exactly as I typed it. "When you "escape" text, you're telling the computer not to add any special formatting or styles. It's like a "do not touch" sign for your text.<br/>
In summary,

- Roles (like [.userinput]) help you make text look special
- Escaping helps you keep text exactly as you typed it, without any extra formatting

**Preventing Substitution**<br/>
In AsciiDoc, specific characters trigger automatic text formatting. For example, asterisks (*) enclose text in bold, underscores (_) make text italic, and double underscores (_ _) create bold text. This feature allows for quick text styling for emphasis or clarity.<br/>
However, this automatic formatting may not always align with your intentions. At times, you may need the text to remain exactly as typed, without special formatting. AsciiDoc provides tools like backslash escaping and passthrough macros to help you control text formatting.<br/>
Understanding how quoted text behaves in AsciiDoc is crucial for customizing the appearance of your documents.

**Backslash Escaping**<br/>
In AsciiDoc, you use backslash escaping to tell the program to ignore its usual formatting rules and print the text as is.<br/>
You place a backslash (\) before a character to shield it from formatting. This way, you can control how your text looks.<br/>
For example:

- You write \* to print a literal asterisk (*) instead of making the text bold.
- You write \_ to print a literal underscore (_) instead of making the text italic.

By using backslash escaping, you take charge of your text's formatting and avoid unexpected changes. You decide how your text looks, and AsciiDoc follows your lead.



<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kfex35drwu0cm5n0tf1q.png" alt="Fig 4. backslash escaping in AsciiDocs" width="100%"> &nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r2j4ccamffn7i3n94ute.png" alt="Fig 4. backslash escaping" width="100%"> &nbsp;


**Inline pass macro and explicit substitution**<br/>
You use an inline pass macro to wrap your text in a protective bubble, telling AsciiDoc to leave it alone. <br/>By enclosing your text in ''**pass:[text goes here]**'', you command AsciiDoc to pass it through to the output without making any changes.
You're in charge, and you're telling AsciiDoc to:

- Leave your text as is
- Don't touch your special characters or formatting commands
- Just pass it through to the output, unchanged

By using an inline pass macro, you take control of your text's formatting and ensure it looks exactly how you want it to! <br/>

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3o389dpphmg6wdnkgpl.png" alt="Fig 4. inline pass macro" width="100%"> &nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vh692p5m48m2k7okddlv.png" alt="Fig 4. inline pass macro in Asciidocs" width="100%"> &nbsp;

You enclose a phrase in the inline pass macro to exclude it from substitutions and disable escaping of special characters. This way, you can control how your text is formatted.<br/>
For example, you want to underline a word when converting your document to HTML, without applying any other formatting to it. You take action by wrapping the word in the inline pass macro, like this: ''**pass:[<u>underline me</u>]**''.<br/>
By doing so, you:

- Prevent AsciiDoc from applying any other formatting to the word
- Ensure the word is underlined in the HTML output, without any additional changes

You're in charge of your text's formatting, and the inline pass macro helps you achieve your desired output! &nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hf90mnrtrhiza004l3l1.png" alt="Fig 4. inline pass macro underline in Asciidocs" width="100%"> &nbsp;

You enable ad-hoc quotes substitution by setting the macros value to subs, allowing you to control the replacement of specific characters or quotes.<br/> Then, you use the inline pass macro to specify which quotes to replace and with what, taking charge of the substitution process. By doing so, you ensure that specific quotes are replaced with other characters in certain places, achieving your desired text formatting. &nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k6b8rmm9wnyj2nrz0l3n.png" alt="Fig 4. ad-hoc quotes substitution" width="100%">
&nbsp;

You can also specify which types of substitutions AsciiDoc should ignore by using shorthand values.
Here’s how each shorthand value works:<br/>

**Shorthand Values**
- `c` = special characters
- `q` = quotes
- `a` = attributes
- `r` = replacements
- `m` = macros
- `p` = post replacements

<br/>
For example, the attributes text substitution value is assigned in the inline passthrough macro below.

&nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rf7l5cbrlgx2i98p1ilg.png" alt="Fig 4. attributes text substitution value" width="100%">
&nbsp;
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mgdt8yh7i7usfjvwc3df.png" alt="Fig 4. attributes text substitution value version" width="100%">


**Triple plus passthrough**<br/>
The triple-plus passthrough in AsciiDoc works similarly to the pass macro but uses a different syntax. To prevent AsciiDoc from applying any formatting or substitutions to your text, enclose it in triple pluses **(+++).** You often use this method to include custom HTML or XML code in your document.<br/>
**How It Works:**


- **Triple-Plus Syntax**:<br/> Place **+++** before and after your text to tell AsciiDoc to ignore everything inside those markers. It won’t format, change, or substitute anything.
 &nbsp;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8y79bcve4efc9dp3k7qw.png" alt="Fig 4. triple plus syntax" width="100%">
&nbsp;

You typically use the triple-plus passthrough when you need to add raw HTML or XML code to your document. By wrapping the code in triple pluses, you ensure that AsciiDoc leaves it exactly as you wrote it.<br/>
When you convert your AsciiDoc to HTML, the text inside the triple pluses appears exactly as written, creating a **div** with the specified class.<br/>
You use the triple-plus passthrough to embed code or content that AsciiDoc doesn’t natively handle, ensuring your custom HTML, XML, or other code stays intact in the final output.<br/>
In summary, the triple-plus passthrough lets you include unaltered text, code, or markup in your AsciiDoc documents, making it perfect for custom HTML or XML output.<br/>

**Single plus enclosure**<br/>
You protect a phrase from substitutions by wrapping it in plus signs (+) like this: **+phrase+**. By doing so, you tell the Asciidoc to leave the phrase alone and not make any changes to it. It's like putting a "do not touch" sign on your text!


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7p8u45ishki48cxzteqq.png" alt="Fig 4. single plus enclosure" width="100%">

&nbsp;

**Replacements**<br/>
In AsciiDoc, you can use simple text to represent symbols, arrows, and dashes, making your writing look cleaner and more professional without sacrificing readability.<br/> You can easily create an arrow by typing -> or a dash by typing --, using formats that you're likely already familiar with. These textual symbols unclutter your text and make it easier to follow. You likely recognize these standard ways of writing, which helps them feel natural to use and understand.



**Textual symbol replacements**


                       

| **Name**| **Syntax** | **Unicode replacement** | **Rendered** |**Notes**                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ---------- | ----------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copyright              | (C)        | &#169;                  | ©            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Registered             | (R)        | &#174;                  | ®            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Trademark              | (TM)       | &#8482;                 | ™            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Em Dash                | --         | &#8212                  | —            | AsciiDoc replaces three hyphens (---) with an em dash (—) only when they appear between two word characters, between a word character and the start or end of a line, or when they are surrounded by spaces.<br>If the hyphens are surrounded by spaces, like in a -- b, AsciiDoc converts them into an en dash (–) and replaces the spaces with thin spaces (&#8201;). This ensures the text looks cleaner and more visually balanced when rendered. |
| Ellipsis               | . . .      | &#8230                  | …            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Single right arrow     | ->         | &#8594                  | →            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Double right arrow     | =>         | &#8658                  | ⇒            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Single left arrow      | <-         | &#8592                  | ←            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Double left arrow      | <=         | &#8656                  | ⇐            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Typographic apostrophe | Sam's      | Sam&#8217;s             | Sam’s        | AsciiDoc automatically replaces the straight typewriter apostrophe (`'`) with a curly, typographic apostrophe (`’`). This makes your text look more polished and professional, giving it the proper typographic style used in formal writing.                                                                                                                                                                                                         |

This simple punctuation does not reduce the readability of the text. In fact, it might actually make the text easier to read.<br/>What is important is that these are standard practices you are probably already familiar with.<br/>
In AsciiDoc, you also use punctuation to create one of the most common elements in document **lists**!<br/>
Check out the second part of the writing in AsciiDoc guide to explore more about its syntax and advanced features.

