---
title: "Advanced Syntax and Formatting in Markdown"
description: ""
summary: ""
date: 2024-05-31T13:30:23+01:00
lastmod: 2024-08-31T13:30:23+01:00
params:
  math: true
draft: false
menu:
  docs:
    parent: ""
    identifier: ""
weight: 2
toc: true
seo:
  title: " Advanced Syntax and Formatting in Markdown" # custom title (optional)
  description: It covers the Extended and Advanced syntaxes in Markdown, best practices for writing clear and effective technical content, and tips for organizing structuring and formatting your documents. Whether you're new to Markdown or looking to refine your skills, this guide will help you master the essentials and produce professional-quality documentation # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

You have covered some of the basic syntax in Markdown in the previous lessons; your lesson won't be over until you see some of the advanced or extended syntax in Markdown.

In this section, you'll look at Markdown's advanced syntax and formatting. So, stay sharp; there's more to uncover as you explore the advanced layers of syntax and formatting.

**What you'll Cover in This Lesson:**

- Advanced Syntax and Formatting in Markdown.
- Linking and Organization.
- Structuring and managing markdown files.

Now that you have an overview of what you will cover, let's get started.

## Tables

Creating a table in markdown is more complicated than the other elements you’ll cover, but here is a sure way to understand it.

Tables are made up of cells in rows and columns, and you can keep adding more rows or columns to your desired amount. It may sound complicated, but let’s get to action because once you see examples, they’ll all make sense.

**Creating a Cell:** To create a single cell in a Markdown table, use two pipe symbols **`| |,`** and to create multiple cells in a single row, add more pipes **(`|`)**. This would create rows with many columns.

**Example:**

    | | | | | | | |

Imagine it this way⬇️

