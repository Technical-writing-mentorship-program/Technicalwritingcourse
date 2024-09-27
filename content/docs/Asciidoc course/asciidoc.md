---
title: "Converting Asciidoc Files"
description: "The document below explains how to convert asciidoc files to different formats"
summary: ""
date: 2024-09-26T12:16:33+03:00
lastmod: 2024-09-26T12:16:33+03:00
draft: false
seo:
  title: "Converting Asciidoc Files" # custom title (optional)
  description: "The document below explains how to convert asciidoc files to different formats" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

**Convert** Converting Your Document

**Asciidoctor**


Asciidoctor is a versatile, open-source tool. It converts AsciiDoc content into various formats. It converts AsciiDoc files into a structured document model. This enables easy conversion to HTML5, DocBook 5, man pages, PDF, EPUB3, and more. Originally written in Ruby, Asciidoctor is not restricted to Ruby environments. You can also run Asciidoctor using a JVM with AsciidoctorJ. Or, use Asciidoctor.js in JavaScript environments. This versatility makes it adaptable to different development ecosystems.

**Installation**


To install Asciidoctor, follow these steps based on your preferred setup method and environment.

**I. Using RubyGems (Recomended)**


**Prerequisites**:

Ensure Ruby installed on your system. Download it from[ ruby-lang.org](https://www.ruby-lang.org/) or use a version manager like RVM or rbenv.

1.Install Asciidoctor:

Open your terminal or command prompt and run the following command:


```
gem install asciidoctor
```


1. Verify Installation:

Check the installation by running the prompt below in the terminal:


```
asciidoctor --version
```


You should see the version of asciidoctor you have installed in the terminal.

**II. Using Asciidoctor.js for Node.js Users**


To use Asciidoctor in Javascript, follow the steps below:

**Prerequisites**: Ensure Node.js and npm (Node Package Manager) are installed. You can download them from[ nodejs.org](https://nodejs.org/).

**1.Install Asciidoctor.js**

Install Asciidoctor.js by running the command below in your terminal:


```
npm install @asciidoctor/core @asciidoctor/cli
```


**2. Verify Installation:**

Verify install of asciidoctor by running the command below.


```
npx asciidoctor --version
```


Running the command above, on successful installation of asciidoctor, the follow message is displayed in terminal indicating the version of asciidoctor installed.


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zf2t9inz8xjj0fi0quc3.png" width="100%">



Fig 1: Shows version of asciidoctor installed.

**Asciidoctor Extensions**

Asciidoctor supports a variety of plugins and extensions to enhance its functionality. These plugins can add features and integrate with other tools. They can also customize your AsciiDoc docs.

**Asciidoctor Diagram**

To add diagrams and charts to your AsciiDoc files, tools like PlantUML and Graphviz are used.

1. Install Asciidoctor Diagram:


```
gem install asciidoctor-diagram
```


2. Set Up Your AsciiDoc Document:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0a2yh3sqqtk53g4vrh7o.png" width="100%" />

Fig 2: shows a sample set up of an asciidoctor document.

3.Run Asciidoctor Diagram by running the command below in the terminal:


```
asciidoctor -r asciidoctor-diagram your_document.adoc
```

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh1lk1nbr09e1bt1ik2g.png" width="100%" />



Fig 3: Shows image generated on running `asciidoctor -r asciidoctor-diagram your_document.adoc`

**Asciidoctor PDF**

Asciidoctor PDF allows for the  generation of PDF documents from AsciiDoc sources.

1.Install Asciidoctor PDF by running the command below in the command terminal:


```
gem install asciidoctor-pdf in
```


2.Install Prerequisites:

To run asciidoctor-pdf, you must have  installed the following gems:

**Prawn**: This is the main gem for the Prawn library, a pure Ruby PDF generation library. It generates PDF documents through automated programming processes. You can generate PDFs from scratch, adding text, images, tables, and more.

**Prawn-table: **This gem adds features for creating tables in PDFs with the Prawn library. It extends Prawn's capabilities to handle complex table layouts and formatting.

**Prawn-iconv**: This gem provides text encoding support. It integrates Prawn with the iconv library. This converts text encoding in PDFs.


```
gem install prawn prawn-table prawn-iconv
```


1. Create an AsciiDoc Document as below:


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uujdzgpwoyw2l7herof8.png" width="100%" />



Fig 4: Shows a sample AsciiDoc file example.adoc

Asciidoctor PDF makes it easy to produce professional-quality PDF documents from AsciiDoc sources.

4.Generate the PDF by runnin the command below:


```
asciidoctor-pdf -r asciidoctor-pdf example.adoc
```


This command generates a pdf example.pdf in the same directory as of example.adoc

5.Customize Your PDF:

Create a theme file (my-theme.yml) to customize the look of your PDF:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ldwoslptm6lf23fbv2qo.png" width="100%" />

Fig 5: Showing sample of a theme that can be applied to an asciidoc document.

6.Apply the theme:

Apply you the theme to the asciidoc file as shown below:


```
asciidoctor-pdf -r asciidoctor-pdf -a pdf-theme=my-theme.yml example.adoc
```


**Note**: The -a pdf-theme=my-theme.yml option applies a custom theme to the PDF output, controlling the document's appearance.

**<h4>Asciidoctor Syntax Highlighter</h4>**


Asciidoctor supports syntax highlighting for code blocks, making code snippets easier to read.

To highlight, set the code block to a specific language.

For example, the snippet below specifies language as python and so on running the document the code block will be highlighted in python theme


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8mmzza1d79jjizple2re.png"  width="100%" />

Fig 6: Showing how to set Python language for specific code block.

Note : To set preferred language for the code block, replace python with the specific language

Specify the language using [source,<language>], where <language> can be html, java, javascript, and many others.

**Community and Resources**

Asciidoctor has an active community that provides various resources:



* **Forums and Chat**: Engage with other users and developers on forums and chat platforms like [Zulip.](https://asciidoctor.zulipchat.com/)
* **Documentation**: Comprehensive guides and tutorials are available on the [Asciidoctor website](https://docs.asciidoctor.org/).

**Contribution**: The community welcomes contributions through [GitHub repositories.](https://github.com/asciidoctor/docs.asciidoctor.org)

<h5>Security Considerations</h5>


Asciidoctor has security issues, especially with external content and code blocks.

Asciidoctor provides mechanisms to disable unsafe features and sanitize input.

<h4>Performance Considerations</h4>


Asciidoctor works well for most cases. 

For large documents or complex tasks, consider optimizations, caching or splitting documents.

AsciidoctorJ

AsciidoctorJ is the Java implementation of  asciidoctor.

It bundles all gems needed to run Asciidoctor in a Java API.

This lets you use Asciidoctor in Java like any other Java library.

<h4>Getting Started with AsciidoctorJ</h4>


To use AsciidoctorJ, include it as a dependency in your Java project using popular build tools like Maven or Gradle

**Using Maven**

**Installation**

1. Download Maven:

Visit**[ Maven download page](https://maven.apache.org/download.cgi) **and download the latest binary release.

2. Extract the archive:

Extract the downloaded archive to a directory of your choice**.**


```
tar xzvf apache-maven-3.x.y-bin.tar.gz
```


3. Set up environment variables: 

Add Maven's bin directory to your PATH environment variable. You can do this by adding the following lines to your ~/.bashrc, ~/.zshrc, or other shell configuration file:


```
export M@_HOME=/path/to/apache-maven-3.x.y
Export PATH=$M2_HOME/bin:$PATH
```


Replace /path/to/apache-maven-3.x.y with the actual path to the extracted Maven directory.

4. Verify the installation:

Open a new terminal window and run:

```
Maven -version
```

On successful installation, the maven version is displayed or else run setup process again.

5. Set Up Your Maven Project

6. Open your IntelliJ IDE, and go to the File > New > Project as shown in the below image.

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/044h9wqwi65xp1a6p2nl.png" width="100%" />


Fig 7: shows how to create a maven project

**On the next screen:**

1. Provide a suitable name as per your requirement

2. Choose the location you want to store your project

3. Choose the programming language as per your requirement

4.  Here you have to choose Maven

5.  Choose the JDK you want to use

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h299o2bo7vv30csh791u.png" width="100%" />


fig 8: shows how to setup maven project.

1.  click on the Create button. And you are done.

2.  After creating the project, you can see two default files created, pom.xml file and Main.java class


 **Pom.xml**


    
<img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y70by26b7sza1d753dow.png" width="100%" />



Fig 9: shows Pom.xml

**Main.java class**

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kncef9cjiodnidiz9cg5.png" width="100%" />

Fig 10:  Shows main.java class

1.  Add AsciidoctorJ as a dependency in your pom.xml file as below:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3p91zgisvfxpbbeuf15d.png" width="100%"/>

Fig 11: shows how to add asciidoctorJ, to pom.xml file

To read more about the maven file POM.xml and the tags used, visit [maven-pom-xml](https://www.javatpoint.com/maven-pom-xml).

1. Initialize asciidoctor in main.java class as below:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a0ccmerom82r8qufs7fk.png" width="100%" />

Fig 12: Shows initialisation of asciidoctor in main.java class.

Where;

-Asciidoctor asciidoctor = AsciidoctorFactory.create(); Initializes an Asciidoctor instance which is -used for performing conversions.

-inputFile is the path to your AsciiDoc file (example.adoc). Ensure this file exists in src/main/resources/asciidoc. 

-outputFile is the path where the converted HTML file will be saved.

1. Build Your Project

Open the command terminal and run the code below:


```
Maven clean package
```


8.  Run the Java Application 

Run your Java class using the code below:


```
Maven exec:java -Dexec.mainClass="com.example.main"
```


The command generates the output HTML file in the target directory with the name example.html

<h4>Asciidoctor.JS</h4>


Asciidoctor.js is a JavaScript port of the Asciidoctor project,allowing developers to convert AsciiDoc content into HTML and other formats directly within the JavaScript environment

Asciidoctor.js makes it possible to integrate AsciiDoc processing into web applications, Node.js applications, and other JavaScript-based environments.

Key Features of Asciidoctor.js

**1. Client-Side and Server-Side Rendering**:

Client-Side: You can use Asciidoctor.js in web browsers to convert AsciiDoc content to HTML rapidly. This helps with live previews and rendering docs in web apps.

Server-Side: You can use Asciidoctor.js in Node.js to process AsciiDoc on the server side.

**2. Compatibility**:

Asciidoctor.js is compatible with the Asciidoctor API. 

It supports many AsciiDoc features. So, you can render documents with capabilities like the Ruby version.

**3. Usage**:

You can include Asciidoctor.js in your web pages with a script tag. Or, install it via npm for Node.js applications.

**In a Web Browser:**

Include the Asciidoctor js library via a `script` tag or a package manager like npm. 

**Including Asciidoctor.js via `script` Tag

Include Asciidoctor.js directly from a CDN as shown below:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xwm2ypi0qmo44clh991g.png" width="100%" />

Fig 13: Shows how to include asciidoctor.js in document using Cdn

In the example above:

The `script` tag includes the Asciidoctor.js library from a CDN.

Const Adoccontent is used for inputting the AsciiDoc content.

asciidoctor.convert(adocContent) convers adocContent to html which is initialized as html.

The resulting HTML is displayed in the `div` with the id "content."

When the file is opened in browser, it displays;

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/70czevzr4ql2n0qjedbq.png"  width="100%" />

Fig 14: shows the output of running the above document in a browser.

**Using Asciidoctor.js with npm**

1. Create a New Project Directory by running the command below:

```
mkdir asciidoctor-project
```

The command aboves creates a new folder asciidoctor-project, that will be the projects's directory.

2.  Navigate into the directory by running the command below in your command terminal: 


```
Cd asciidoctor-project
```


3. Initialize a New Node.js Project by running the command below in command terminal:


```
npm init -y
```


4. Install Asciidoctor if you haven't by using the terminal command below:


```
Npm install asciidoctor
```


5. Create a JavaScript File (content.js) to Convert AsciiDoc to HTML:


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/al0kjkevcrhjsr3n9f98.png" width="100%" />



Fig 15: shows a sample javascript code using asciidoctor.js

1. Running the command below  generates the html file:


```
Node content.js
```


On running the above command, content.html is generated  in the same directory as content.js.

<h3>B.Converting documents to HTML5</h3>


Asciidoctor in built HTML converter, generates HTML 5 styles with CSS3 and.

When asciidoctor is run without parameters it generates a HTML5 as it is the default output format in Asciidoctor.

The HTML file opens in a browser and makes use google web fonts which can be opted out of.

<h4>Using Asciidoctor</h4>


1.Create  a file with .adoc extension or navigate into the directory contain the document file.
    
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xi9unlh1mc5khdnqsno3.png"  width="100%" />


Fig 16: shows an asciidoc file

2.Save the file with .adoc extension

3.Open the terminal, navigate to the directory containe example.adoc(your asciidoc file)

4.To convert the file to HTML5, call the Asciidoctor processor with the asciidoctor command, 

followed by the name of the document.


```
Asciidoctor example.adoc
```


The command creates the html file example.html in same directory of example.adoc.

5.To see the html file, run command ls in the command terminal. 


```
$ ls
examplet.adoc  example.html
```


1. Specify the output as HTML5 explicitly using the -b option:


```
 asciidoctor -b html5 example.adoc
```


7. Use the -o option to specify a custom name for the output HTML file:


```
Asciidoctor -b html5 -o custom_output.html example.adoc
```


8. You can also specify a different directory for the output file by including the path in the -o option:


```
Aciidoctor - b html5 -o output-dir/custom_output.html example.adoc
```


output_dir- specifies the directory under which the file is created.

Custom_output.html- specifies the output file.

4. To include inline CSS (so it doesn't rely on external stylesheets), use the -a option as below:


```
Asciidoctor -b html5 -a linkcss! example.adoc
```


<h4>Using Maven</h4>


You can convert a document into HTML5 using Asciidoctor Maven plugin by following steps below:

1. Include the Asciidoctor Maven Plugin in your `pom.xml` file: 

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y9yfeolmuqa4v3o8d2ce.png" width="100%" />

Fig 17: shows setup for asciidoc  project conversion using maven plugin

1. Ensure your AsciiDoc file (e.g., README.adoc)  is in the root directory of your project.


    '

3. Execute the Maven command to convert the AsciiDoc to HTML5


```
mvn generate-resources                                                                    
```


4. Generated HTML5 file is located specified output directory, typically under target/generated-docs.

<h3>Converting Documents into a DocBook</h3>


There a several ways in which adocument can be converted  into a docbook and here are the most common ways.

 

<h4>Using Asciidoctor</h4>


To convert asciidoc file to a DocBook follow the steps below:

1.Create a file named example.adoc with your AsciiDoc content. For example:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swn89i7vze46ov993ve8.png" width="100%" />


Fig 18: shows a sample asciidoc document

2.Open a terminal, navigate to the directory containing your AsciiDoc file, and run:


```
asciidoctor -b docbook5 example.adoc
```


The above command generates,example.xml file in DocBook 5 format in the same  directory as of example.adoc.

1. Open example.xml to check the DocBook output. It should look something like this:

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mn7tr2uo0vk7quc8ot58.png" />

Fig 19: shows content of  example.xml 

4.You can add various options to customize the output.

<h4>Using Maven</h4>


To convert AsciiDoc to DocBook using Maven, configure the Asciidoctor Maven Plugin in your project's pom.xml file. Here's a step-by-step guide

1. Set up your Maven project structure

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5z14fk3bkf03p1e67nf.png" width="100%" />

Fig 20: shows the structural setup of  a mave project.

2.Edit your pom.xml file to include the Asciidoctor Maven Plugin:


```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <modelVersion>4.0.0</modelVersion> <groupId>com.example</groupId> <artifactId>asciidoc-to-docbook</artifactId> <version>1.0-SNAPSHOT</version> <properties> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <maven.compiler.source>1.8</maven.compiler.source> <maven.compiler.target>1.8</maven.compiler.target> </properties> <build> <plugins> <plugin> <groupId>org.asciidoctor</groupId> <artifactId>asciidoctor-maven-plugin</artifactId> <version>2.2.2</version> <dependencies> <dependency> <groupId>org.asciidoctor</groupId> <artifactId>asciidoctorj-docbook</artifactId> <version>2.1.0</version> </dependency> </dependencies> <executions> <execution> <id>output-docbook</id> <phase>generate-resources</phase> <goals> <goal>process-asciidoc</goal> </goals> <configuration> <backend>docbook5</backend> <sourceDirectory>src/docs/asciidoc</sourceDirectory> <outputDirectory>${project.build.directory}/generated-docs</outputDirectory> <sourceDocumentName>document.adoc</sourceDocumentName> <attributes> <doctype>book</doctype> <toc>left</toc> </attributes> </configuration> </execution> </executions> </plugin> </plugins>
 </build> </project>
```


Fig 21: shows pom.xm/ setup for asciidoctor maven project

3.Create your AsciiDoc file in src/docs/asciidoc/document.adoc  as below;


```
Lists
AsciiDoc supports both ordered and unordered lists:
* Unordered list item 1
* Unordered list item 2
  * Sub-item 2
. Ordered list item 1
. Ordered list item 2
  .. Sub-item 1
  .. Sub-item 2
Links
Here is a link to the official AsciiDoc website:
http://asciidoc.org[AsciiDoc]
Images
You can include images in your document
image::path/to/image.png[An example image]
<strong> Code Blocks </strong>
You can include code blocks with syntax highlighting:
[source, python]
----
def hello_world():
	print("Hello, World!")
----
```


Fig 22: shows asciidoc document for mave project

4.Open a terminal, navigate to your project directory, and run the command terminal below:


```
mvn generate-resources
```


5.The DocBook file is  generated in target/generated-docs/document.xml.

<strong>Conclusion</strong>
AsciiDoc is a powerful and flexible markup language that allows you to write complex documents with ease. Whether you're writing technical documentation, a book, or an article, AsciiDoc has the tools you need to create beautiful and functional content.