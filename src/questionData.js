export const questionData = {
  hardQuestions: [
    {
      question: "What are the different data types present in Javascript?",
      answer: "String, Number, BigInt, Boolean, Undefined, Null, Object",
    },
    {
      question: "Explain Hoisting in javascript",
      answer:
        "Hoisting is the default behavior of javascript where all the variable and function declarations are moved to the top. This means that regardless of where the variables and functions are declared, they are moved to the top of the scope.",
    },
    {
      question: 'What is the difference between the "==" and "===" operators?',
      answer:
        'Both are comparison operators. The difference between them is that "==" is used to compare values only while "===" is used to compare both values and types.',
    },
    {
      question: "What does npm stand for?",
      answer: "Node Package Manager",
    },
    {
      question: "What is responsive design?",
      answer:
        "Responsive design is a web development technique that creates websites compatible with multiple devices with different screen sizes. Responsive websites are designed to look good on both desktop and mobile devices.",
    },
    {
      question: "What are undeclared and undefined variables?",
      answer: `Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

        Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.`,
    },
    {
      question: "Which symbol is used for comments in Javascript?",
      answer: `// for Single line comments and

      /* Multi
      
      Line
      
      Comment
      
      */`,
    },
    {
      question: "How can the style/class of an element be changed?",
      answer: `It can be done in the following way:

      document.getElementById("myText"). style. fontSize = "20";
      or
      
      document. getElementById ("myText"). className = "anyclass";`,
    },
    {
      question:
        "How can you convert the string of any base to an integer in JavaScript?",
      answer: `The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter. The second parameter is the base of the given string.`,
    },
    {
      question: "What is the data type of variables in JavaScript?",
      answer: `All variables in JavaScript are object data types.`,
    },

    {
      question:
        "What is the difference between an alert box and a confirmation box?",
      answer: `An alert box displays only one button, which is the OK button.
        But a Confirmation box displays two buttons, namely OK and cancel.`,
    },
    {
      question: "What are escape characters?",
      answer: `Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes, and ampersands. Place backslash before the characters to make it display.`,
    },
    {
      question: "What are Javascript Cookies?",
      answer: `Cookies are the small test files stored in a computer, and they get created when the user visits the websites to store information that they need. Examples could be User Name details and shopping cart information from previous visits.`,
    },
    {
      question: "What is the pop() method?",
      answer:
        "The pop() method takes the last element off of the given array and returns it. The array on which it is called is altered.",
    },
    {
      question:
        "What is the different between the break and continue statements?",
      answer:
        "Break statement exits from the current loop. Continue statement continues with next statement of the loop.",
    },
    {
      question: "What are the two basic groups of data types in Javascript?",
      answer:
        "Primitive and Reference. Primitive types are number and Boolean data types. Reference types are more complex types like strings and dates.",
    },
    {
      question: "Is JavaScript a case-sensitive language?",
      answer:
        "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.",
    },
    {
      question: "What is an attribute in HTML?",
      answer:
        "Attributes are the properties that can be added to an HTML tag that change the way the tag behaves or displays. Attributes are added after the name of the tag, inside the brackets.",
    },
    {
      question: "What is semantics in HTML?",
      answer:
        "It is the use of HTML markup to reinforce the semantics or meaning of the content.",
    },
    {
      question: "How do you separate a section of texts in HTML?",
      answer: "Using the followings tags: <br>, <p>, or <blockquotes>",
    },
    {
      question: "How do you create nested web pages in HTML?",
      answer:
        "By using the built-in iframe tag. <iframe src='http://example.com' width='600' height='400'></iframe>",
    },
  ],
  mediumQuestions: [],
  easyQuestions: [],
}
