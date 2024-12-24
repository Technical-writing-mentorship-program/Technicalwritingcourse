---
title: "API Data Formats"
description: "This article delves into the various data formats used in APIs, such as JSON, XML, and Protocol Buffers. It explains how to structure and work with these formats, ensuring developers can efficiently transmit and receive data when interacting with APIs."
summary: "Explore the different API data formats, their structures, and best practices for using them in API communication."
date: 2024-05-16T07:07:07+01:00
lastmod: 2024-09-16T16:04:48+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "api-data-format-6a1a6be4373e933280d78ea53de6158e"
weight: 5
toc: true
seo:
  title: "API Data Formats" # custom title (optional)
  description: "A comprehensive guide on API data formats, covering JSON, XML, and Protocol Buffers, to help developers optimize API communication." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



# API Data Format
Establishing a common language is one of the key goals during communication and interaction. Sometimes, that language can be unique to the two persons involved, like a secret sign between friends. The most important thing is that the data format is in whatever way the intended audience can understand.

Data formats also apply to computers interacting via an API. Our middleman, aka API, which is somehow now tasked with translation, has to work with a format that the two computers will understand. 

The most popular format is the JSON format (Javascript Object Notation) because it is both human-readable and machine-readable. However, there are many other formats, which we will explore in this chapter. 


# Types of API Data Format


# JSON (Javascript Object Notation): 

JSON is popular for several reasons. First, it is based on the popular Javascript language, making it compatible with front- and back-end web interactions. Second, it is human-readable. If you are familiar with the object syntax in Javascript, that is exactly how JSON is represented. 

The JSON syntax consists of attribute-value pairs and arrays. An attribute-value pair is a key and its associated value, which can be a string, number, boolean, array, or another JSON object. On the other hand, arrays are ordered lists of values, which can be a mix of different data types. 

Here is an example of a JSON syntax of our Petstore sample API

```
{
    "petId": 12345,
    "name": "Buddy",
    "species": "Dog",
    "breed": "Golden Retriever",
    "age": 5,
    "vaccinated": true,
    "owner": {
        "ownerId": 67890,
        "firstName": "Jane",
        "lastName": "Doe",
        "contact": {
            "email": "jane.doe@example.com",
            "phone": "+123456789"
        }
    },
    "appointments": [
        {
            "appointmentId": 1,
            "date": "2024-08-20",
            "time": "10:00 AM",
            "service": "Vaccination"
        },
        {
            "appointmentId": 2,
            "date": "2024-09-15",
            "time": "2:00 PM",
            "service": "Grooming"
        }
    ]
}

```

## **RESOURCES** 

JSON is a popular format and it would be important that you learn and understand its syntax and rules. We will not cover that in this course but there are detailed and beginner-friendly resources to learn and understand JSON.

We made a list of some of our favourites and hopefully, you will enjoy them too!


