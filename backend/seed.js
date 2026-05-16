const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject'); 
const Assignment = require('./models/Assignment');

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const dbmsLabs = require('./data/dbmsLabs');
const osLabs = require('./data/osLabs');
const dsaLabs = require('./data/dsaLabs');
const adeLabs = require('./data/edeLabs');
const eceLab1Labs = require('./data/eceLab1Labs');
const javaLabs = require('./data/javaLabs');
const cnLabs = require('./data/cnLabs');
const webLabs = require('./data/webLabs');
const bdaLabs = require('./data/bdaLabs');
const esLabs = require('./data/esLabs');
const daaLabs = require('./data/daaLabs');
const ccLabs = require('./data/ccLabs');
const devopsLabs = require('./data/devopsLabs');

// subjects
const eceSubjects = [
  //2nd year
  {
    name: "Analog and Digital Electronics Lab",
    year: "SE", semester: 3, icon: "⚡", color: "#eab308",
    description: "Design and test continuous-time and discrete-time electronic circuits."
  },
  {
    name: "Principles of Data Structure Lab",
    year: "SE", semester: 3, icon: "📊", color: "#0f766e",
    description: "Implement core algorithms, linked lists, trees, and graphs."
  },
  {
    name: "Operating System Tutorial",
    year: "SE", semester: 3, icon: "💻", color: "#b45309",
    description: "Simulate process scheduling, memory management, and deadlock handling."
  },

  
  {
    name: "Database Management Systems Lab",
    year: "SE", semester: 4, icon: "🗄️", color: "#1d4ed8",
    description: "Master SQL queries, schema design, and relational database concepts."
  },
  {
    name: "Programming Lab",
    year: "SE", semester: 4, icon: "⌨️", color: "#4f46e5",
    description: "Develop strong problem-solving skills using object-oriented programming."
  },
  {
    name: "ECE Lab-I",
    year: "SE", semester: 4, icon: "🔧", color: "#0891b2",
    description: "Hands-on foundation experiments in core electronics and communication."
  },

  //3rd year
  {
    name: "Computer Networks Lab",
    year: "TE", semester: 5, icon: "🌐", color: "#059669",
    description: "Analyze network protocols, packet sniffing, and routing algorithms."
  },
  {
    name: "Database Management Systems Lab", 
    year: "TE", semester: 5, icon: "🗃️", color: "#2563eb",
    description: "Advanced database concepts, indexing, and NoSQL implementations."
  },
  {
    name: "Embedded Systems Lab",
    year: "TE", semester: 5, icon: "🖲️", color: "#dc2626",
    description: "Program microcontrollers and interface with external hardware sensors."
  },
  {
    name: "Web Development Lab",
    year: "TE", semester: 5, icon: "🕸️", color: "#c026d3",
    description: "Build dynamic, responsive web applications using modern tech stacks."
  },
  {
    name: "Big Data Analytics Lab",
    year: "TE", semester: 5, icon: "📈", color: "#ea580c",
    description: "Process and analyze massive datasets using Hadoop and Spark."
  },
  {
    name: "Security and Privacy Lab",
    year: "TE", semester: 5, icon: "🛡️", color: "#475569",
    description: "Explore cryptographic algorithms, system vulnerabilities, and network security."
  },

  
  {
    name: "Theory of Computation Tutorial",
    year: "TE", semester: 6, icon: "🧮", color: "#7c3aed",
    description: "Simulate finite automata, pushdown automata, and Turing machines."
  },
  {
    name: "Design and Analysis of Algorithm Lab",
    year: "TE", semester: 6, icon: "🧩", color: "#0284c7",
    description: "Implement dynamic programming, greedy methods, and backtracking."
  },
  {
    name: "Internet of Things Lab",
    year: "TE", semester: 6, icon: "📡", color: "#16a34a",
    description: "Connect sensors to cloud platforms and analyze real-time IoT data."
  },
  {
    name: "Compiler Construction Lab",
    year: "TE", semester: 6, icon: "⚙️", color: "#9333ea",
    description: "Design lexical analyzers, parsers, and code generation modules."
  },
  {
    name: "Augmented and Virtual Reality Lab",
    year: "TE", semester: 6, icon: "👓", color: "#ec4899",
    description: "Develop immersive 3D environments and interactive AR experiences."
  },
  {
    name: "Development and Operations Lab",
    year: "TE", semester: 6, icon: "♾️", color: "#0f172a",
    description: "Automate CI/CD pipelines using Docker, Kubernetes, and Jenkins."
  },
  {
    name: "Computer Forensic and Data Recovery",
    year: "TE", semester: 6, icon: "🔍", color: "#b91c1c",
    description: "Investigate digital crimes, recover lost files, and analyze system logs."
  },

 //4th year
  {
    name: "Software Testing and Quality Assurance Lab",
    year: "BE", semester: 7, icon: "✅", color: "#10b981",
    description: "Write automated test scripts and validate software performance metrics."
  },
  {
    name: "Cloud Computing Lab",
    year: "BE", semester: 7, icon: "☁️", color: "#3b82f6",
    description: "Deploy scalable applications using AWS, Azure, or Google Cloud services."
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to Database...');

  
    const assignmentCount = await Assignment.countDocuments();
    const subjectCount = await Subject.countDocuments();

    
    if (assignmentCount > 0 && subjectCount > 0) {
      console.log(' Database already has data. Skipping seed script to protect user history!');
      process.exit(); // Shut down the script safely
      return; 
    }

    console.log("Database is empty. Planting seeds...");

    try {
      await Subject.collection.drop();
      await Assignment.collection.drop();
    } catch (e) {
      console.log('Collections did not exist yet or already dropped.');
    }
    console.log(' Cleared old subjects, assignments, and indexes.');

    // 3. Inject all Subjects
    const insertedSubjects = await Subject.insertMany(eceSubjects);
    console.log('Created all Subjects!');


    const dbmsSem4 = insertedSubjects.find(s => s.name === "Database Management Systems Lab" && s.semester === 4);
    const dbmsSem5 = insertedSubjects.find(s => s.name === "Database Management Systems Lab" && s.semester === 5);
    const osSubject = insertedSubjects.find(s => s.name === "Operating System Tutorial");
    const dsaSubject = insertedSubjects.find(s => s.name === "Principles of Data Structure Lab");
    const adeSubject = insertedSubjects.find(s => s.name === "Analog and Digital Electronics Lab");
    const ece1Subject = insertedSubjects.find(s => s.name === "ECE Lab-I");
    const javaSubject = insertedSubjects.find(s => s.name === "Programming Lab");
    
   
    const cnSubject = insertedSubjects.find(s => s.name === "Computer Networks Lab");
    const esSubject = insertedSubjects.find(s => s.name === "Embedded Systems Lab");
    const webSubject = insertedSubjects.find(s => s.name === "Web Development Lab");
    const bdaSubject = insertedSubjects.find(s => s.name === "Big Data Analytics Lab");
    const daaSubject = insertedSubjects.find(s => s.name === "Design and Analysis of Algorithm Lab");
    const ccSubject = insertedSubjects.find(s => s.name === "Compiler Construction Lab");
    const devopsSubject = insertedSubjects.find(s => s.name === "Development and Operations Lab");

    const allAssignments = [
      ...dbmsLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: dbmsSem4._id })),
      ...dbmsLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: dbmsSem5._id })),
      ...osLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: osSubject._id })),
      ...dsaLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: dsaSubject._id })),
      ...adeLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: adeSubject._id })),
      ...eceLab1Labs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: ece1Subject._id })),
      ...javaLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: javaSubject._id })),
      
   
      ...cnLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: cnSubject._id })),
      ...esLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: esSubject._id })),
      ...webLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: webSubject._id })),
      ...bdaLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: bdaSubject._id })),
      ...daaLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: daaSubject._id })),
      ...ccLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: ccSubject._id })),
      ...devopsLabs.map((lab, i) => ({ ...lab, assignmentId: i+1, subjectId: devopsSubject._id }))
    ];

    const subjectFolders = {
      "Database Management Systems Lab": "https://drive.google.com/drive/folders/1iBYSg_obCsQV6Kgz89Z2xygs1mo9boE6?usp=drive_link",
      "Operating System Tutorial": "https://drive.google.com/drive/folders/1eD4ieh-RZk9sxMgO4AMAgYISMi-QxcH_?usp=drive_link",
      "Principles of Data Structure Lab": "https://drive.google.com/drive/folders/1vS2nPFPzyU-IwfmFMXwxouIqZxXlHA41?usp=sharing",
      "Analog and Digital Electronics Lab": "https://drive.google.com/drive/folders/1VG8id-T2nQhZdlfXpC9EI3Stl0OTCC1I?usp=drive_link",
      "ECE Lab-I": "https://drive.google.com/drive/folders/1fkaZZYM97alnyThpDW7K83yOymnWhFMQ?usp=drive_link",
      "Programming Lab": "https://drive.google.com/drive/folders/1yTYCDWv_pFuj_5lxYUol6zkTl5vU_kQh?usp=sharing",
      "Computer Networks Lab": "https://drive.google.com/drive/folders/1civxSVSI-M9mVVZP91D9Lrkdi7f0Ii_X?usp=sharing",
      "Web Development Lab": "https://drive.google.com/drive/folders/1hHDTL22VDJV2dvv67a_VKEj8lPubLuOp?usp=sharing",
      "Big Data Analytics Lab": "https://drive.google.com/drive/folders/1WaoU_0PlxX4ZvLr2avGBmjLaVXkHsSQ5?usp=sharing",
    };

    allAssignments.forEach(lab => {
        const subject = insertedSubjects.find(s => s._id.equals(lab.subjectId));
        
        if (subject && subjectFolders[subject.name]) {
            if (!lab.references) {
                lab.references = []; 
            }
            
            lab.references.push({
                title: `📚 Open ${subject.name} Reference Books)`,
                url: subjectFolders[subject.name]
            });
        }
    });
  
    // 6. Blast them all into the database at once
    await Assignment.insertMany(allAssignments);
    console.log(`Injected ${allAssignments.length} Total Labs across SE and TE years!`);

    console.log('MASTER HIERARCHY SEED COMPLETE!');
    process.exit();
  })
  .catch((err) => {
    console.error(' Error seeding data:', err);
    process.exit(1);
  });