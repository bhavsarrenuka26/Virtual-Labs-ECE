const javaLabs = [
{
title:"Java Calculator",
shortDesc:"Implement arithmetic operations using switch case.",
info:{
aim:"To implement a calculator using Java control structures.",
theory:"A Java calculator demonstrates basic Object-Oriented Programming concepts and control structures like switch-case. The program takes user input and performs arithmetic operations such as addition, subtraction, multiplication, and division. Switch-case improves readability and organizes logic efficiently compared to multiple if-else statements. Java uses classes and methods to structure programs, and objects are created using the 'new' keyword. This experiment strengthens understanding of input handling, control flow, and method execution in Java."
},
demoVideoUrl:"https://youtu.be/pI08jd14_ic?si=KxSHGjOlGyp8EdxN",
quiz:[
{questionText:"Which keyword creates object?",options:["new","class","object","create"],correctAnswerIndex:0},
{questionText:"Switch is used for?",options:["Loop","Decision making","Storage","Inheritance"],correctAnswerIndex:1},
{questionText:"Java is?",options:["Procedure","OOP","Assembly","Hardware"],correctAnswerIndex:1},
{questionText:"Method is?",options:["Variable","Function","Loop","Class"],correctAnswerIndex:1},
{questionText:"Input taken using?",options:["Scanner","Print","Loop","Switch"],correctAnswerIndex:0}
],
 tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/" },
},

{
title:"String Operations",
shortDesc:"Count vowels, replace spaces, uppercase, reverse.",
info:{
aim:"To perform string manipulation.",
theory:"Strings in Java are immutable, meaning their values cannot be changed once created. To perform operations like appending or modifying efficiently, classes like StringBuilder and StringBuffer are used. StringBuilder is faster because it is not synchronized. Common operations include reversing strings, counting vowels, replacing characters, and converting case. These operations are widely used in text processing, validation, and data formatting."
},
demoVideoUrl:"https://youtu.be/1SJK4Y4axXs?si=XcTRheL_mskyRuZl",
quiz:[
{questionText:"Mutable class?",options:["String","StringBuilder","Char","Reader"],correctAnswerIndex:1},
{questionText:"String is?",options:["Mutable","Immutable","Numeric","Static"],correctAnswerIndex:1},
{questionText:"Uppercase method?",options:["toUpperCase()","upper()","caps()","convert()"],correctAnswerIndex:0},
{questionText:"Reverse uses?",options:["Loop","Stack","Builder","All"],correctAnswerIndex:3},
{questionText:"StringBuilder is?",options:["Slow","Fast","Fixed","None"],correctAnswerIndex:1}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"Inheritance in E-commerce",
shortDesc:"Base class product and subclasses.",
info:{
aim:"To demonstrate inheritance.",
theory:"Inheritance is a key feature of Object-Oriented Programming that allows one class (child) to inherit properties and methods from another class (parent). In Java, inheritance is implemented using the 'extends' keyword. It promotes code reuse and hierarchical relationships. Method overriding allows subclasses to provide specific implementations. In e-commerce systems, product classes can be extended to represent different categories."
},
demoVideoUrl:"https://youtu.be/XSuybcFfLx4?si=KsKnGaYXRE2zJoGS",
quiz:[
{questionText:"Keyword for inheritance?",options:["implements","inherits","extends","super"],correctAnswerIndex:2},
{questionText:"Parent class called?",options:["Base","Main","Core","Super"],correctAnswerIndex:0},
{questionText:"Child class?",options:["Derived","Final","Static","Main"],correctAnswerIndex:0},
{questionText:"Override means?",options:["Replace method","Delete method","Add method","Call method"],correctAnswerIndex:0},
{questionText:"Inheritance improves?",options:["Reuse","Speed","Memory","Power"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"Multiple Inheritance via Interfaces",
shortDesc:"Payment gateway using interfaces.",
info:{
aim:"To implement multiple inheritance.",
theory:"Java does not support multiple inheritance through classes to avoid ambiguity, but it allows multiple inheritance through interfaces using the 'implements' keyword. Interfaces define abstract methods that must be implemented by classes. This allows combining behaviors from multiple sources. It is widely used in designing flexible systems like payment gateways."
},
demoVideoUrl:"https://youtu.be/HnaVobvfSyc?si=aG_MZK397cHYwY1S",
quiz:[
{questionText:"Interface keyword?",options:["extends","implements","include","import"],correctAnswerIndex:1},
{questionText:"Interface contains?",options:["Variables","Methods","Abstract methods","Objects"],correctAnswerIndex:2},
{questionText:"Java allows multiple inheritance via?",options:["Class","Interface","Loop","Method"],correctAnswerIndex:1},
{questionText:"Interface methods are?",options:["Private","Protected","Abstract","Static"],correctAnswerIndex:2},
{questionText:"Used for?",options:["Reuse","Inheritance","Abstraction","All"],correctAnswerIndex:3}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"Exception Handling",
shortDesc:"Handle runtime errors.",
info:{
aim:"To handle exceptions.",
theory:"Exception handling in Java is used to manage runtime errors and maintain normal program flow. It uses try, catch, finally, throw, and throws keywords. Custom exceptions can also be defined. This mechanism prevents program crashes and ensures graceful error handling."
},
demoVideoUrl:"https://youtu.be/IZu5rZTN7PI?si=QcOdj3fN2oaSwmm7",
quiz:[
{questionText:"Throw keyword?",options:["catch","throw","throws","try"],correctAnswerIndex:1},
{questionText:"Catch handles?",options:["Compile error","Runtime error","Syntax","Loop"],correctAnswerIndex:1},
{questionText:"Finally executes?",options:["Always","Never","Sometimes","Error"],correctAnswerIndex:0},
{questionText:"Exception is?",options:["Event","Error","Loop","Class"],correctAnswerIndex:1},
{questionText:"Custom exception?",options:["User-defined","System","Static","None"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"Multithreading Synchronization",
shortDesc:"Prevent race conditions.",
info:{
aim:"To implement synchronization.",
theory:"Multithreading allows multiple threads to run concurrently. However, it may lead to race conditions when multiple threads access shared resources. Synchronization ensures only one thread accesses a resource at a time using the 'synchronized' keyword. It improves data consistency."
},
demoVideoUrl:"https://youtu.be/YDH7f9dTXAs?si=hDq86d6L-Rh8vWxV",
quiz:[
{questionText:"Prevent race condition?",options:["sleep","wait","synchronized","run"],correctAnswerIndex:2},
{questionText:"Thread is?",options:["Process","Program","Lightweight process","File"],correctAnswerIndex:2},
{questionText:"Synchronization ensures?",options:["Speed","Safety","Power","Memory"],correctAnswerIndex:1},
{questionText:"Thread method?",options:["run()","start()","both","none"],correctAnswerIndex:2},
{questionText:"Multithreading means?",options:["One task","Many tasks","Single thread","None"],correctAnswerIndex:1}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"GUI Library Management System",
shortDesc:"Swing GUI app.",
info:{
aim:"To build GUI apps.",
theory:"Java Swing is used to create graphical user interfaces. It provides components like JFrame, JButton, JTextField, etc. Event listeners handle user interactions such as clicks. GUI applications improve user experience and usability."
},
demoVideoUrl:"https://www.youtube.com/live/6zm8c6QFmjo?si=v21bgWzz4tA4TKXI",
quiz:[
{questionText:"Swing package?",options:["java.awt","javax.swing","java.ui","java.gui"],correctAnswerIndex:1},
{questionText:"Button class?",options:["JButton","Button","JClick","Btn"],correctAnswerIndex:0},
{questionText:"Frame class?",options:["Frame","JFrame","Window","Panel"],correctAnswerIndex:1},
{questionText:"Event handled by?",options:["Listener","Loop","Method","Class"],correctAnswerIndex:0},
{questionText:"GUI means?",options:["Graphical Interface","General Interface","Graphics UI","None"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"JDBC CRUD Operations",
shortDesc:"Database operations.",
info:{
aim:"To connect Java to DB.",
theory:"JDBC allows Java applications to interact with databases using SQL queries. It uses classes like Connection, Statement, and ResultSet. CRUD operations include Create, Read, Update, Delete. JDBC is widely used in enterprise applications."
},
demoVideoUrl:"https://youtu.be/qjpv3krfE2A?si=6Qn2MgOz0j8d8kdq",
quiz:[
{questionText:"Execute query?",options:["Connection","Statement","Driver","ResultSet"],correctAnswerIndex:1},
{questionText:"CRUD stands for?",options:["Create Read Update Delete","Code Run Update Data","None","All"],correctAnswerIndex:0},
{questionText:"Connection used for?",options:["DB connect","Loop","Thread","UI"],correctAnswerIndex:0},
{questionText:"ResultSet stores?",options:["Data","Code","Error","None"],correctAnswerIndex:0},
{questionText:"SQL used for?",options:["DB","UI","Thread","Loop"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"Servlet & JDBC Registration",
shortDesc:"Handle form data.",
info:{
aim:"To process HTTP requests.",
theory:"Servlets are Java programs that handle client requests and generate responses. They process GET and POST requests. JDBC is used to store data into database. Servlets form backend of web apps."
},
demoVideoUrl:"https://youtu.be/IrQYqnckhFI?si=GJBMBE4xAJoG7W_F",
quiz:[
{questionText:"POST method?",options:["doGet","doPost","service","process"],correctAnswerIndex:1},
{questionText:"Servlet runs on?",options:["Browser","Server","Client","None"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Frontend","Backend","UI","Hardware"],correctAnswerIndex:1},
{questionText:"HTTP means?",options:["Protocol","Code","Data","None"],correctAnswerIndex:0},
{questionText:"Servlet is?",options:["Program","File","Loop","None"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"JSP Booking System",
shortDesc:"JSP based system.",
info:{
aim:"To build JSP app.",
theory:"JSP allows embedding Java code inside HTML. It simplifies dynamic content creation. JSP is compiled into Servlets internally. Used in web apps."
},
demoVideoUrl:"https://youtu.be/7AIjcZMo-V4?si=uQdFe91IOpl7nG9u",
quiz:[
{questionText:"JSP extension?",options:[".java",".html",".jsp",".js"],correctAnswerIndex:2},
{questionText:"JSP converts to?",options:["HTML","Servlet","Code","Loop"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Dynamic pages","Static pages","Hardware","None"],correctAnswerIndex:0},
{questionText:"Runs on?",options:["Server","Client","Both","None"],correctAnswerIndex:0},
{questionText:"JSP stands for?",options:["Java Server Pages","Java Script Page","None","All"],correctAnswerIndex:0}
],
tryYourself: { link: "https://www.programiz.com/java-programming/online-compiler/"},
},

{
title:"MVC Student Portal",
shortDesc:"MVC architecture.",
info:{
aim:"To implement MVC.",
theory:"MVC separates application into Model, View, Controller. Model handles data, View handles UI, Controller handles logic. It improves maintainability."
},
demoVideoUrl:"https://youtu.be/eLS9T9XzGn4?si=Ls1Ygpzvxa73A8u5",
quiz:[
{questionText:"Controller is?",options:["JSP","HTML","Servlet","DB"],correctAnswerIndex:2},
{questionText:"View is?",options:["JSP","Servlet","DB","Code"],correctAnswerIndex:0},
{questionText:"Model is?",options:["Data","UI","Logic","None"],correctAnswerIndex:0},
{questionText:"MVC improves?",options:["Maintainability","Speed","Power","None"],correctAnswerIndex:0},
{questionText:"Used in?",options:["Web apps","Hardware","Circuits","None"],correctAnswerIndex:0}
]
},

{
title:"Mini Project Development",
shortDesc:"Build complete app.",
info:{
aim:"To apply all Java concepts.",
theory:"Mini projects combine OOP, database, GUI/web concepts. It helps apply theory into real-world systems. It improves problem solving and development skills."
},
demoVideoUrl:"https://youtube.com/playlist?list=PLBpH5WxSM4d1hX8CRJw_q838KNCM2DVJZ&si=ywYcX_3THAohjYCj",
quiz:[
{questionText:"Benefit?",options:["Memorize","Real application","Hardware","Short code"],correctAnswerIndex:1},
{questionText:"Uses?",options:["OOP","DB","GUI","All"],correctAnswerIndex:3},
{questionText:"Project improves?",options:["Skill","Speed","Power","None"],correctAnswerIndex:0},
{questionText:"Used for?",options:["Learning","Practice","Both","None"],correctAnswerIndex:2},
{questionText:"Mini project is?",options:["Small app","Large app","None","Hardware"],correctAnswerIndex:0}
]
}

];

module.exports= javaLabs;