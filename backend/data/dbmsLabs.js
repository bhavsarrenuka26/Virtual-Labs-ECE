const dbmsLabs = [
  {
    assignmentId: 1, title: "SQL DDL & Objects", shortDesc: "Understand Data Definition Language commands to create, alter, and drop objects.",
    info: { 
      aim: "To design a database schema and implement Data Definition Language (DDL) commands...", 
      theory: "Data Definition Language (DDL) is used to define and manage database structures. Key commands include CREATE (build tables/views), ALTER (modify structures), DROP (delete structures), and TRUNCATE (clear all records while keeping the structure). \n\nExample:\nCREATE TABLE Students (\n  RollNo INT PRIMARY KEY,\n  Name VARCHAR(50) NOT NULL,\n  Branch VARCHAR(10)\n);\n\nALTER TABLE Students ADD Email VARCHAR(100);" 
    },
    demoVideoUrl: "https://youtu.be/IURos_hCAG8?si=9WgbNcCygD-r2mp9",
    quiz: [
      { questionText: "Which DDL command is used to remove all rows from a table while keeping the table structure?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correctAnswerIndex: 2 },
      { questionText: "Which constraint is used to uniquely identify each row in a database table?", options: ["UNIQUE", "NOT NULL", "FOREIGN KEY", "PRIMARY KEY"], correctAnswerIndex: 3 },
      { questionText: "Which SQL command is used to add a new column to an existing database table?", options: ["MODIFY TABLE", "ALTER TABLE", "UPDATE TABLE", "CHANGE TABLE"], correctAnswerIndex: 1 },
      { questionText: "What is the primary difference between the DROP and TRUNCATE commands?", options: ["DROP deletes the table structure, TRUNCATE only clears the data.", "TRUNCATE deletes the table structure, DROP only clears the data.", "DROP is a DML command, TRUNCATE is a DDL command.", "There is no difference, they do the exact same thing."], correctAnswerIndex: 0 },
      { questionText: "Which of the following commands is NOT considered a Data Definition Language (DDL) command?", options: ["CREATE", "ALTER", "UPDATE", "DROP"], correctAnswerIndex: 2 }
    ],
    tryYourself: { link: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_create_table" },
    references: [{ title: "W3Schools - SQL DDL", url: "https://www.w3schools.com/sql/" }],
    labManualLink: "https://drive.google.com/file/d/1rf_E1c6JL0wJ2y9TD5JHMHDETAZ5Y0gP/view?usp=drivesdk"
  },
  {
    assignmentId: 2, title: "SQL DML Operations", shortDesc: "Master Data Manipulation Language (DML) commands like INSERT, UPDATE, and DELETE.",
    info: { 
      aim: "To populate database tables and manipulate existing data using SQL DML commands.", 
      theory: "Data Manipulation Language (DML) is used to add, modify, and delete data within existing tables. The core commands are INSERT, UPDATE, and DELETE. It is critical to use a WHERE clause with UPDATE and DELETE to prevent modifying the entire table.\n\nExample:\n-- Adding data\nINSERT INTO Students (RollNo, Name) VALUES (101, 'Rahul');\n\n-- Updating data\nUPDATE Students SET Branch = 'ECE' WHERE RollNo = 101;\n\n-- Deleting data\nDELETE FROM Students WHERE RollNo = 101;" 
    },
    demoVideoUrl: "https://youtu.be/rf3cduPAkVc?si=hB3RphzAx7UNFTIP",
    quiz: [
      { questionText: "Which command is used to add new rows to a database table?", options: ["ADD", "APPEND", "INSERT", "CREATE"], correctAnswerIndex: 2 },
      { questionText: "What is the most important clause to include when using the UPDATE command to prevent modifying all records?", options: ["SET", "WHERE", "FROM", "INTO"], correctAnswerIndex: 1 },
      { questionText: "If you run 'DELETE FROM Students;' without a WHERE clause, what happens?", options: ["It deletes the first row.", "It throws an error.", "It deletes the entire table structure.", "It deletes all rows in the table."], correctAnswerIndex: 3 },
      { questionText: "Which command is used to retrieve and view data from a table?", options: ["FETCH", "SELECT", "GET", "SHOW"], correctAnswerIndex: 1 },
      { questionText: "Which statement correctly changes the age of a student with RollNo 5?", options: ["UPDATE Students SET Age = 22 WHERE RollNo = 5;", "MODIFY Students SET Age = 22 WHERE RollNo = 5;", "CHANGE Students Age = 22 WHERE RollNo = 5;", "ALTER Students Age = 22 WHERE RollNo = 5;"], correctAnswerIndex: 0 }
    ],
    tryYourself: { link: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_update" },
    references: [{ title: "W3Schools - SQL UPDATE", url: "https://www.w3schools.com/sql/sql_update.asp" }],
    labManualLink: "https://drive.google.com/file/d/1PSXRy26iixbPT6DA_mLarqqTn_qjTdTD/view?usp=drivesdk"
  },
  {
    assignmentId: 3, title: "Joins & Sub-queries", shortDesc: "Learn to retrieve data from multiple tables simultaneously.",
    info: { 
      aim: "To fetch related data across normalized tables using JOIN operations and nested queries.", 
      theory: "JOINs combine rows from two or more tables based on a related column. Sub-queries are queries nested inside another query (like inside a WHERE clause) to further filter data dynamically.\n\nExample (INNER JOIN):\nSELECT Students.Name, Grades.Score \nFROM Students \nINNER JOIN Grades ON Students.RollNo = Grades.RollNo;\n\nExample (Sub-query):\nSELECT Name FROM Students \nWHERE RollNo IN (SELECT RollNo FROM Grades WHERE Score > 90);" 
    },
    demoVideoUrl: "https://youtu.be/nJIEIzF7tDw?si=u5Uy6-Hc-aIBosQ2",
    quiz: [
      { questionText: "Which JOIN returns only the rows that have a match in both tables?", options: ["LEFT JOIN", "INNER JOIN", "OUTER JOIN", "CROSS JOIN"], correctAnswerIndex: 1 },
      { questionText: "If you want all records from the 'Customers' table, even if they haven't placed an 'Order', which join should you use?", options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL JOIN"], correctAnswerIndex: 2 },
      { questionText: "A sub-query is typically enclosed in what type of characters?", options: ["Square brackets [ ]", "Curly braces { }", "Quotation marks ' '", "Parentheses ( )"], correctAnswerIndex: 3 },
      { questionText: "What happens in a FULL OUTER JOIN if there is no match for a row?", options: ["The row is dropped.", "The query throws an error.", "NULL values are filled in for the missing data.", "The database crashes."], correctAnswerIndex: 2 },
      { questionText: "Can a sub-query be placed inside an INSERT, UPDATE, or DELETE statement?", options: ["Yes, sub-queries can be used in DML statements.", "No, sub-queries only work with SELECT statements.", "Only inside UPDATE statements.", "Only in Oracle databases."], correctAnswerIndex: 0 }
    ],
    tryYourself: { link: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_join_inner" },
    references: [{ title: "W3Schools - SQL Joins", url: "https://www.w3schools.com/sql/sql_join.asp" }],
    labManualLink : "https://drive.google.com/file/d/1WiawImmEcKdanmYIXY_v0KDntLL4vrUo/view?usp=drivesdk"
  },
  {
    assignmentId: 4, title: "Stored Procedure", shortDesc: "Write reusable SQL code blocks that can be saved and called multiple times.",
    info: { 
      aim: "To encapsulate complex SQL business logic into reusable, secure stored procedures.", 
      theory: "A stored procedure is prepared SQL code saved on the database server. It promotes code reusability, improves performance (as it is pre-compiled), and enhances security by preventing SQL injection. They can accept IN parameters and return OUT parameters.\n\nExample:\nCREATE PROCEDURE GetStudentByBranch (IN dept VARCHAR(10))\nBEGIN\n  SELECT * FROM Students WHERE Branch = dept;\nEND;\n\n-- To execute it:\nCALL GetStudentByBranch('ECE');" 
    },
    demoVideoUrl: "https://youtu.be/yLR1w4tZ36I?si=KTdLoH2oHgjBHyTH",
    quiz: [
      { questionText: "What is the main advantage of a Stored Procedure?", options: ["It uses less hard drive space.", "Code reusability, security, and performance.", "It allows you to write SQL in Python.", "It automatically backs up the database."], correctAnswerIndex: 1 },
      { questionText: "Which keyword is used to execute a stored procedure in SQL Server or MySQL?", options: ["RUN", "START", "CALL or EXEC", "PLAY"], correctAnswerIndex: 2 },
      { questionText: "Can a stored procedure accept input parameters?", options: ["Yes, using the IN keyword.", "No, they only execute static queries.", "Only integer values.", "Only if it is a DDL procedure."], correctAnswerIndex: 0 },
      { questionText: "How do stored procedures help improve database security?", options: ["They encrypt the entire database.", "They prevent users from logging in.", "They help prevent SQL injection and abstract table access.", "They hide the IP address of the server."], correctAnswerIndex: 2 },
      { questionText: "Are stored procedures pre-compiled by the database engine?", options: ["No, they are compiled line-by-line every time.", "Yes, which makes subsequent executions faster.", "Only on weekends.", "Only if they contain no JOINs."], correctAnswerIndex: 1 }
    ],
    tryYourself: { link: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_create_procedure" },
    references: [{ title: "SQL Stored Procedures", url: "https://www.w3schools.com/sql/sql_stored_procedures.asp" }],
    labManualLink :"https://drive.google.com/file/d/1vbp644_wtubU9DF-WZ1j-H5olJ0v7d8u/view?usp=drivesdk"
  },
  {
    assignmentId: 5, title: "PL/SQL Cursors", shortDesc: "Handle multi-row result sets by processing them one row at a time.",
    info: { 
      aim: "To use explicit and implicit cursors for row-by-row processing in PL/SQL blocks.", 
      theory: "A cursor is a pointer to the context area in memory where a SQL statement is processed. While standard SQL operates on sets of data, explicit cursors allow PL/SQL to process data row-by-row. The lifecycle includes DECLARE, OPEN, FETCH, and CLOSE.\n\nExample:\nDECLARE \n  CURSOR student_cursor IS SELECT Name FROM Students;\n  v_name VARCHAR2(50);\nBEGIN\n  OPEN student_cursor;\n  LOOP\n    FETCH student_cursor INTO v_name;\n    EXIT WHEN student_cursor%NOTFOUND;\n    DBMS_OUTPUT.PUT_LINE(v_name);\n  END LOOP;\n  CLOSE student_cursor;\nEND;" 
    },
    demoVideoUrl: "https://youtu.be/2ege5FiH6Go?si=RhqyJ3p39yV3qE0z",
    quiz: [
      { questionText: "Which type of cursor is automatically generated by the database for DML operations?", options: ["Explicit Cursor", "Dynamic Cursor", "Implicit Cursor", "Static Cursor"], correctAnswerIndex: 2 },
      { questionText: "Which of the following is NOT a valid step in managing an Explicit Cursor?", options: ["DECLARE", "OPEN", "FETCH", "EXECUTE"], correctAnswerIndex: 3 },
      { questionText: "What happens during the FETCH phase of cursor execution?", options: ["The query is compiled.", "The active set of data is cleared.", "Data is retrieved row-by-row into variables.", "The cursor memory is released."], correctAnswerIndex: 2 },
      { questionText: "Which cursor attribute returns TRUE if the last FETCH successfully returned a row?", options: ["%ISOPEN", "%FOUND", "%NOTFOUND", "%ROWCOUNT"], correctAnswerIndex: 1 },
      { questionText: "Why must you explicitly CLOSE a cursor when you are done?", options: ["To prevent the database from deleting the table.", "To save the data permanently.", "To release allocated system memory resources.", "To trigger an automatic backup."], correctAnswerIndex: 2 }
    ],
    tryYourself: { link: "https://livesql.oracle.com/" },
    references: [{ title: "Oracle PL/SQL Cursors", url: "https://www.oracletutorial.com/plsql-tutorial/plsql-cursor/" }],
    labManualLink:"https://drive.google.com/file/d/1t1usn8zm5fphvwmnR5XgrDxYiQbSnH0-/view?usp=drivesdk"
  },
  {
    assignmentId: 6, title: "Database Trigger", shortDesc: "Create automated actions that run before or after database changes.",
    info: { 
      aim: "To implement database triggers for automated auditing, logging, and data validation.", 
      theory: "A trigger is a stored procedure that automatically 'fires' in response to an INSERT, UPDATE, or DELETE event. They are used for enforcing business rules, data validation, and creating audit logs. You can reference data states using the OLD and NEW keywords.\n\nExample:\nCREATE TRIGGER Before_Student_Update \nBEFORE UPDATE ON Students \nFOR EACH ROW \nBEGIN \n  IF NEW.Score < 0 THEN \n    SET NEW.Score = 0; -- Prevents negative scores\n  END IF; \nEND;" 
    },
    demoVideoUrl: "https://youtu.be/DiqT1qljaO8?si=yPNXpWHsS01TFtHD",
    quiz: [
      { questionText: "When does a database trigger execute?", options: ["When explicitly called by a user.", "Automatically on a specified database event (like INSERT).", "Only when the server boots up.", "Every night at midnight."], correctAnswerIndex: 1 },
      { questionText: "If you want to validate data and potentially reject it before it is saved, which timing should you use?", options: ["AFTER trigger", "INSTEAD OF trigger", "BEFORE trigger", "DURING trigger"], correctAnswerIndex: 2 },
      { questionText: "Which keyword allows you to reference the incoming data during an UPDATE trigger?", options: ["OLD", "NEW", "CURRENT", "UPCOMING"], correctAnswerIndex: 1 },
      { questionText: "Can a trigger be set to fire on a SELECT statement?", options: ["Yes, always.", "No, triggers generally only fire on DML changes (INSERT/UPDATE/DELETE).", "Only in MySQL.", "Only if the user is an admin."], correctAnswerIndex: 1 },
      { questionText: "What is a common use case for an AFTER trigger?", options: ["Preventing a record from being inserted.", "Formatting text before saving it.", "Writing an entry to an audit log table confirming a change.", "Speeding up SELECT queries."], correctAnswerIndex: 2 }
    ],
    tryYourself: { link: "https://livesql.oracle.com/" },
    references: [{ title: "SQL Server Triggers", url: "https://www.sqlservertutorial.net/sql-server-triggers/" }],
    labManualLink:"https://drive.google.com/file/d/1NCF4y9iYZjbOn_SpEUjoEHCAMEq2F6z0/view?usp=drivesdk"
  },
  {
    assignmentId: 7, title: "MongoDB CRUD", shortDesc: "Dive into NoSQL by performing Create, Read, Update, and Delete operations in MongoDB.",
    info: { 
      aim: "To understand document-oriented databases and execute basic NoSQL CRUD operations using BSON.", 
      theory: "MongoDB is a schema-less NoSQL database that stores data in JSON-like Documents within Collections, rather than rows and tables. CRUD operations are performed using native JavaScript methods.\n\nExample:\n// Create\ndb.students.insertOne({ name: \"Renuka\", branch: \"ECE\", year: \"TE\" });\n\n// Read\ndb.students.find({ branch: \"ECE\" });\n\n// Update (Notice the $set operator)\ndb.students.updateOne({ name: \"Renuka\" }, { $set: { year: \"BE\" } });\n\n// Delete\ndb.students.deleteOne({ name: \"Renuka\" });" 
    },
    demoVideoUrl: "https://youtu.be/9Om0FMBz1yU?si=8YhtgR4pY9GFGBTy",
    quiz: [
      { questionText: "In MongoDB terminology, what is the equivalent of a SQL 'Table'?", options: ["Document", "Cluster", "Collection", "Node"], correctAnswerIndex: 2 },
      { questionText: "Which underlying format does MongoDB use to store data efficiently?", options: ["BSON (Binary JSON)", "XML", "CSV", "Raw Text"], correctAnswerIndex: 0 },
      { questionText: "Which command is used to retrieve all documents in a collection?", options: ["db.collection.getAll()", "db.collection.find()", "db.collection.select()", "db.collection.read()"], correctAnswerIndex: 1 },
      { questionText: "When updating a document, which operator is required to change a specific field's value?", options: ["$change", "$modify", "$update", "$set"], correctAnswerIndex: 3 },
      { questionText: "Does MongoDB enforce a rigid schema for its collections by default?", options: ["Yes, every document must have the exact same fields.", "No, documents in the same collection can have completely different structures.", "Only for the first 100 documents.", "Yes, but only if you use integer values."], correctAnswerIndex: 1 }
    ],
    tryYourself: { link: "https://mongoplayground.net/" },
    references: [{ title: "MongoDB CRUD Docs", url: "https://www.mongodb.com/docs/manual/crud/" }],
    labManualLink:"https://drive.google.com/file/d/10hjJs_NIXQSYnZdBUewITIeciVERVq1w/view?usp=drivesdk"
  },
  {
    assignmentId: 8, title: "MongoDB Aggregation", shortDesc: "Process multiple documents and return computed results using aggregation pipelines.",
    info: { 
      aim: "To perform complex data analysis and transformations using MongoDB's aggregation framework.", 
      theory: "The Aggregation Pipeline passes documents through a multi-stage process to filter, group, and transform data. Key stages include $match (filters data like a WHERE clause), $group (aggregates data by a key), and $project (formats the output).\n\nExample: Finding total sales per city.\ndb.orders.aggregate([\n  { $match: { status: \"Delivered\" } },  // Stage 1: Filter\n  { $group: { \n      _id: \"$city\", \n      totalSales: { $sum: \"$amount\" } \n  }}  // Stage 2: Group & Sum\n]);" 
    },
    demoVideoUrl: "https://youtu.be/fDTf1mk-jQg?si=yTKlSOD6Q_RjaSF4",
    quiz: [
      { questionText: "Which aggregation pipeline stage acts similarly to the SQL WHERE clause?", options: ["$group", "$project", "$match", "$sort"], correctAnswerIndex: 2 },
      { questionText: "If you want to calculate the total sales for different store locations, which stage is essential?", options: ["$group", "$limit", "$skip", "$unwind"], correctAnswerIndex: 0 },
      { questionText: "What does the $project stage do?", options: ["Projects data onto a 3D graph.", "Saves the query as a new project.", "Includes, excludes, or reshapes fields in the returned documents.", "Connects to an external SQL database."], correctAnswerIndex: 2 },
      { questionText: "Can an aggregation pipeline contain multiple $match stages?", options: ["No, only one is allowed.", "Yes, you can have as many stages as needed in any order.", "Only if they are at the very end.", "Only in MongoDB Enterprise edition."], correctAnswerIndex: 1 },
      { questionText: "Which operator would you use inside a $group stage to count the number of documents?", options: ["$sum: 1", "$add: 1", "$countAll", "$tally"], correctAnswerIndex: 0 }
    ],
    tryYourself: { link: "https://mongoplayground.net/" },
    references: [{ title: "MongoDB Aggregation", url: "https://www.mongodb.com/docs/manual/aggregation/" }],
    labManualLink:"https://drive.google.com/file/d/1oezF3QOn5SnYKlshgY7f6d01Nh8_OciB/view?usp=drivesdk"
  },
  {
    assignmentId: 9, title: "MongoDB Map-Reduce", shortDesc: "Learn the classic big-data processing paradigm for condensing large volumes of data.",
    info: { 
      aim: "To process massive datasets and aggregate results using the classic Map-Reduce programming logic.", 
      theory: "Map-Reduce is a legacy data processing paradigm where a 'Map' function emits key-value pairs, and a 'Reduce' function aggregates those values. Though largely replaced by the Aggregation Pipeline in modern MongoDB, it remains a foundational big-data concept.\n\nExample:\nvar mapFunc = function() { \n   emit(this.department, this.salary); \n};\nvar reduceFunc = function(keyDept, valuesSalaries) {\n   return Array.sum(valuesSalaries);\n};\ndb.employees.mapReduce(mapFunc, reduceFunc, { out: \"dept_totals\" });" 
    },
   demoVideoUrl: "https://youtu.be/T3393e-fHY0?si=bBSyjiH9rqK290-I",
    quiz: [
      { questionText: "What are the two primary phases in the Map-Reduce paradigm?", options: ["Find and Sort", "Map and Reduce", "Group and Match", "Insert and Delete"], correctAnswerIndex: 1 },
      { questionText: "In the Map phase, what specific action does the function take to output data?", options: ["It Returns the data.", "It Emits key-value pairs.", "It Prints to the console.", "It Saves to a new file."], correctAnswerIndex: 1 },
      { questionText: "What language are Map and Reduce functions traditionally written in for MongoDB?", options: ["Python", "Java", "JavaScript", "C#"], correctAnswerIndex: 2 },
      { questionText: "What does the Reduce function do?", options: ["Deletes old data to save space.", "Combines values that share the same key into a single result.", "Reduces the security permissions of a user.", "Compresses the database file."], correctAnswerIndex: 1 },
      { questionText: "Is Map-Reduce the recommended way to aggregate data in modern MongoDB (v5.0+)?", options: ["Yes, it is the fastest method.", "No, it is deprecated in favor of the Aggregation Pipeline.", "Yes, but only for numerical data.", "No, SQL is now used instead."], correctAnswerIndex: 1 }
    ],
    tryYourself: { link: "https://mongoplayground.net/" },
    references: [{ title: "MongoDB Map-Reduce", url: "https://www.mongodb.com/docs/manual/core/map-reduce/" }],
    labManualLink:"https://drive.google.com/file/d/1iazzW7ub7R_YT3NOMUvmp5cXeYZzvoML/view?usp=drivesdk"
  }
];
module.exports = dbmsLabs;