1. [JSON Course by W3 Schools](https://www.w3schools.com/js/js_json_intro.asp): This is one of our favourites because it is beginner-friendly and has an interactive demo for you to practice.


2. [Video course on JSON:](https://www.youtube.com/watch?v=6OhMbf2v_jI) If you prefer videos, then this is for you.


3. [JSON course on Udemy:](https://www.udemy.com/course/json-crash-course/) This course contains videos, classwork and quizzes that will guide you on mastering JSON and it’s absolutely FREE!

4. [JSON tools by JSONing:](https://jsoning.com/) This collection of JSON tools includes a formatter, validator, comparator, converter, JSONPath tester, JSON schema generator, and Mock API.



# YAML (Yet Another Markup Language)

YAML was initially meant to be a markup language, which is why it was called Yet Another Markup language. However, YAML stands out from other markup languages like HTML and XML due to its unique feature: data serialization. 
This will slowly make sense when we see examples of an actual YAML syntax. 

Like JSON, YAML has a simple and human-readable syntax. It can be called "JSON without the brackets.” The YAML syntax uses the Python indentation style to replace the brackets that exist in JSON. However, it retains the colon-center syntax between attributes-value pairs as we did in JSON. 

**Here is an example of a YAML syntax of our Petstore sample API:**

```
    petId: 12345
    name: Buddy
    species: Dog
    breed: Golden Retriever
    age: 5
    vaccinated: true
    owner:
      ownerId: 67890
      firstName: Jane
      lastName: Doe
      contact:
        email: jane.doe@example.com
        phone: +123456789
    appointments:
      - appointmentId: 1
        date: 2024-08-20
        time: 10:00 AM
        service: Vaccination
      - appointmentId: 2
        date: 2024-09-15
        time: 2:00 PM
        service: Grooming
```


## **RESOURCES** 

YAML is a very interesting format and you will learn to enjoy its simplicity. We will not cover the syntax in this course but there are detailed and beginner-friendly resources to learn and understand the format.

Here are some of them: 


- [**YAML Tutorial by TutorialsPoint**](https://www.tutorialspoint.com/yaml/index.htm)**:** This course is free and beginner-friendly. It covers the basics of YAML syntax and usage. 


-  ****[**A GitHub repo on YAML:**](https://github.com/mohitkr05/YAML_Course) This course will give you everything you need to get started and it includes a YAML Cheat code.


- [**YAML Guide by Redocly**](https://redocly.com/docs/yaml)**:** If you are looking for a quick and easy guide to YAML, then this course is perfect for you. It contains detailed examples of how to use YAML syntax.


# XML (Extensible Markup Language)

XML stands for Extensible Markup Language. This format is widely used and interpreted by different systems. Its simple structure makes it both human-readable and machine-readable.

XML existed long before JSON and is known for formatting data using node building blocks. A node is an individual unit within the XML structure that represents a single piece of data. 

Nodes can contain other nodes, creating a hierarchical structure that defines the relationships between different data elements. This allows XML to represent complex data models clearly and organized. Each node is enclosed in tags, with a start tag and an end tag, which define the boundaries of the data it contains.


**Here is an example of an XML syntax of our Petstore sample API:**

```
    <pet>
        <petId>12345</petId>
        <name>Buddy</name>
        <species>Dog</species>
        <breed>Golden Retriever</breed>
        <age>5</age>
        <vaccinated>true</vaccinated>
        <owner>
            <ownerId>67890</ownerId>
            <firstName>Jane</firstName>
            <lastName>Doe</lastName>
            <contact>
                <email>jane.doe@example.com</email>
                <phone>+123456789</phone>
            </contact>
        </owner>
        <appointments>
            <appointment>
                <appointmentId>1</appointmentId>
                <date>2024-08-20</date>
                <time>10:00 AM</time>
                <service>Vaccination</service>
            </appointment>
            <appointment>
                <appointmentId>2</appointmentId>
                <date>2024-09-15</date>
                <time>2:00 PM</time>
                <service>Grooming</service>
            </appointment>
        </appointments>
    </pet>
```

In this example, each piece of data, like `petId`, `name`, and `species`, is enclosed within its tags, making it a node. The `pet` node contains other nested nodes, such as `owner` and `appointments`, which further break down the data into more detailed information.

The tags in XML make the language bulky, hence the need for simpler and lightweight formats such as JSON and YAML.


## **RESOURCES** 

XML was quite popular and it is compatible with various systems. We will not cover its syntax in this course but there are detailed and beginner-friendly resources to learn and understand the format.

Here are some of them: 


- [**XML Tutorial by W3 Schools:**](https://www.w3schools.com/xml/) This is a beginner-friendly tutorial that covers the basics and more advanced XML concepts


- [**XML by Class Central:**](https://www.classcentral.com/subject/xml) ****This contains a list of resources on XML. 


- [**Learn XML  by Udemy:**](https://www.udemy.com/course/xml-step-by-step-for-beginners/) [](https://www.udemy.com/course/xml-step-by-step-for-beginners/) This course is beginner-friendly and you will understand XML from scratch. It has assignments and quizzes plus its FREE! 
#  Raw

In RAW format, data is sent or received in an unprocessed or unencoded form through an API. This could be plain text, raw JSON, XML, or any other format that hasn't been altered or transformed.
When working with raw data formats, the data is typically sent directly over the network without additional encoding or compression. This approach is often used when the API needs to handle data in its original form or when the overhead of encoding or compression is unnecessary.

**Here is an example of a Raw syntax of our Petstore sample API:**

```
    
    POST /api/petstore HTTP/1.1
    Host: api.example.com
    Content-Type: application/json
    Content-Length: 123
    
    {
      "petId": 12345,
      "name": "Buddy",
      "species": "Dog",
      "breed": "Golden Retriever",
      "age": 5,
      "vaccinated": true
    }
    
```

## **RESOURCES** 

RAW formats can come in handy, so understanding their syntax and structure can help you eliminate the need to use more complex formats like JSON and YAML.

We did not cover their syntax in this course, but we have picked out some of the best resources for you!

Here are some of them:


- **RAW Data Formats using NodeJs:** [](https://swagger.io/docs/specification/describing-request-body/raw/) In this course, you will learn how RAW data formats are used in APIs using an interactive demo. 


# Binary

In binary format, the data is encoded into binary—those familiar 0s and 1s. This format is typically machine-readable only. Binary API data formats offer significant advantages in terms of performance and speed. Since they are more compact and don’t require interpretation, they are ideal for transmitting large datasets, multimedia files, or complex data structures.


**Here is an example of a Binary syntax of our Petstore sample API:**

```
    syntax = "proto3";
    
    message Pet {
      int32 petId = 1;
      string name = 2;
      string species = 3;
      string breed = 4;
      int32 age = 5;
      bool vaccinated = 6;
    }
```    



## **RESOURCES** 

Binary format works best for operating system tasks and increased performance. While it is not human-friendly due to its format, it is a good option when working with large files. 

We did not cover the syntax in this course but we have picked out some of the best resources for you!

Here are some of them: 

[Binary Data API](https://bun.sh/docs/api/binary-data): This explains the syntax and usage of Binary Data format.

