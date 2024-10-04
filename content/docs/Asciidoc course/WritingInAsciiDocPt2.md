---
title: "Content Placeholder"
_build:
  render: never
  list: never
  publishResources: false
---


​​Emphasis is generally used in typography to highlight or pay particular attention to certain text by differentiating that text from the others, and this is the case with Asciidoc. AsciiDoc visually emphasizes inline text through the following text styles:
​
​Bold
​
​Italics
​
​Monospace
​
​Highlight.
​​
​​The above styles are displayed using formatting marks and usually come in formatting pairs. 
​​
​
​Formatting Marks
​​Formatting marks indicate the inline style you want the AsciiDoc converter to apply to the text; examples include asterisks and underscores.
​​
​
​Formatting pairs 
​​Formatting pairs have identical opening and closing marks that enclose the text you want to style.  The opening mark shows where the style starts, while the closing mark shows where it ends. An interesting thing to note is that formatting pairs can be nested but not overlapped, as overlapping them will lead to malformed output.
​​Formatting pairs can be constrained or unconstrained. Constrained pairs are limited in application because they can only be used when a space-like character directly precedes the text, a space-like character or punctuation mark directly follows it, and the text does not start or end with a space-like character. Constrained formatting uses single opening and closing marks to enclose the text.
​​Conversely, Unconstrained formatting pairs can be used anywhere and consist of double opening and closing marks. 
​​ 
 
 
​​The image above shows the output when you nest, overlap, and use constrained or unconstrained formatting pairs. As shown in lines 3, 5, and 9, overlapping formatting pairs and going outside the rules of constrained formatting will lead to malformed output
 
 
​​
​​                                                  
​​ 
​
​Bold
​​Text emphasized in Bold usually stands out from regular text due to its darker or thicker font, enabling readers to notice it easily. The syntax is straightforward, as it is done by enclosing the text in either a single pair of asterisks (*  *), used in constrained formatting, or a double pair (**  **), used in unconstrained formatting. 
​​
 
 
​​Bold Syntax
 
 
​​                                                                  
​​
​
​Italics
​​Italicized text in AsciiDoc can be done by enclosing it in a single pair of underscores ( _  _ ) for constrained formatting, or double pairs ( __  __) for characters within a word, which is a case of unconstrained formatting. Italicized words or phrases directly followed by a common punctuation mark do not need double underscores. Below is a description of the syntax and output:
​​
 
 
​​Italic Syntax and output in AsciiDoc. The text on line 5 shows the output when a single pair of underscores is used for inconstrained text.
 
 
​​
​
​Monospace
​​Monospace(s) represents displayed text in code editors or terminals; the text is enclosed in a single or double pair of backticks ( ` ), based on whether the text is constrained or unconstrained respectively.
​​
 
 
​​Monospaced Syntax and Output in constrained(1) and unconstrained(2) formatting.
 
 
​​
​
​Highlight
​​Highlighted text is used for notation or referencing and is enclosed in a pair of single or double hash(#) symbols. In HTML output, the <mark> tag is used.
​​
 
 
​​Highlighted text in AsciiDoc showing syntax and output
 
 
​​
​
​Mixed Formatting
​​Emphasized text can come in mixed formats. Monospaced text can also be formatted in bold, italics, or both, as long as the markup pairs are entered correctly. The monospace markup must be the outermost formatting mark, followed by the bold marks and the italic marks.
​​
 
 
​​Mixed Emphasis
 
 
​​
​​
​​
​
​Lists
​​A list is a block element containing list items; list items are content usually preceded by symbols, numbers, letters, or markers, depending on the list type. Lists are grouped into types, which include:
​​Checklist  
​​Ordered List
​​Unordered List
​​Description List
​​Hybrid List
​​
​
​Checklist
​​Checklists contain items marked by an empty or checked box. They are used to create task lists with AsciiDoc. To make a checklist, the following syntax is used:
​​
​​* [*] Checked
​​* [x] Checked
​​* [ ] Not checked
​​[x] Wrong Syntax
​​[*] Wrong Syntax
​​[ ] Wrong Syntax
​​
​​The output for the above syntax is displayed below:
 
 
​​Checklist output with AsciiDoc
 
 
​​
​
​Ordered List
​​An ordered list typically uses numbers or alphabets. AsciiDoc uses the start attribute for ordered lists, which is simpler and faster than manually inputting the list; the start value must be a positive integer.
​​
 
 
​​Basic Ordered list showing syntax (left) and output (right). Please note the start attribute must come before the list.
 
 
​​As shown above, the default style for an ordered list is the Arabic numeral; AsciiDoc supports other styles, ranging from decimal values to Roman numerals. Shown below is a table of supported style attributes and their CSS equivalent:
​​
​​Block style
​​CSS list-style-type
​​arabic
​​decimal
​​decimal
​​decimal-leading-zero
​​loweralpha
​​lower-alpha
​​upperalpha
​​upper-alpha
​​lowerroman
​​lower-roman
​​upperroman
​​upper-roman
​​lowergreek
​​lower-greek
​​Decimal and lowergreek styles are only supported by HTML converters. [Source: Asciidoctor docs]
​​
​​Changing the ordered list style from the default can be done by adding the style to the start attribute.
​​
 
 
​​Different styles of Ordered lists
 
 
​​
​​Ordered lists can also be nested by increasing the number of dots or titled by prefixing the line with a dot without spacing after the dot. 
​​
 
 
​​Nested Ordered List (note the number of dots in the syntax)
 
 
​​
 
 
​​Titled Ordered List (note the difference between the title’s syntax and that of the listed items)
 
 
​​
​
​Unordered List
​​An unordered list is a list prefixed with symbols, popularly known as bullets. Unordered lists in AsciiDoc are created using either an asterisk (*) or a hyphen (-).
​​
 
 
​​Basic unordered list; the list item’s first line of text must be offset from the marker (*​) by at least one space. Empty lines are required before and after a list. Additionally, empty lines are permitted, but not required, between list items. The line comment (//-) acts as a separator to differentiate lists and avoid nesting separate lists.
 
 
​​
​​ Unordered lists can be nested by adding an asterisk, hyphens do not work for items you want to nest under a list. Titles can be added by prefixing the title with a period or full stop.
​​ 
​​ 
 
 
​​Nested unordered list with a title; increasing the number of asterisks creates a new sub-category
 
 
​​
​​
​
​Description List
​​A description list is a list of terms with descriptions; it is helpful when terms need to be listed and emphasized with additional content. Contrary to other lists, the listed subject comes before the term delimiter (usually a double colon or double semi-colon), then the description; the only exception is if the list is nested. The syntax of a basic description list is shown below:
​​
​​Noun:: Name of a person, animal, place or thing
​​UPS;; Uninterrupted Power Supply
​​//
​​This is the output:
​​Noun
​​Name of a person, animal, place or thing
​​UPS
​​Uninterrupted Power Supply
​​
​​Description lists can also be displayed horizontally by adding the horizontal style to the syntax. Another form is the question-and-answer or “qanda” list: this unique form is shown as an ordered list, with each entry representing a question-and-answer combination; in the case of multiple questions, each one is displayed on a new line. The output of a qanda list shows entries in a numbered format starting from 1. The images below show outputs of horizontal description and qanda lists, respectively:
​​
 
 
​​Syntax and output of Horizontal description list. The horizontal style tag (wrapped in square brackets) has to be inputed before the description in order to show the correct output.
 
 
​​
 
 
​​This is a qanda list showing the syntax and output,  the qanda style tag (wrapped in square brackets) has to be inputed before the question is asked. The output appears in a numbered format and failure to type the answer before moving to the next question will not give the desired output.
 
 
​​
​​
​
​Hybrid List
​​Hybrid lists are a combination of the three list types (ordered, unordered, and description), this is done by increasing the term delimiter. The order is usually a description list item first, then ordered and unordered.
 
 
​​Hybrid list (Source: Asciidoctor Docs)
 
 
​​
​​
​​
​
​Links and Images
​
​Links
​​Links, or hyperlinks, are items in a website, usually text or buttons that direct the user to another location. The target of a hyperlink is a Uniform Resource Locator (URL), popularly known as a web address, and AsciiDoc has various ways of creating links. Another term that will come up often is Macro; macros are components that represent commands or actions that are added to a link for data collection.
​​ To create a link, add the URL prefixed with its scheme (an example of a scheme is https or mailto), links beginning with official schemes are automatically converted to hyperlinks.
​​
​​Learn about Technical Writing at https://technicalwritingmp.com/
​​
​​Recognized schemes include:
​​ http
​​https
​​ftp
​​irc
​​mailto
​​The mailto macro adds support to an email link by defining it with text, below is an example:
​​mailto:info@twmp.com
​​However, AsciiDoc detects and autolinks most email addresses.
​​
​​When attaching a link to a text, the text should be wrapped in square brackets at the end of the URL.
 
 
​​Attaching a link to text in AsciiDoc
 
 
​​You can also “escape a URL” or make it inactive by placing a backslash (\) before the URL.
​​
​
​External Links
​​External links are created using the AsciiDoc URL syntax mentioned above, the requirements include a valid scheme and address
​​Scheme
​​https
​​Address
​​technicalwritingmp.com/
​​URL
​​https://technicalwritingmp.com/
​​
​
​Link to a Relative File
​​The link macro is inline and used to create a link when AsciiDoc can’t detect the typed target. The syntax for a link macro is:
​​ link:<target>[<attrlist>]
​​<target>is the link target while <attrlist> is an example of the link text or attribute.
​​Links to relative files (non-AsciiDoc files relative to the document concerned) require the link macro, below is an example:
​​link:downloads/report.pdf[Get Report]
​​Following the above link, AsciiDoc will create a link to report.pdf. If the relative file is another AsciiDoc file, the cross-reference xref should be used instead. Conditions for using a link macro include:
​​A non-URL target
​​A target enclosed in a passthrough to escape restricting characters with special meaning
​​A URL target with an unrecognized scheme
​​A URL macro that is unbounded by quotes, spaces, or brackets.
​​
​
​Link Attributes
​​The enclosed text in the square brackets of a link macro becomes an attribute list when it contains an equals sign (=). An example of a URL with attributes is :
​​https://example.org["Google, DuckDuckGo, Ecosia",role=teal]
​​The link text can be wrapped in double quotes to ensure it is recognized as the first positional attribute. The table below shows the various link attributes recognized by AsciiDoc:
​​
​​Attribute
​​Value(s)
​​Example Syntax
​​Comments
​​id
​​Unique identifier for element in output
​​https://asciidoctor.org[Home,id=home]
​​
​​role
​​CSS classes available to inline elements
​​https://chat.asciidoc.org[Discuss AsciiDoc,role=teal]
​​
​​title
​​Description of link, often show as tooltip.
​​https://asciidoctor.org[Home,title=Project home page]
​​
​​window
​​any
​​https://chat.asciidoc.org[Discuss AsciiDoc,window=_blank]
​​The blank window target can also be specified using ^​ at the end of the link text.
​​window (short-handed)
​​^​
​​https://example.org[Google, DuckDuckGo, Ecosia^]
​​https://chat.asciidoc.org[Discuss AsciiDoc^]
​​
​​opts
​​Additional options for link creation.
​​https://asciidoctor.org[Home,opts=nofollow]
​​Option names include: nofollow​, noopener​
​​                                                                                                                      [Source: Asciidoctor docs]
​​
​
​Cross References
​​The shorthand xref is used to create a cross-reference (a link to another location within the current AsciiDoc document or in another AsciiDoc document). The reference location, known as the anchor, needs to be defined; the next step is to create the reference using the inline xref macro. If the target is in the same document, it must be preceded by a hash(#) while in the case of the target ID being in another document, a dot(.) is used. An example of an xref macro is shown below:
​​
​​Learn how to xref:link-macro-attributes[use attributes within the link macro].
​