const webLabs = [

{
title:"HTML Forms & CSS Portfolio",
shortDesc:"Event registration form and responsive portfolio.",
info:{
aim:"To design responsive web pages using HTML and CSS.",
theory:"HTML (HyperText Markup Language) is used to structure web pages using elements like forms, inputs, tables, and semantic tags. CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, spacing, and responsiveness. Modern CSS techniques like Flexbox and Grid allow developers to create responsive designs that adapt to different screen sizes. Forms are used to collect user input, while CSS ensures better user experience and aesthetics. Responsive design is essential for compatibility across devices such as mobiles, tablets, and desktops."
},
demoVideoUrl:"https://youtu.be/oFnIe-RpkE4?si=UT6a7PnwvmU5MRgJ",

quiz:[
{questionText:"Best CSS for 2D layout?",options:["Floats","CSS Grid","Tables","Inline"],correctAnswerIndex:1},
{questionText:"HTML is used for?",options:["Styling","Structure","Database","Server"],correctAnswerIndex:1},
{questionText:"CSS used for?",options:["Logic","Styling","Database","Networking"],correctAnswerIndex:1},
{questionText:"Flexbox is used for?",options:["1D layout","2D layout","Database","Logic"],correctAnswerIndex:0},
{questionText:"Responsive design means?",options:["Fixed size","Adaptive layout","Static UI","None"],correctAnswerIndex:1}
]
},

{
title:"ReactJS To-Do List",
shortDesc:"Design a To-Do list application.",
info:{
aim:"To build a dynamic To-Do application using ReactJS.",
theory:"ReactJS is a JavaScript library used for building user interfaces using components. It uses a virtual DOM to improve performance by updating only necessary parts of the UI. State management is handled using hooks such as useState, which allows components to maintain dynamic data. Event handling is used to add, delete, and update tasks in the To-Do list. React promotes reusable components and efficient UI updates, making it widely used for modern web applications."
},
demoVideoUrl:"https://youtu.be/SBuZSalHLe0?si=rVJTsrwNqQW9wc2a",
quiz:[
{questionText:"State hook?",options:["useEffect","useState","useContext","useReducer"],correctAnswerIndex:1},
{questionText:"React uses?",options:["DOM","Virtual DOM","Static DOM","None"],correctAnswerIndex:1},
{questionText:"Component is?",options:["Function","Class","UI block","All"],correctAnswerIndex:3},
{questionText:"Used for?",options:["Backend","UI","Hardware","Network"],correctAnswerIndex:1},
{questionText:"React is?",options:["Language","Library","OS","Database"],correctAnswerIndex:1}
],
tryYourself: { link: "https://github.com/bhavsarrenuka26/iTask-Todo" },
},

{
title:"Fitness Tracking CRUD (NoSQL)",
shortDesc:"CRUD operations using MongoDB.",
info:{
aim:"To implement CRUD operations using NoSQL database.",
theory:"NoSQL databases like MongoDB store data in flexible, JSON-like documents instead of tables. MongoDB uses BSON (Binary JSON) format for efficient storage and retrieval. CRUD operations include Create, Read, Update, and Delete. NoSQL databases are schema-less, allowing faster development and scalability. They are widely used in web applications for handling large volumes of unstructured data. Integration with backend frameworks allows dynamic data handling."
},
demoVideoUrl:"https://www.youtube.com/live/uFWJoEy_O5w?si=V0VtZNHjfR-U3iDu",
quiz:[
{questionText:"MongoDB uses?",options:["XML","CSV","BSON","Tables"],correctAnswerIndex:2},
{questionText:"CRUD means?",options:["Create Read Update Delete","Code Run Update Data","None","All"],correctAnswerIndex:0},
{questionText:"NoSQL is?",options:["Structured","Unstructured","Static","None"],correctAnswerIndex:1},
{questionText:"MongoDB stores?",options:["Tables","Documents","Files","Code"],correctAnswerIndex:1},
{questionText:"Used in?",options:["Web apps","Hardware","Circuits","None"],correctAnswerIndex:0}
]
},

{
title:"Progressive Web App (PWA)",
shortDesc:"Convert weather app into PWA.",
info:{
aim:"To develop a Progressive Web App with offline support.",
theory:"Progressive Web Apps (PWAs) are web applications that provide features similar to native mobile apps. They use Service Workers to cache resources and enable offline functionality. The Web App Manifest allows installation on mobile devices. PWAs improve performance, reliability, and user engagement. They work across platforms and require no app store installation. This experiment demonstrates modern web development techniques for building fast and reliable applications."
},
demoVideoUrl:"https://youtu.be/mTqGIL8XamU?si=6vLRIkXsU5TI_kXx",
quiz:[
{questionText:"Offline feature uses?",options:["Cookies","Service Workers","PHP","WebSockets"],correctAnswerIndex:1},
{questionText:"PWA stands for?",options:["Progressive Web App","Power Web App","Program Web App","None"],correctAnswerIndex:0},
{questionText:"Manifest used for?",options:["Storage","Installation","Coding","Networking"],correctAnswerIndex:1},
{questionText:"PWA works on?",options:["Mobile only","Web only","All platforms","None"],correctAnswerIndex:2},
{questionText:"PWA advantage?",options:["Offline","Fast","Reliable","All"],correctAnswerIndex:3}
]
}

];
module.exports=webLabs;