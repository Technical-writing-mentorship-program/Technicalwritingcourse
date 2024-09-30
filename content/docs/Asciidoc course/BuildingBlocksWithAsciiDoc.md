---
title: "Building Blocks With AsciiDoc"
description: "This section shows the different building blocks on AsciiDoc"
summary: ""
date: 2024-09-24T22:39:22+01:00
draft: false
seo:
  title: "Building Blocks With AsciiDoc" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

AsciiDoc provides a way to include non-paragraph texts in your documents, such as block quotes, source code listings, sidebars, and tables. These components, known as delimited blocks, are surrounded by delimiter lines that clearly define their boundaries.


This approach helps adequately structure your documents, adding clarity, organization, and emphasis to your writing by ensuring these elements are formatted and rendered distinctly from regular text.


## Delimited blocks
Delimited blocks separate different sections within an AsciiDoc document. They allow you to define and format various types of content, such as quotes, examples, sidebars, and more. Each type of delimited block is defined by a unique set of delimiters.


Examples of Delimited Blocks
### Example Blocks:
Example blocks provide examples or additional information related to the content. They are delimited with equal signs (====) as seen below


```
==== Example Block
==== This is an example block. It can be used to illustrate a point. ====
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mehf2kflcgar8s9gxqxy.png" alt="Fig 1: An image of an example block on Antora" width="100%" />


### Quote Blocks
Quote blocks are used to include quotations within your document. They delimited with double underscores (____)

```
____
She sells seashells by the seashore
____
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ahanlzt3gebhxjexwpx.png" alt="Fig 2: Image of a Quote Block in AsciiDoc" width="100%" />


### Literal Blocks
These are used to display preformatted text, such as code snippets or data. They are delimited with periods (....)


```
....
This is a literal block
You can display preformatted text here.
....
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dt4byo84bolbvsa95cr9.png" alt="Fig 3: Image of a literal block" width="100%" />



## Block metadata
AsciiDoc lets you assign metadata to any block to add context or modify its presentation. Metadata helps control how a block is rendered and can include elements like titles, identifiers, styles, and named attributes.


### Types of MetaData
Several types of metadata can be added to your content.  


* Title

A block title serves as a heading for the content within the block, providing readers with an immediate understanding of its purpose or context. The delimiter for a title is a period (.), followed by the title text on a new line, directly before the block content.

* Id (Anchor)

An id, or anchor, uniquely identifies a block and allows for the creation of internal links within a document for easy navigation. The delimiter for an id is double square brackets ([[id]]), placed immediately before the block content.


* Style

The style attribute specifies the appearance or behavior of a block and is the first unnamed attribute applied to a block. The delimiter used for a style is a pair of square brackets with the style name specified, placed just before the block content.


* Named Block Attributes

Named block attributes provide additional details or modify the behavior of a block. These attributes are included within square brackets ([]), following the style if it is present. Attributes are comma-separated, with the first attribute indicating the style, followed by additional attributes.


Some metadata, such as the title, supplement the content, while others, such as style, dictate the block conversion. You can see an example of block metadata below


```
.Lagos, Nigeria
[[Lagos]]
[quote, Bola Ahmed Tinubu, from Presidential campaign May 2023]
____
We will slow down the economy, by reducing purchasing power. Let's widen...the tax net
____
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6kg9svo55ztsmfhh7p2l.png" alt="Fig 4: Block Metadata" width="100%" />


On extraction, the metadata will look like this


Title




    Lagos, Nigeria




Id




    Lagos




Style




    quote




Named block attributes




    attribution
        Bola Ahmed Tinubu




citetitle
from Presidential campaign May 2023




## Masquerading blocks
Masquerading blocks allow a block to take on the appearance of another element by applying specific roles or attributes. This can be useful for customizing the presentation of your content. The example block below has a masquerade attribute, allowing it to act as a masquerade block.


```
[.masquerade]
====
This block masquerades as a different element using a role attribute.
====
```


### Admonition Blocks
Admonition blocks in AsciiDoc are special blocks used to draw attention to important information within a document. These blocks can be used to highlight warnings, notes, tips, and other types of advice or cautionary messages.


Each admonition block is identified by a keyword like "NOTE," "TIP," "WARNING," or "IMPORTANT," and is visually distinct, making it easier for readers to notice and understand the significance of the content.

The syntax is shown below


```

NOTE: Please note that...

TIP: Pro tip...

IMPORTANT: Don't forget...

WARNING: Watch out for...

CAUTION: Ensure that...
```




<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m3riid9vifhbfhhwtap1.png" alt="Fig 5: Image of Admonition Block" width="100%" />


### Listing and Source code blocks
Source code blocks are specialized blocks designed to display source code with syntax highlighting. These blocks emphasize code structure by colorizing keywords, types, and other elements.


```
[source,python]
----
require 'sinatra'


get '/hi' do
  "Hello World!"
end
----
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/72242qm900t8r3s7bsmr.png" alt="Fig 6: Image of Listing and Source Code Block" width="100%" />


### Open Blocks
Open blocks allows you to group various elements together such as paragraphs, lists, or even other blocks, treating them as a single unit without imposing any specific formatting or semantics.


```
[sidebar]
.Related information
--
This is aside text.

It is used to present information related to the main content.
--
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5s06d0m0o7df1t2nxs5g.png" alt="Fig 7: Image of an Open Block" width="100%" />




### Passthrough blocks
This block allows the content to be passed directly through to the output document without any processing by the AsciiDoc parser. A passthrough block can be extremely useful when you encounter a complex requirement that can't be met using standard AsciiDoc syntax.


```
++++
<!DOCTYPE html>
<html>
  <head>
    <title>Passthrough Example</title>
  </head>
  <body>
    <p>This is a paragraph in HTML included as a passthrough block in AsciiDoc.</p>
  </body>
</html>
++++
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e0znnrvkapeaze94ea3r.png" alt="Fig 8: Image of Passthrough Block" width="100%" />




## Delimiters optional
Delimiters define the start and end of a block. For instance, when you create a block, you typically enclose it with specific delimiters like ---- for an open block or ++++ for a passthrough block. However, some delimiters can be optional depending on how you're structuring your document. You can create lists without explicitly defining delimiters like `*`, `-`, or `+`. These can sometimes be omitted if the context makes it clear.


```
This is a paragraph.

1. First item
2. Second item
3. Third item

Another paragraph.
```


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ipiniz78gvjfehn1xkpd.png" alt="Fig 9: Image of Delimiters" width="100%" />


## Table
A table is essentially a delimited block, with the number of columns determined by the first non-blank line inside the |=== delimiters. If each column title is on a separate line, the cols block attribute is required to explicitly state the number of columns, with the * repeat operator used to apply uniform formatting across columns.


```
[cols=2*]
|===
|Firefox
|Web Browser

|Ruby
|Programming Language

|TorqueBox
|Application Server
|===
```

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6285moc20lsmxa938xpl.png" alt="Fig 10: Image of Tables on AsciiDoc" width="100%" />

You can mark the first row as a header by setting the header option, which ensures the titles are clearly distinguished from the data,

```

[cols=2*,options=header]
|===
|Name
|Group

|Firefox
|Web Browser

|Ruby
|Programming Language

...
|===
```

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ye3opc66cg966x7p7ty.png" alt="Fig 11: Image of AsciiDoc Table with Header Row" width="100%" />