![](https://paper-attachments.dropboxusercontent.com/s_BFB988F13D88AEFF61C8D50AC74C88DBC31D9E127606DC374813CDC68CEE7924_1724250248411_image.png)

**Creating Multiple Rows:**  
To add multiple rows, use a dashed line separator and additional rows below

```
|  |
|--|
|  |
|  |
```

The output of the syntax above would give you three rows.

**Column Headers:**  
Create headers for each column using three or more hyphens (---).

Let’s apply everything you have learned above to create a table.

```
  | Header 1 | Header 2 | Header 3 |
  |----------|----------|----------|
  | Cell 1   | Cell 2   | Cell 3   |
  | Cell 4   | Cell 5   | Cell 6   |

```

**Output:** ⬇️
{{< details "Preview" >}}

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

{{< /details >}}  
Cell widths may vary, as seen below :

```
  | Header 1 | Header 2 | Header 3 |
  |--|----|----|
  | Cell 1    | Cell 2   | Cell 3   |
  | Cell 4| Cell 5 | Cell 6  |

```

The output would be the same.

#### Text Alignment

To align text to the left, center, or right in the table cells, you add colons (`:`) on the left, center, or right sides of the hyphen in the header rows, respectively.

- To left Align Texts: use (`:---`)
- To Center Align Texts: use (`:---:`)
- To Right Align Texts: use (`---:`)

Example:

```
  |Car Models| Brands |Country|
  |:----------|:--------:|------:|
  |Accord Hybrid|Honda|Japan  |
  |    Mustang  |Ford |   USA |
  |      X5     | BMW |Germany|
  |   Wrangler  | Jeep|  USA  |
```

The output would look like: ⬇️
{{< details "Preview" >}}
|Car Models| Brands |Country|
|:----------|:--------:|------:|
|Accord Hybrid|Honda|Japan |
| Mustang |Ford | USA |
| X5 | BMW |Germany|
| Wrangler | Jeep| USA |
{{< /details >}}

> 📝 Note: The markdown renderer determines how to format the data when alignment is either absent or only suggested. The common default alignment is to the left.

#### Variation

Some Markdown editors or renderers allow you to omit the pipe symbol at the sides of the table:

```
  Take |this|table
  -----|----|---
  for | an |example
```

Even in this scenario, the output would still be displayed as:
{{< details "preview" >}}

| Take | this | table   |
| ---- | ---- | ------- |
| for  | an   | example |

{{< /details >}}

#### Formatting Text in Tables

Text can be formatted in a table. For example, links, inline codes (words or phrases in backticks(`) only, not code blocks), and emphasis (bolding, italics).
However, it does not support certain formatting syntax, such as:

- Images
- HTML tag
- Headings
- Horizontal rules
- Blockquotes
- Lists

#### Escaping pipe characters

To include special characters like the pipe ( `|` ) in table cells, use backslash ( `\|` ) or HTML character codes ( `&#124;` ).

```
| Header 1      | Header 2            |
| ------------- | ------------------- |
| Data1         | Data2               |
| Pipe \| Data3 | Data4               |
| Data5         | Another &#124; Pipe |
```

**Output:**

{{< details "Preview" >}}
| Header 1 | Header 2 |
| ------------- | ------------------- |
| Data1 | Data2 |
| Pipe \| Data3 | Data4 |
| Data5 | Another &#124; Pipe |
{{< /details>}}

#### Markdown Table Generators

Table generators can be very useful for creating large and complex tables as it can be difficult and error-prone to format them manually. To make the job easier, here are some online Markdown table generators you can use:

1. [TableConvert.com:](https://tableconvert.com/) This tool can convert data from various formats such as CSV, JSON, and Excel into Markdown tables. It's free to use.
2. [TablesGenerator.com:](https://tablesgenerator.com/) This website offers a user-friendly interface for creating tables visually and generating Markdown code. It's also free.
3. [Ascii Table Generator:](https://ozh.github.io/ascii-tables/) Here, you can create ASCII-styled tables that can be used in Markdown format.
4. [Table to Markdown:](https://tabletomarkdown.com/) This tool can convert HTML tables to Markdown format.

---

## Footnotes

Footnotes allow you to add notes and reference them while keeping your content organized and not disrupting the reader's flow. When creating footnotes in Markdown, the process is straightforward.

Add a caret symbol (^) in a square bracket`[]` followed by a number or word.
Add the footnote using another caret and number inside brackets with a colon and text `([^1]: My footnote.)`
This method allows you to add notes and references without cluttering the body of the document.

Readers can click the link to jump to the content of the footnote at the bottom of the page.

**Examples:**

```
  This is a footnote[^1]and this too is another footnote[^2]
  [^1]: This is the reference to the foot note
  [^2]:this is another reference
```

The output will look like this:

{{< details "Preview" >}}

This is a footnote[^1]and this too is another footnote[^2]
[^1]: This is the reference to the foot note
[^2]:this is another reference

{{< /details >}}

The footnotes will be displayed at the bottom of the page, allowing us to easily access them by scrolling or clicking on the specific footnote.

Here is another example using a word as a footnote identifier:

```
  Regular exercise is known to boost overall health, including improving mood and energy levels[^1].
  Even just a short daily walk can make a big difference[^bignote].


  [^1]:Example: Exercise releases endorphins, which are natural mood lifters.
  [^bignote]: A 30-minute walk each day can improve cardiovascular health. It’s a simple habit that can also help with weight management, reduce stress, and increase overall fitness. Even if you have a busy schedule, fitting in a quick walk can lead to significant long-term benefits
```

The output will look like this:
{{< details "Preview" >}}

Regular exercise is known to boost overall health, including improving mood and energy levels[^1].
Even just a short daily walk can make a big difference[^bignote].

[^1]: Example: Exercise releases endorphins, which are natural mood lifters.

[^bignote]:
    A 30-minute walk each day can improve cardiovascular health. It’s a simple habit that can also help with weight management, reduce stress, and increase overall fitness. Even if you have a busy schedule, fitting in a quick walk can lead to significant long-term benefits
    {{< /details >}}

> 📝 Note: Make sure to place the footnote identifier directly after the word without a space because it’ll help avoid formatting issues.

---

## Code Blocks

Code blocks are used to display multiple lines of code, and it ensures that formatting is intact.
You can create code blocks in different ways in markdown.

#### Inline Code Block:

To create an inline code block, use backticks (`) around the code. This is useful for creating short code snippets within a sentence just like in the example below.

```
  To print "Hello, World!" in Python, use the command `print("Hello, World!")`.
```

**Output:**
{{< details "Preview" >}}

To print "Hello, World!" in Python, use the command `print("Hello, World!")`.

> {{< /details >}}

#### Fenced Code Block

This is also known as a multi-line code block; it is used to create code blocks without indenting. To create this, use three backticks **(```)** before and after the code block.

**Example:**

````
```
  {
    'firstName':'James';
    'lastName':'jakes';
    'age': 30;
  }
```
````

**Output:**
{{< details "Preview" >}}

```
{
  'firstName':'James';
  'lastName':'jakes';
  'age': 30;
}
```

{{< /details >}}

> To improve readability, add a blank line before and after code blocks.

To display triple backticks in a fenced code block, you can wrap them inside four backticks(````)

`````
  ````
    ```
      {
        'firstName':'James';
        'lastName':'jakes';
        'age': 30;
      }
    ```
  ````
`````

**Output:**
{{< details "preview" >}}

````
  ```
    {
      'firstName':'James';
      'lastName':'jakes';
      'age': 30;
    }
  ```
````

> you'll notice that the code block is wrapped in three backticks
> {{< /details >}}

#### Indented Code Block

you can also create a code block by indenting each line with four spaces or a tab.

**Example:**

```
[tab] <Html>
[tab] <Html>
[tab] <Html>
[tab] <Html>
```

**Output:**

Because of the tab before each line, it would be rendered as a code block without you having to use backticks

{{< details "Preview" >}}

    <Html>
    <Html>
    <Html>
    <Html>

{{< /details >}}

> Note: if you don't put spaces before the code. The code will not be rendered; you’ll get a black space.

---

## Syntax Highlighting

Syntax highlighting adds color and style to your code to make it more readable.
When adding syntax highlighting, specify the programming language next to the backticks before the fenced code block.

**Example:**

````
```javascript
function greet(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, world!");
  }
}
```
````

The rendered output would be:
{{< details "Preview" >}}

```javascript
function greet(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, world!");
  }
}
```

{{< /details >}}

And this is it without syntax highlighting:
{{< details "Preview" >}}

```
function greet(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, world!");
  }
}
```

{{< /details >}}

---

## Highlighting

Highlighting a text emphasizes a word. To highlight in Markdown, put the text between two equal symbols `==`

**For example:**

&nbsp;&nbsp;&nbsp;&nbsp;`This ==text== is ==highlighted.==`

**Output:**

{{< details "Preview" >}}
This <mark>text</mark> is <mark>highlighted<mark>.
{{< /details >}}

> 📝Note: There should be no space between the equal signs and text; otherwise, the equal signs will be treated as text

Not all markdown processors support Highlight, but if your markdown editor supports HTML, you can use the `<mark>` HTML tag.

    This text is not <mark>important<mark> it is just for an <mark>example<mark>

The output would be the same.

---

## Heading IDs

In Markdown, you can create a heading with a custom ID by using curly braces `{}` immediately after the heading text. This ID can be used for linking directly to that section within the document.

**Example:**

`## My Heading {#custom-id}`

**Output:**
{{< details "Preview" >}}

## My Heading {#custom-id}

With this, the heading "My Heading" above has the ID "custom-id."
{{< /details >}}

#### Linking to Heading IDs

Once a heading has an ID, you can create a link that jumps to that heading within the same document.

    [Go to Custom Section](#custom-id)

**Rendered:**  
&nbsp;&nbsp;&nbsp;&nbsp;[Go to Custom Section](#custom-id)  
When you click this link, it will take you directly to the heading you created earlier with the ID `custom-id`.

This allows you to create internal links within your Markdown document, directing readers to specific sections.

#### Multiple Headings with IDs

You can add IDs to multiple headings throughout your document for easy navigation.

```
## Table of content
  ### Introduction {#introduction}
  ### Features {#features}
  ### Conclusion {#conclusion}
```

You can create links to these sections like this:

```
## Table of content
- [Introduction](#introduction)
- [Features](#features)
- [Conclusion](#conclusion)
```

This is what you’ll get as your output.
{{< details "Preview">}}

## Table of content

- [Introduction](#introduction)
- [Features](#features)
- [Conclusion](#conclusion)
  {{< /details>}}

---

## URL Linking

In Markdown, URLs are automatically converted into clickable links when written as plain text. You don't need to add any special formatting—include the full URL, and it will be recognized as a link.

**Example:**

&nbsp;&nbsp;&nbsp;&nbsp; https://technicalwritingmp.com/

**Output:**

The output would look like this:  
&nbsp;&nbsp;&nbsp;&nbsp; [https://technicalwritingmp.com/](https://technicalwritingmp.com/)

You may deactivate automated URL linking and prevent the link from being clickable by indicating the URL with a code. In other words, enclose it in backticks.

&nbsp;&nbsp;&nbsp;&nbsp; `https://technicalwritingmp.com/`

#### External Links

The markdown for external links is the same for internal links, except you use the full URL

**Example:**

&nbsp;&nbsp;&nbsp;&nbsp; `[This is an external link to Google ](https://google.com/)`

This is displayed as:
{{< details "Preview" >}}
[This is an external link to Google ](https://google.com/)
{{< /details >}}

---

## Task Lists

Task lists are useful for creating checklists/to-do lists.
For each task, use a hyphen (-) for the list item and space before typing.
Insert Checkbox Syntax: an incomplete task is square brackets with a space ([ ]), and a completed one will use the same area but with x instead of any space (e.g. [x]).

**Examples:**

- **Incomplete Task**

```
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
```

**Output:**

{{< details "Preview">}}

- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

{{< /details>}}

- **Completed Task**

```
  - [x] Task 1
  - [x] Task 2
  - [x] Task 3
```

**Output:**
{{< details "Preview">}}

- [x] Task 1
- [x] Task 2
- [x] Task 3

## {{< /details>}}

---

## Definition Lists

A definition list can used to create a collection of terms and their meanings. This is somewhat like a dictionary.
To create a definition list, write the term on one line, then a space and colon before writing its definition below.

The result shows the term in bold and the definition in regular text.

Keep in mind that not all Markdown processors render definition lists. You will need to double-check whether your Markdown editor supports them.

**Example:**

```
  First Term
  : This is the definition of the first term

  Second Term
  : This is the definition of the second term

Third Term
  : This is the definition of the third term
  : This is another definition of the third term.
```

> Note: Ensure that there is a space between the colon and the definition

**Rendered:**
{{< details "Preview">}}
First Term
: This is the definition of the first term

Second Term
: This is the definition of the second term

Third Term
: This is the definition of the third term
: This is another definition of the third term.
{{< /details>}}

---

## Strikethrough

The strikethrough syntax is just two tilde signs (`~`) before and after the text. There should be no spaces before or after the two tildes.

`~~This is an example of a strikethrough text~~`

**Output:**

{{< details "Preview">}}
~~This is an example of a strikethrough text~~
{{< /details>}}

---

## Horizontal Rule

You can create horizontal rules in markdown in three ways:

- three asterisks(`***`)
- three hyphens (`---`)
- three underscore (`---`)

The output of all three methods is the same.

**Example:**

```
    ***
    with three asterisk
    ---
    with three hyphens
    ___
    with three underscores
```

**Output:**

{{< details "Preview" >}}

---

with three asterisk

---

with three hyphens

---

with three underscores
{{< /details>}}

---

## Superscript

Some Markdown processors can handle superscripts, which are particularly useful for footnotes and other similar features, but Markdown doesn’t support it natively. However, you use a caret symbol (^) before and after a character to create a superscript.  
An alternative option is to use the HTML tag `<sup>..<sup>,` which is more popular and widely recognized.

**Example:**

`Y = X^2^`

**Output:**

{{< details "Preview">}}
Y = X<sup>2<sup>
{{< /details>}}

With the HTML tag, it would be `y = x<sup>2<sup>,` and it will display the same output as above.

---

## Subscript

Similar to superscripts, not all markdown processors support subscripts. you use a tilde symbol (~) before and after a character to create a superscript.

**Example:**

`Y = X~2~`

**Output:**

{{< details "Preview">}}
Y = X<sub>2<sub>
{{< /details>}}

With the HTML tag, it would be `y = x<sub>2<sub>,` and it will display the same output above.

---

## Emoji

Emojis give your Markdown documents a fun and expressive touch. You can use them to set the tone, point out key ideas, or make your content more engaging. Adding emojis to Markdown is easy.  
There are two methods to add emoji to your markdown documents.

Copying and pasting from sources like [Emojipedia](https://emojipedia.org/)

**For example**  
Copying and pasting 🔧 directly into your Markdown document is as simple as:

    Here's how you can fix the issue: 🔧

**Output:**
{{< details "Preview" >}}
Here's how you can fix the issue: 🔧
{{< /details >}}

Using Emoji Shortcodes
In this case, you need to know the right shortcode.

**For example:**

- Typing `:smile:` will display as 😄.
- Typing `:thumbsup:` will display as 👍.
- Typing `:rocket:` will display as 🚀.

A lot of Markdown processors work with these shortcodes, but keep in mind that emoji shortcodes can differ depending on the application. To ensure everything works as it should, check out the documentation for your particular Markdown application for more details.

GitHub's recommended [shortcode cheat sheet](https://jimit105.github.io/github-emoji-cheatsheet/) lists numerous emoji shortcodes.

---

## Mathematical Expression

Markdown allows you to include mathematical expressions both inline and as standalone blocks using [LaTeX syntax](https://en.wikipedia.org/wiki/LaTeX). Here’s a guide on how to use both types:

#### Inline Math

You can insert short mathematical expressions within a line of text using single dollar signs ($).

**Example:**

&nbsp;&nbsp;&nbsp;&nbsp; `This is an inline math example: $E = mc^2$`

**Output:**

&nbsp;&nbsp;&nbsp;&nbsp;This is an inline math example: \\( E = mc^2 \\)

#### Block Math

For larger, standalone mathematical expressions, use double dollar signs ($$) to create block math. These are usually centered on the page and are easier to read for more complex equations.

**Example:**

```
    The quadratic formula:

    $$
    x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
    $$
```

**Output:**

{{< details "Preview" >}}
The quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
{{< /details>}}
