const cnLabs = [

{
title:"Study of Network Components",
shortDesc:"Understand routers, switches, hubs, and cables.",
info:{
aim:"To study physical network components and their functions.",
theory:"Network components form the foundation of communication systems. Devices like hubs, switches, and routers are used to connect multiple computers and networks. Hubs operate at the Physical Layer and broadcast data to all devices, while switches operate at the Data Link Layer and forward frames based on MAC addresses. Routers operate at the Network Layer and route packets between different networks using IP addresses. Proper selection of these components ensures efficient communication, reduced collisions, and better network performance."
},
demoVideoUrl:"https://youtu.be/AegRx0EzHmU?si=_YmYpBac3ANRCz0X",

quiz:[
{questionText:"Router works on which layer?",options:["Physical","Data Link","Network","Transport"],correctAnswerIndex:2},
{questionText:"Switch uses?",options:["IP address","MAC address","Port number","Frequency"],correctAnswerIndex:1},
{questionText:"Hub works on?",options:["Layer 1","Layer 2","Layer 3","Layer 4"],correctAnswerIndex:0},
{questionText:"Router connects?",options:["Devices","Networks","Signals","Programs"],correctAnswerIndex:1},
{questionText:"Switch reduces?",options:["Speed","Collision","Voltage","Noise"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },

},

{
title:"Network Tools and Commands",
shortDesc:"Analyze ping, traceroute, ipconfig.",
info:{
aim:"To study and implement network tools.",
theory:"Network diagnostic tools help in troubleshooting connectivity issues. The 'ping' command uses ICMP echo request and reply messages to check whether a host is reachable. 'Traceroute' identifies the path taken by packets to reach a destination by manipulating the TTL value. Commands like 'ipconfig' or 'ifconfig' display IP configuration details. These tools are essential for network debugging, performance monitoring, and system configuration."
},
demoVideoUrl:"https://youtu.be/mTZOaWuJVXU?si=16Ib1Xy3MpadmM6o",
quiz:[
{questionText:"Ping uses?",options:["TCP","UDP","ICMP","HTTP"],correctAnswerIndex:2},
{questionText:"Traceroute uses?",options:["TTL","IP","MAC","Port"],correctAnswerIndex:0},
{questionText:"ipconfig shows?",options:["Voltage","IP address","Speed","Code"],correctAnswerIndex:1},
{questionText:"Ping checks?",options:["Speed","Connectivity","Power","Code"],correctAnswerIndex:1},
{questionText:"Traceroute finds?",options:["Error","Path","Speed","Load"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
 labManualLink:"https://drive.google.com/file/d/1WFvvdmVHMMdLysAdQZ9CQ_FPcJoyvJmN/view?usp=drive_link"

},

{
title:"Web Server via Cisco Packet Tracer",
shortDesc:"Configure and host HTML page.",
info:{
aim:"To install and configure a web server.",
theory:"A web server is used to host websites and deliver web pages to clients over the internet. In Cisco Packet Tracer, a web server can be configured to simulate real-world networking environments. It uses HTTP (port 80) or HTTPS (port 443) protocols to serve HTML pages. Clients access the server using a web browser. This experiment demonstrates server configuration, client-server communication, and web hosting fundamentals."
},
demoVideoUrl:"https://youtu.be/vyzvdbnOTXY?si=ZhKlbg07gxLiOUNN",
quiz:[
{questionText:"HTTP port?",options:["21","22","80","443"],correctAnswerIndex:2},
{questionText:"HTTPS port?",options:["80","21","443","25"],correctAnswerIndex:2},
{questionText:"Web server provides?",options:["Code","HTML pages","Voltage","Signals"],correctAnswerIndex:1},
{questionText:"Client uses?",options:["Browser","Router","Switch","Hub"],correctAnswerIndex:0},
{questionText:"Protocol used?",options:["FTP","HTTP","SMTP","DNS"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
labManualLink:"https://drive.google.com/file/d/1tRdQTkguyf00ubFOVpsL8_8_X2kWmkMV/view?usp=drive_link"
},

{
title:"FTP Server Configuration",
shortDesc:"Set up FTP communication.",
info:{
aim:"To configure FTP server.",
theory:"FTP (File Transfer Protocol) is used to transfer files between a client and server over a network. It uses port 21 for control commands and port 20 for data transfer. FTP supports uploading and downloading files. It is widely used for sharing files but lacks encryption, making it less secure compared to modern protocols like SFTP."
},
demoVideoUrl:"https://youtu.be/vCCBEZxBjQI?si=sXsHqIgDrbCL8n_g",
quiz:[
{questionText:"FTP control port?",options:["20","21","22","25"],correctAnswerIndex:1},
{questionText:"FTP data port?",options:["20","21","22","25"],correctAnswerIndex:0},
{questionText:"FTP used for?",options:["Mail","File transfer","Streaming","Routing"],correctAnswerIndex:1},
{questionText:"FTP is?",options:["Secure","Insecure","Encrypted","Wireless"],correctAnswerIndex:1},
{questionText:"FTP protocol type?",options:["Connectionless","Connection-oriented","Wireless","None"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
labManualLink:"https://drive.google.com/file/d/1Sx7-Ul1SIvgmUtKOZITrVsoF4Mxz8VTe/view?usp=drive_link"
},

{
title:"Protocol Analyzer (Wireshark)",
shortDesc:"Analyze network traffic.",
info:{
aim:"To analyze packets using Wireshark.",
theory:"Wireshark is a network protocol analyzer used to capture and inspect packets in real time. It allows users to analyze network traffic, identify issues, and detect security threats. It works at multiple OSI layers and provides detailed packet-level information. It is widely used by network administrators and security analysts."
},
demoVideoUrl:"https://youtu.be/qTaOZrDnMzQ?si=839uN_ycqyYVxy_G",
quiz:[
{questionText:"Wireshark used for?",options:["Coding","Packet analysis","Hosting","Design"],correctAnswerIndex:1},
{questionText:"Captures?",options:["Code","Packets","Voltage","Signals"],correctAnswerIndex:1},
{questionText:"Used by?",options:["Doctors","Admins","Teachers","Drivers"],correctAnswerIndex:1},
{questionText:"Analyzes?",options:["Hardware","Network traffic","Power","Speed"],correctAnswerIndex:1},
{questionText:"Works on?",options:["Single layer","Multiple layers","None","Only physical"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
labManualLink:"https://drive.google.com/file/d/1dyLmBg9Q9wgSIJnvHyK4bnGHNncUt51q/view?usp=drive_link"
},

{
title:"Dynamic Routing (RIP & OSPF)",
shortDesc:"Configure routing protocols.",
info:{
aim:"To implement RIP and OSPF.",
theory:"Dynamic routing protocols automatically update routing tables. RIP uses hop count as a metric and is simple but limited. OSPF is a link-state protocol that uses Dijkstra’s algorithm to calculate the shortest path. OSPF is faster and more efficient in large networks. These protocols ensure optimal routing."
},
demoVideoUrl:"https://youtu.be/ZFo59ad-Y_Q?si=NFZbEPK4vOYhBv-0",
quiz:[
{questionText:"RIP uses?",options:["Bandwidth","Delay","Hop Count","Load"],correctAnswerIndex:2},
{questionText:"OSPF uses?",options:["Prim","Kruskal","Dijkstra","DFS"],correctAnswerIndex:2},
{questionText:"RIP max hops?",options:["10","15","20","25"],correctAnswerIndex:1},
{questionText:"OSPF is?",options:["Distance","Link-state","Static","Manual"],correctAnswerIndex:1},
{questionText:"Routing is?",options:["Switching","Forwarding","Encoding","Decoding"],correctAnswerIndex:1}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
labManualLink:"https://drive.google.com/file/d/15o0-x5Im4c_-ZWpuFzxlh1Gp7t94x3lB/view?usp=drive_link"
},

{
title:"Shortest Path Algorithm in C",
shortDesc:"Program for shortest path.",
info:{
aim:"To implement Dijkstra algorithm.",
theory:"Shortest path algorithms are used to find the minimum cost path between nodes in a network. Dijkstra’s algorithm finds the shortest path from a single source node to all other nodes in a graph. It uses greedy approach and priority queue. It is widely used in routing protocols like OSPF."
},
demoVideoUrl:"https://youtu.be/3YEHGdgmx4U?si=0_Wt0RyTWK0cGRx6",
quiz:[
{questionText:"Used in OSPF?",options:["Prim","Kruskal","Dijkstra","Bellman"],correctAnswerIndex:2},
{questionText:"Graph contains?",options:["Nodes","Edges","Both","None"],correctAnswerIndex:2},
{questionText:"Dijkstra is?",options:["Greedy","Divide","Dynamic","None"],correctAnswerIndex:0},
{questionText:"Used for?",options:["Sorting","Path finding","Searching","Storage"],correctAnswerIndex:1},
{questionText:"Output is?",options:["Shortest path","Longest path","None","All"],correctAnswerIndex:0}
],
tryYourself: { link: "https://skillsforall.com/course/getting-started-cisco-packet-tracer" },
labManualLink:"https://drive.google.com/file/d/1kneDeyq6XydiQn733oeQJaXmK5JTbdGE/view?usp=drive_link"
}

];

module.exports=cnLabs;