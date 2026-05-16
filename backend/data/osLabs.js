const osLabs = [
  {
  title: "Linux System Calls",
  shortDesc: "Master process management using fork(), exec(), wait(), and exit().",
  info: {
    aim: "To simulate process lifecycle operations and understand process creation, execution, synchronization, and termination in Linux.",
    theory: "System calls act as the interface between user-level programs and the Linux kernel, allowing processes to request services such as process management, memory access, and I/O operations.\n\nThe fork() system call is used to create a new process called the child process. It is a duplicate of the parent process with a separate address space. After fork(), both parent and child execute independently.\n\nThe exec() family of system calls replaces the current process image with a new program. It does not create a new process; instead, it overwrites the existing one.\n\nThe wait() system call is used by the parent process to suspend its execution until one of its child processes terminates. This helps in synchronization and avoids zombie processes.\n\nThe exit() system call terminates the calling process and returns a status value to the parent process.\n\nTogether, these system calls form the basis of process lifecycle management in Linux systems."
  },
   demoVideoUrl: "https://youtu.be/tWPa-rZiGM8?si=KBVBae5APLWfAGzD",
  quiz: [
    {
      questionText: "Which system call creates a duplicate of the current process?",
      options: ["exec()", "fork()", "clone()", "dup()"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does exec() system call do?",
      options: [
        "Creates a new process",
        "Terminates a process",
        "Replaces the current process image with a new program",
        "Waits for child process"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which system call is used by a parent to wait for child termination?",
      options: ["exit()", "wait()", "fork()", "exec()"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is returned by fork() in the child process?",
      options: ["Parent PID", "Child PID", "0", "-1"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which system call is used to terminate a process?",
      options: ["kill()", "wait()", "exit()", "stop()"],
      correctAnswerIndex: 2
    }
  ]
},
 {
  title: "Process Lifecycle Simulation",
  shortDesc: "Simulate process scheduling behavior and use monitoring tools.",
  info: {
    aim: "To simulate process creation, termination, priority management, and monitor processes using system tools like ps, top, and htop.",
    theory: "In Linux, a process goes through a lifecycle that includes states such as new, ready, running, waiting, and terminated. The operating system scheduler manages these states and allocates CPU time based on scheduling algorithms and priorities.\n\nProcess monitoring tools help users observe and manage system performance. The `ps` command provides a snapshot of currently running processes, including their PID, status, and resource usage.\n\nThe `top` command provides a real-time, continuously updating view of system processes, showing CPU and memory usage dynamically. The `htop` tool is an enhanced version of top with a more user-friendly interface, color coding, and easier navigation.\n\nUsers can also adjust process priority using commands like `nice` and `renice`, which influence scheduling behavior.\n\nThese tools are essential for system administration, debugging, and performance optimization."
  },
 demoVideoUrl: "https://youtu.be/2dJdHMpCLIg?si=St_pL6D2t8gIYu0j",
  quiz: [
    {
      questionText: "Which command provides a real-time, interactive view of running processes?",
      options: ["ls", "mkdir", "htop", "pwd"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which command gives a snapshot of current processes?",
      options: ["top", "ps", "kill", "echo"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which tool is an enhanced version of top with better UI?",
      options: ["ps", "htop", "nice", "grep"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which command is used to change process priority?",
      options: ["kill", "nice/renice", "pwd", "cat"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which of the following is NOT a process state?",
      options: ["Running", "Waiting", "Compiled", "Terminated"],
      correctAnswerIndex: 2
    }
  ]
},
 {
  title: "Shell Development",
  shortDesc: "Design a minimal shell that parses user commands.",
  info: {
    aim: "To design and implement a basic shell that parses user commands, manages foreground/background execution, and launches processes.",
    theory: "A shell is a command-line interpreter that acts as an interface between the user and the operating system. It reads user input, parses commands, and executes them by creating new processes.\n\nWhen a command is entered, the shell typically uses fork() to create a child process. The child process then uses exec() to replace its memory with the requested program. The parent shell may use wait() to pause execution until the child finishes (foreground execution), or continue immediately (background execution using '&').\n\nThe shell also handles input/output redirection, piping, and job control. It continuously runs in a loop: read → parse → execute → repeat.\n\nDesigning a minimal shell involves implementing command parsing, process creation, execution handling, and optionally support for background processes and basic system commands.\n\nShells are fundamental components of Unix/Linux systems and are essential for system interaction and automation."
  },
 demoVideoUrl: "https://youtu.be/CeCah9nD9XE?si=h5IElFyOnGF98wYD",
  quiz: [
    {
      questionText: "What is the primary function of a shell?",
      options: [
        "Render graphics",
        "Parse commands and launch processes",
        "Compile C code",
        "Manage memory hardware"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which system call is used to create a new process in a shell?",
      options: ["exec()", "fork()", "wait()", "exit()"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does exec() do in a shell?",
      options: [
        "Creates a process",
        "Terminates a process",
        "Replaces process image with a new program",
        "Waits for process"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "How is a command executed in the background?",
      options: [
        "Using * symbol",
        "Using & symbol",
        "Using # symbol",
        "Using $ symbol"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which function is used by parent to wait for child process?",
      options: ["fork()", "exec()", "wait()", "sleep()"],
      correctAnswerIndex: 2
    }
  ]
},
  {
  title: "CPU Scheduling Algorithms",
  shortDesc: "Implement FCFS, SJF, and Round Robin scheduling.",
  info: {
    aim: "To implement and evaluate CPU scheduling algorithms for optimizing process execution and system performance.",
    theory: "CPU scheduling is a fundamental function of an operating system that determines which process gets access to the CPU at any given time. Efficient scheduling improves system performance, reduces waiting time, and ensures fairness among processes.\n\nFirst Come First Serve (FCFS) is the simplest scheduling algorithm where processes are executed in the order they arrive. It is easy to implement but may suffer from the convoy effect, where short processes wait behind long ones.\n\nShortest Job First (SJF) selects the process with the smallest execution time. It minimizes average waiting time but requires prior knowledge of burst time and may lead to starvation of longer processes.\n\nRound Robin (RR) scheduling assigns a fixed time quantum to each process in a cyclic order. If a process does not finish within its time quantum, it is preempted and placed at the end of the queue. This ensures fairness and responsiveness, especially in time-sharing systems.\n\nThese algorithms are evaluated based on parameters such as turnaround time, waiting time, response time, and throughput."
  },
 demoVideoUrl: "https://youtube.com/playlist?list=PLGF9VeuyJzDfFEeiK2N9NYhHedyEHQHxI&si=6ZgbBYvcKsVX5TLh",
  quiz: [
    {
      questionText: "Which algorithm relies on a time quantum?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which scheduling algorithm is non-preemptive by default?",
      options: ["Round Robin", "SJF", "FCFS", "Priority"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which algorithm minimizes average waiting time?",
      options: ["FCFS", "SJF", "Round Robin", "FIFO"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is a major disadvantage of FCFS?",
      options: [
        "High complexity",
        "Starvation of short jobs",
        "Convoy effect",
        "Requires time quantum"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What happens if time quantum is too large in Round Robin?",
      options: [
        "Becomes similar to SJF",
        "Becomes similar to FCFS",
        "System crashes",
        "Processes terminate early"
      ],
      correctAnswerIndex: 1
    }
  ]
},
  {
  title: "Performance Analysis",
  shortDesc: "Calculate average waiting time and turnaround time.",
  info: {
    aim: "To calculate and compare average waiting time and turnaround time for evaluating scheduling algorithm performance.",
    theory: "Performance analysis in operating systems focuses on evaluating how efficiently scheduling algorithms manage process execution.\n\nTurnaround Time (TAT) is defined as the total time taken by a process from its arrival (submission) to its completion. It includes both waiting time and execution time.\n\nTurnaround Time = Completion Time − Arrival Time\n\nWaiting Time (WT) is the total time a process spends waiting in the ready queue before getting CPU execution.\n\nWaiting Time = Turnaround Time − Burst Time\n\nAverage Waiting Time and Average Turnaround Time are key metrics used to compare different scheduling algorithms. Lower values indicate better performance.\n\nThese metrics help in analyzing system efficiency, responsiveness, and fairness under different workloads."
  },
  demoVideoUrl : "https://youtube.com/playlist?list=PLGF9VeuyJzDfFEeiK2N9NYhHedyEHQHxI&si=6ZgbBYvcKsVX5TLh",
  quiz: [
    {
      questionText: "What is Turnaround Time?",
      options: [
        "Time spent executing",
        "Time from submission to completion",
        "Time spent in ready queue",
        "Time to load into memory"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is Waiting Time?",
      options: [
        "Execution time only",
        "Time spent in ready queue",
        "Time from start to end",
        "Time in CPU only"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Turnaround Time is calculated as:",
      options: [
        "Burst Time − Arrival Time",
        "Completion Time − Arrival Time",
        "Arrival Time − Completion Time",
        "Burst Time − Completion Time"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Waiting Time is calculated as:",
      options: [
        "Burst Time + Turnaround Time",
        "Turnaround Time − Burst Time",
        "Completion Time − Burst Time",
        "Arrival Time − Burst Time"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What indicates better scheduling performance?",
      options: [
        "Higher waiting time",
        "Higher turnaround time",
        "Lower average waiting and turnaround time",
        "Higher CPU idle time"
      ],
      correctAnswerIndex: 2
    }
  ]
},
{
  title: "Memory Management Techniques",
  shortDesc: "Simulate paging and FIFO/LRU page replacement.",
  info: {
    aim: "To implement paging, page tables, and simulate page replacement algorithms like FIFO and LRU.",
    theory: "Memory management is a crucial function of an operating system that handles allocation and deallocation of memory to processes.\n\nPaging is a memory management technique that divides physical memory into fixed-size blocks called frames and logical memory into pages of the same size. This eliminates external fragmentation and allows efficient memory utilization.\n\nA page table is used to map logical addresses (pages) to physical addresses (frames). When a required page is not present in memory, a page fault occurs, and the operating system loads the page from secondary storage.\n\nWhen memory is full, page replacement algorithms decide which page to remove. FIFO (First-In-First-Out) removes the oldest page in memory. LRU (Least Recently Used) removes the page that has not been used for the longest time. The Optimal algorithm replaces the page that will not be used for the longest future duration.\n\nThese techniques are essential for efficient memory utilization and system performance."
  },
demoVideoUrl:"https://youtube.com/playlist?list=PLr22VAqXtH4PUjHTRu4xaPw--_cCLfRO4&si=LudFA63v7xDCjjn_",
  quiz: [
    {
      questionText: "Which page replacement algorithm evicts the page that has not been used for the longest time?",
      options: ["FIFO", "LRU", "Optimal", "Random"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the main advantage of paging?",
      options: [
        "Eliminates internal fragmentation",
        "Eliminates external fragmentation",
        "Increases CPU speed",
        "Reduces process size"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is a page fault?",
      options: [
        "Error in program execution",
        "Page not found in main memory",
        "Division by zero",
        "Memory overflow"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "FIFO page replacement removes which page?",
      options: [
        "Most recently used",
        "Least frequently used",
        "Oldest page",
        "Random page"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is used to map logical addresses to physical addresses?",
      options: [
        "Cache",
        "Register",
        "Page table",
        "Stack"
      ],
      correctAnswerIndex: 2
    }
  ]
},
  {
  title: "Segmentation",
  shortDesc: "Divide a process's address space into variable-sized segments.",
  info: {
    aim: "To understand segmentation and manage allocation and deallocation of memory segments.",
    theory: "Segmentation is a memory management technique in which a program is divided into variable-sized logical units called segments. These segments correspond to logical divisions such as functions, arrays, stack, and data sections.\n\nUnlike paging, which divides memory into fixed-size blocks, segmentation is based on the logical structure of a program, making it more intuitive for programmers.\n\nEach segment has a base address and a limit. The base specifies the starting physical address, while the limit defines the size of the segment. Logical addresses in segmentation consist of a segment number and an offset.\n\nSegmentation supports protection and sharing, as different segments can have different access permissions.\n\nHowever, segmentation may lead to external fragmentation because memory is allocated in variable-sized blocks.\n\nIt is commonly used in combination with paging in modern systems to improve memory management efficiency."
  },
demoVideoUrl:"https://youtu.be/fRPz3dQ2LZc?si=0-MYoWjol4zG9mV-",
  quiz: [
    {
      questionText: "How does segmentation differ from paging?",
      options: [
        "It uses fixed-size blocks",
        "It uses variable-sized blocks based on logic",
        "It only uses RAM",
        "It cannot be swapped to disk"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does a logical address consist of in segmentation?",
      options: [
        "Page number and offset",
        "Segment number and offset",
        "Frame number only",
        "Address only"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What information is stored in a segment table entry?",
      options: [
        "Only offset",
        "Base address and limit",
        "Page number",
        "Instruction code"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What type of fragmentation occurs in segmentation?",
      options: [
        "Internal fragmentation",
        "External fragmentation",
        "No fragmentation",
        "Logical fragmentation"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which of the following is a feature of segmentation?",
      options: [
        "Fixed memory allocation",
        "Logical division of program",
        "No protection",
        "No sharing possible"
      ],
      correctAnswerIndex: 1
    }
  ]
}
];
module.exports = osLabs;