## HTML DOM 
I'm pretty sure you've come across the Document Object Model while learning computer science concepts. DOM can be thought of as an intermideary that helps JavaScript translate web documents like HTML and XML. But why does JavaScript need an interface to inteprate web documents?  


It's a model designed to allow programming languages to access, and manipulate web documents. 

# Core concepts in JavaScript and DOM manipulation

## JavaScript HTML DOM Elements

Tags are the backbone of HTML. The act as keywords which tell your browser how to display, and display content on a web page. 

A HTML tag is an object while every nested tag is called "children" because they are placed within a main tag referred to as the "parent" tag. 

Because tags are considred to be objects, they are accessible to JavaScript, allowing you to pass logic and modify the User Interface.

This ability for JavaScript to access HTML tags is enabled by something called the Document Object Model. 

DOM allows JavaScript to access and manipulate elements in HTML. It acts as the interface between programming languages, and web Interface. 

In JavaScript, we represent HTML tags with built-in methods. These are pre-defined methods to help you perform actions on objects. In our case you can access HTML tags and attacth them to methods which allo you to add JavaScript logic to the DOM.

What exactly goes on under the hood when you load a webpage? Your browser creates a "model" of the code that you created in your HTML, CSS and JavaScript files. This "web version" is what we call the Document Object Model. Your browser does this so it can read and render your code in a structured, standardized and dynamic way. Without the DOM, web pages would not interactive. Websites would be static and users could not interact with anything on a website. 

DOM was also created to standardize how programming languages could access and manipulate web content. The 4 main standards provided by the DOM include:

- Objects for representing HTML 
- Properties for adding different charactersitics or different  to HTML elements
- Methods for performing actions on HTML elements
- Events for manipulating HTML elements

### DOM Objects

### DOM properties
HTML DOM properties are either elements, classes, values or attributes that can access or change elements on a web page.

## DOM Nodes
Because DOM views HTML as a tree structure, it's often referred to as a node-tree (or document tree). Nodes can be accessed, modified, added or deleted from this structure. This is another advantage of the DOM standard because you're able to access nodes and manipulate them.

Because methods can be used to manipulate HTML elements, we can attach them to nodes and get the desired result. For example, this is a function that uses the insertBefore method and the parentNode property to dynamically place a HTML element at the end of a function. 

the insertBefore method is 'asking' the DOM to delete the currentNode and replace it with the newNode AKA the new element. 

Meanwhile, the parentNode property is being used as the target the parent node where the replacement should occur. Remember HTML DOM properties can be accessed or be modified so that's what we want to do with the parentNode property. it allows us to modify the Parent node in the HTML document. 

The 'insertBefore()' method takes three parameters: the NewNode we will insert, the currentNode we want to replace and the nextSibling that should be rendered with the newNode parameter. 


```JavaScript
The 'insertBefore()' method takes two parameters: the 'newNode' that needs to be inserted and the 'oldNode' that the new node will replace. However, in the given code, there is a mistake where the third parameter 'nextSibling' is written incorrectly. It should be 'oldNode.nextSibling' which specifies the node before which the new node should be inserted.

Therefore, the corrected code should look like this:

oldNode.parentNode.insertBefore(newNode, oldNode.nextSibling);

Note that this code only replaces the position of the said nodes, the old node is not actually deleted. The name of the function is a little misleading in that sense. To actually delete the old node, you need to call the 'removeChild()' method on the parent node, passing in the old node as a parameter.
```

## HTML methods and properties

- removeChild() -  for deleting node
- insertBefore() - for inserting nodes before elements




