const bdaLabs = [

{
title:"Hadoop File Management",
shortDesc:"Install Hadoop and manage files.",
info:{
aim:"To perform file operations in Hadoop HDFS.",
theory:"Hadoop Distributed File System (HDFS) is designed to store large datasets across multiple machines in a distributed manner. It splits files into blocks and distributes them across cluster nodes with replication for fault tolerance. HDFS follows a master-slave architecture with NameNode managing metadata and DataNodes storing actual data. File operations such as upload, download, delete, and directory management are performed using commands similar to Linux. HDFS ensures high availability, scalability, and reliability for big data applications."
},
demoVideoUrl:"https://youtu.be/GXpTLrLeb-8?si=2_Ht6mdww0QSf-cP",
quiz:[
{questionText:"Storage component?",options:["YARN","MapReduce","HDFS","Hive"],correctAnswerIndex:2},
{questionText:"Master node?",options:["DataNode","NameNode","YARN","Mapper"],correctAnswerIndex:1},
{questionText:"Data stored in?",options:["RAM","DataNode","CPU","Cache"],correctAnswerIndex:1},
{questionText:"Replication provides?",options:["Speed","Fault tolerance","Power","Security"],correctAnswerIndex:1},
{questionText:"Command for upload?",options:["put","get","ls","rm"],correctAnswerIndex:0}
]
},

{
title:"MapReduce Matrix Multiplication",
shortDesc:"Matrix multiplication using MapReduce.",
info:{
aim:"To implement matrix multiplication using MapReduce.",
theory:"MapReduce is a programming model used for processing large datasets in parallel across distributed systems. In matrix multiplication, the Map phase generates intermediate key-value pairs representing matrix indices and values. These are shuffled and grouped before being passed to the Reduce phase. The Reduce function performs the dot product to compute final matrix values. This approach enables efficient computation of large-scale data problems by distributing tasks across multiple nodes."
},
demoVideoUrl:"https://youtu.be/OzGQAQLf22c?si=M3MJxR6tURaaGWbE",
quiz:[
{questionText:"Map output?",options:["Database","Key-Value","HTML","Integer"],correctAnswerIndex:1},
{questionText:"Reduce does?",options:["Store","Compute","Delete","Display"],correctAnswerIndex:1},
{questionText:"MapReduce is?",options:["Sequential","Parallel","Static","Manual"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Big data","UI","Hardware","Gaming"],correctAnswerIndex:0},
{questionText:"Intermediate data?",options:["Raw","Key-value","Sorted","None"],correctAnswerIndex:1}
]
},

{
title:"Data Mining with MapReduce",
shortDesc:"Analyze weather and movie data.",
info:{
aim:"To extract patterns from large datasets.",
theory:"Data mining involves analyzing large datasets to discover patterns, trends, and useful information. Using MapReduce, large unstructured datasets such as logs or CSV files are processed in parallel. The Map phase filters and categorizes data, while the Reduce phase aggregates results. This technique is widely used in weather forecasting, recommendation systems, and business analytics. It helps organizations make data-driven decisions efficiently."
},
demoVideoUrl:"https://youtu.be/pcTFiU7wKkQ?si=Ka4Nr521mioJxwHs",
quiz:[
{questionText:"Goal of data mining?",options:["Encrypt","Find patterns","Delete","Backup"],correctAnswerIndex:1},
{questionText:"Used on?",options:["Small data","Big data","Code","Hardware"],correctAnswerIndex:1},
{questionText:"Map phase?",options:["Aggregate","Filter","Delete","Store"],correctAnswerIndex:1},
{questionText:"Reduce phase?",options:["Combine","Delete","Display","Stop"],correctAnswerIndex:0},
{questionText:"Used in?",options:["Weather","Movies","Business","All"],correctAnswerIndex:3}
]
},

{
title:"MongoDB Aggregation",
shortDesc:"Aggregation and pagination.",
info:{
aim:"To process and analyze data using MongoDB.",
theory:"MongoDB is a NoSQL database that stores data in BSON (Binary JSON) format. The Aggregation Pipeline is used to process documents in stages, allowing filtering, grouping, sorting, and transformation of data. Operators like $match, $group, $sort, $limit, and $skip are used. Pagination is achieved using $limit and $skip. MongoDB is widely used for scalable web applications due to its flexibility and performance."
},
demoVideoUrl:"https://youtu.be/fDTf1mk-jQg?si=l_tNcFWorIQnU0U3",
quiz:[
{questionText:"Pagination uses?",options:["$group","$match","$limit & $skip","$sort"],correctAnswerIndex:2},
{questionText:"MongoDB stores?",options:["Tables","Documents","Files","Code"],correctAnswerIndex:1},
{questionText:"Format?",options:["XML","CSV","BSON","SQL"],correctAnswerIndex:2},
{questionText:"Aggregation is?",options:["Processing","Deleting","Storing","Coding"],correctAnswerIndex:0},
{questionText:"$group does?",options:["Sort","Group","Delete","Insert"],correctAnswerIndex:1}
]
},

{
title:"Hive Database Operations",
shortDesc:"SQL-like operations on big data.",
info:{
aim:"To perform database operations using Hive.",
theory:"Apache Hive is a data warehouse system built on top of Hadoop that allows querying and managing large datasets using a SQL-like language called HiveQL. It converts queries into MapReduce jobs for execution. Hive supports operations like creating, altering, and deleting databases and tables. It is used for batch processing and analytics rather than real-time processing. Hive simplifies big data analysis for users familiar with SQL."
},
demoVideoUrl:"https://www.youtube.com/live/qlNYipeBRCg?si=E2lQOetPACTO6yJh",
quiz:[
{questionText:"Hive query language?",options:["Java","Python","HiveQL","C++"],correctAnswerIndex:2},
{questionText:"Hive runs on?",options:["Linux","Hadoop","Windows","Cloud"],correctAnswerIndex:1},
{questionText:"Hive converts to?",options:["Code","MapReduce","HTML","Script"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Real-time","Batch","Gaming","Hardware"],correctAnswerIndex:1},
{questionText:"Hive is?",options:["DB","Warehouse","OS","App"],correctAnswerIndex:1}
]
}

];
module.exports = bdaLabs;