const devopsLabs = [

{
title:"Source Code Management (Git/GitHub)",
shortDesc:"Practice version control using Git.",
info:{
aim:"To understand version control and collaborative development using Git and GitHub.",
theory:"Git is a distributed version control system used to track changes in source code and manage different versions of a project efficiently. It allows multiple developers to work on the same codebase simultaneously without conflicts using branching and merging techniques. Git stores snapshots of files, enabling rollback to previous versions. GitHub is a cloud-based platform that hosts Git repositories and provides collaboration features like pull requests, issue tracking, and code reviews. Commands such as git clone, git add, git commit, and git push are commonly used. Version control ensures code integrity, traceability, and team collaboration in modern software development."
},
quiz:[
{questionText:"Which command saves changes locally?",options:["git push","git pull","git commit","git clone"],correctAnswerIndex:2},
{questionText:"Git is?",options:["Centralized","Distributed","Database","Compiler"],correctAnswerIndex:1},
{questionText:"Branch used for?",options:["Delete code","Parallel work","Compile","Run"],correctAnswerIndex:1},
{questionText:"GitHub is?",options:["Tool","Cloud repo","OS","Editor"],correctAnswerIndex:1},
{questionText:"Rollback means?",options:["Delete","Restore version","Push code","Merge"],correctAnswerIndex:1}
]
},

{
title:"Continuous Integration (Jenkins)",
shortDesc:"Install and demonstrate CI using Jenkins.",
info:{
aim:"To automate build and testing using Jenkins.",
theory:"Jenkins is an open-source automation server used for Continuous Integration (CI) and Continuous Delivery (CD). It automatically builds, tests, and deploys applications whenever changes are pushed to a repository. Jenkins uses pipelines to define workflows and integrates with tools like Git, Maven, and Docker. CI helps detect bugs early by running automated tests on every commit. It improves code quality, reduces integration issues, and speeds up development. Jenkins supports plugins that extend its functionality, making it highly customizable for DevOps pipelines."
},
quiz:[
{questionText:"Jenkins used for?",options:["DB","CI/CD","UI","Coding"],correctAnswerIndex:1},
{questionText:"CI means?",options:["Continuous Integration","Code Input","Central Info","None"],correctAnswerIndex:0},
{questionText:"Jenkins automates?",options:["Testing","Building","Deployment","All"],correctAnswerIndex:3},
{questionText:"Pipeline is?",options:["Workflow","Code","File","Loop"],correctAnswerIndex:0},
{questionText:"CI helps?",options:["Debugging","Testing","Quality","All"],correctAnswerIndex:3}
]
},

{
title:"Docker Containerization",
shortDesc:"Develop and deploy containerized application.",
info:{
aim:"To understand containerization and deployment using Docker.",
theory:"Docker is a containerization platform that packages applications along with their dependencies into lightweight containers. Containers share the host OS kernel, making them faster and more efficient than virtual machines. Docker ensures consistency across development, testing, and production environments. Images are used to create containers, and Dockerfiles define how images are built. Kubernetes is often used with Docker to manage and orchestrate containers at scale. Containerization simplifies deployment, improves scalability, and enhances portability."
},
quiz:[
{questionText:"Containers share?",options:["Hardware","Kernel","RAM","Disk"],correctAnswerIndex:1},
{questionText:"Docker uses?",options:["VM","Containers","Files","Code"],correctAnswerIndex:1},
{questionText:"Dockerfile is?",options:["Script","Image","Code","File"],correctAnswerIndex:0},
{questionText:"Kubernetes does?",options:["Store","Orchestrate","Compile","Delete"],correctAnswerIndex:1},
{questionText:"Container is?",options:["Heavy","Lightweight","Slow","None"],correctAnswerIndex:1}
]
},

{
title:"Configuration Management (Ansible)",
shortDesc:"Automate server provisioning using Ansible.",
info:{
aim:"To automate configuration and deployment using Ansible.",
theory:"Ansible is an open-source configuration management and automation tool used to provision servers, deploy applications, and manage infrastructure. It is agentless, meaning no software needs to be installed on target machines. Ansible uses YAML-based playbooks to define automation tasks in a human-readable format. It communicates over SSH and ensures systems are configured consistently. Ansible is widely used in DevOps for infrastructure automation, reducing manual effort and configuration errors."
},
quiz:[
{questionText:"Playbook format?",options:["XML","JSON","YAML","CSV"],correctAnswerIndex:2},
{questionText:"Ansible is?",options:["Agent-based","Agentless","Compiler","OS"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Automation","UI","Database","Coding"],correctAnswerIndex:0},
{questionText:"Communication via?",options:["HTTP","SSH","FTP","TCP"],correctAnswerIndex:1},
{questionText:"YAML is?",options:["Language","Format","OS","Tool"],correctAnswerIndex:1}
]
},

{
title:"System Monitoring",
shortDesc:"Monitor infrastructure using Prometheus and Grafana.",
info:{
aim:"To monitor system performance and visualize metrics.",
theory:"System monitoring is essential for maintaining performance, availability, and reliability of applications. Prometheus is a monitoring tool that collects metrics from systems using a pull-based model. It stores time-series data and provides powerful query capabilities. Grafana is used to visualize this data through dashboards, charts, and alerts. Together, they help detect issues, analyze performance trends, and ensure system health. Monitoring tools are critical in DevOps for proactive issue detection and infrastructure management."
},
quiz:[
{questionText:"Grafana used for?",options:["Code","Visualization","Container","Version"],correctAnswerIndex:1},
{questionText:"Prometheus does?",options:["Store metrics","Run code","Compile","Delete"],correctAnswerIndex:0},
{questionText:"Monitoring helps?",options:["Detect issues","Improve perf","Alert","All"],correctAnswerIndex:3},
{questionText:"Grafana shows?",options:["Charts","Logs","Code","Files"],correctAnswerIndex:0},
{questionText:"Prometheus model?",options:["Push","Pull","Both","None"],correctAnswerIndex:1}
]
}

];

module.exports = devopsLabs;