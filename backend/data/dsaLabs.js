const dsaLabs = [
 {
  title: "Sorting and Searching",
  shortDesc: "Implement Bubble, Quick, Merge sort and Linear/Binary search.",
  info: {
    aim: "To implement sorting and searching algorithms in C++ and analyze their efficiency.",
    theory: "Sorting is the process of arranging data elements in a specific order (ascending or descending), while searching is used to find a particular element in a dataset.\n\nBubble Sort is a simple comparison-based algorithm with time complexity O(n^2), suitable for small datasets.\n\nQuick Sort is a divide-and-conquer algorithm that selects a pivot and partitions the array. Its average time complexity is O(n log n), though worst case is O(n^2).\n\nMerge Sort is also a divide-and-conquer algorithm that divides the array into halves, sorts them, and merges them. It has a consistent time complexity of O(n log n).\n\nLinear Search scans each element sequentially and works on both sorted and unsorted data with time complexity O(n).\n\nBinary Search works only on sorted arrays and repeatedly divides the search space in half, achieving a time complexity of O(log n).\n\nThese algorithms are fundamental for efficient data processing and optimization in software systems."
  },
demoVideoUrl:"https://youtube.com/playlist?list=PLDzeHZWIZsTp4pb_WBRahP1tnipLuX9qM&si=i7DgW674Vx8sI_iF",
  quiz: [
    {
      questionText: "What is the average time complexity of Quick Sort?",
      options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which sorting algorithm has worst-case time complexity O(n^2)?",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Binary Search"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which algorithm always has O(n log n) time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Linear Search"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which searching algorithm requires sorted data?",
      options: ["Linear Search", "Binary Search", "Bubble Sort", "Quick Sort"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the time complexity of Binary Search?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
      correctAnswerIndex: 2
    }
  ],
 tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},{
  title: "Standard Template Library (STL)",
  shortDesc: "Manipulate Vector, List, Stack, Queue, Set, and Map.",
  info: {
    aim: "To implement and use various data structures provided by the C++ Standard Template Library (STL).",
    theory: "The C++ Standard Template Library (STL) is a powerful library that provides pre-defined, generic classes and functions to simplify programming. It includes containers, iterators, and algorithms.\n\nContainers are data structures used to store data. Common STL containers include:\n- Vector: Dynamic array that allows random access and automatic resizing.\n- List: Doubly linked list that allows efficient insertion and deletion.\n- Stack: Follows Last-In-First-Out (LIFO) principle.\n- Queue: Follows First-In-First-Out (FIFO) principle.\n- Set: Stores unique elements in sorted order.\n- Map: Stores key-value pairs with unique keys in sorted order.\n\nSTL also provides iterators for traversing containers and algorithms like sort(), find(), and reverse() for efficient operations.\n\nUsing STL improves code efficiency, readability, and reduces development time."
  },
demoVideoUrl:"https://youtu.be/RRVYpIET_RU?si=Xp4BGLAkSDTCLnhB",
  quiz: [
    {
      questionText: "Which STL container follows the Last-In-First-Out (LIFO) principle?",
      options: ["Queue", "Vector", "Stack", "List"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which container allows dynamic resizing and random access?",
      options: ["List", "Stack", "Vector", "Queue"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which STL container stores unique elements in sorted order?",
      options: ["Vector", "Set", "Queue", "Stack"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which container is used to store key-value pairs?",
      options: ["Set", "List", "Map", "Vector"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which principle does Queue follow?",
      options: ["LIFO", "FIFO", "Random", "Priority only"],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Infix Expression Evaluation",
  shortDesc: "Evaluate expressions directly handling spaces and parentheses.",
  info: {
    aim: "To evaluate infix expressions directly using appropriate data structures while handling operator precedence and parentheses.",
    theory: "Infix expressions are mathematical expressions where operators are placed between operands (e.g., A + B). Evaluating such expressions directly requires careful handling of operator precedence (e.g., multiplication before addition) and associativity.\n\nA common approach uses two stacks:\n1. Value Stack: Stores operands (numbers).\n2. Operator Stack: Stores operators (+, -, *, /, etc.).\n\nThe algorithm processes the expression from left to right:\n- If an operand is encountered, it is pushed onto the value stack.\n- If an operator is encountered, operators with higher or equal precedence are applied before pushing the new operator.\n- Parentheses are handled by pushing '(' onto the operator stack and evaluating until ')' is found.\n\nThis method ensures correct evaluation order without converting the expression into postfix or prefix form.\n\nSuch techniques are widely used in compilers, calculators, and expression evaluators."
  },
demoVideoUrl:"https://youtu.be/4pIc9UBHJtk?si=ApZdnkIFCDiQbHsX",
  quiz: [
    {
      questionText: "What data structure is most commonly used to manage operator precedence during evaluation?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correctAnswerIndex: 1
    },
    {
      questionText: "How many stacks are typically used in infix evaluation?",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which stack stores operands?",
      options: ["Operator stack", "Value stack", "Memory stack", "Pointer stack"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is done when a closing parenthesis ')' is encountered?",
      options: [
        "Ignored",
        "Push to stack",
        "Evaluate until matching '('",
        "End program"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which of the following has higher precedence?",
      options: ["+", "-", "*", "="],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Ticket Booking System",
  shortDesc: "Implement enqueue and dequeue operations for customers.",
  info: {
    aim: "To simulate a customer queue at a booking counter using enqueue and dequeue operations.",
    theory: "A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added is the first one to be removed.\n\nIn a ticket booking system, customers join the queue at the rear using the enqueue operation and are served from the front using the dequeue operation.\n\nThe queue has two main pointers:\n- Front: Points to the first element (next to be removed).\n- Rear: Points to the last element (most recently added).\n\nBasic operations include:\n- Enqueue: Add an element at the rear.\n- Dequeue: Remove an element from the front.\n- Peek: View the front element without removing it.\n\nQueues are widely used in real-life systems such as ticket booking counters, printer queues, CPU scheduling, and network buffering."
  },
demoVideoUrl:"https://youtu.be/rtxjrVpWVmI?si=3fkhEjk8Lj5jRi3i",
  quiz: [
    {
      questionText: "Where are elements removed from in a standard Queue?",
      options: ["Rear", "Middle", "Front", "Top"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which principle does a Queue follow?",
      options: ["LIFO", "FIFO", "Random", "Priority"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Where are elements inserted in a Queue?",
      options: ["Front", "Middle", "Rear", "Top"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the operation of adding an element called?",
      options: ["Push", "Insert", "Enqueue", "Append"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which pointer indicates the first element in the queue?",
      options: ["Rear", "Top", "Front", "Head"],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Music Playlist using Circular Linked List",
  shortDesc: "Add, delete, and loop through songs.",
  info: {
    aim: "To create and manipulate a circular linked list to simulate a continuous music playlist.",
    theory: "A Circular Linked List is a type of linked list in which the last node points back to the first node instead of pointing to NULL. This creates a continuous loop structure.\n\nIn a music playlist application, this structure allows songs to be played repeatedly without restarting manually. Once the last song is reached, the playlist automatically continues from the first song.\n\nEach node in the list contains data (song details) and a pointer to the next node. Operations include:\n- Insertion: Adding a new song to the playlist.\n- Deletion: Removing a song.\n- Traversal: Looping through songs continuously.\n\nUnlike linear linked lists, traversal in a circular linked list requires careful stopping conditions to avoid infinite loops.\n\nThis data structure is ideal for cyclic applications such as playlists, round-robin scheduling, and multiplayer turn systems."
  },
demoVideoUrl:"https://youtu.be/41lXYJID3OQ?si=nByVp780j26vYHfM",
  quiz: [
    {
      questionText: "What does the last node of a circular linked list point to?",
      options: ["NULL", "The second node", "The first node", "The previous node"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the main advantage of a circular linked list?",
      options: [
        "Uses less memory",
        "Allows continuous traversal",
        "Faster searching",
        "Simpler structure"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which operation adds a new song to the playlist?",
      options: ["Delete", "Insert", "Search", "Traverse"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What must be handled carefully during traversal?",
      options: [
        "Memory allocation",
        "Infinite loop condition",
        "Sorting order",
        "Input format"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which application commonly uses circular linked lists?",
      options: [
        "Database indexing",
        "Music playlist looping",
        "Sorting algorithms",
        "Binary search"
      ],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Student Database using BST",
  shortDesc: "Insert, delete, search, and traverse a Binary Search Tree.",
  info: {
    aim: "To implement a Binary Search Tree (BST) for managing student records and perform various traversals.",
    theory: "A Binary Search Tree (BST) is a hierarchical data structure where each node contains a value and two children: left and right. The BST property states that all values in the left subtree are smaller than the root node, and all values in the right subtree are greater.\n\nThis structure allows efficient searching, insertion, and deletion operations with average time complexity of O(log n).\n\nTraversals are used to visit nodes in a specific order:\n- Inorder (Left, Root, Right): Produces sorted order of elements.\n- Preorder (Root, Left, Right): Useful for copying the tree.\n- Postorder (Left, Right, Root): Useful for deleting the tree.\n\nIn a student database, BST can be used to store student records based on unique keys like roll number or ID, enabling efficient data retrieval and management.\n\nBST is widely used in applications requiring sorted data and dynamic updates."
  },
demoVideoUrl:"https://youtu.be/RuF7dPfj27Q?si=PvHKlM8DbbdkaBhD",
  quiz: [
    {
      questionText: "Which BST traversal yields elements in sorted order?",
      options: ["Preorder", "Inorder", "Postorder", "Level-order"],
      correctAnswerIndex: 1
    },
    {
      questionText: "In a BST, where are smaller values stored?",
      options: [
        "Right subtree",
        "Left subtree",
        "Root only",
        "Anywhere"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the average time complexity of search in BST?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which traversal visits root first?",
      options: ["Inorder", "Preorder", "Postorder", "Level-order"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which traversal is useful for deleting a tree?",
      options: ["Inorder", "Preorder", "Postorder", "Level-order"],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Social Network Graph",
  shortDesc: "Model friendships using BFS and DFS.",
  info: {
    aim: "To represent users as nodes and friendships as edges, and implement graph traversal algorithms like BFS and DFS.",
    theory: "A graph is a data structure used to represent relationships between entities. In a social network, users are represented as nodes (vertices) and friendships are represented as edges.\n\nGraph traversal algorithms are used to explore and analyze the network:\n\nBreadth-First Search (BFS) explores the graph level by level, visiting all neighbors of a node before moving to the next level. It uses a Queue data structure and is useful for finding the shortest path in unweighted graphs.\n\nDepth-First Search (DFS) explores as deep as possible along a branch before backtracking. It uses a Stack (or recursion) and is useful for tasks like cycle detection and connectivity checking.\n\nThese algorithms help in applications such as friend suggestions, network analysis, shortest path finding, and community detection.\n\nGraphs can be represented using adjacency lists or adjacency matrices depending on the application."
  },
demoVideoUrl:"https://youtube.com/playlist?list=PLUPfVLTCq5c2SmJeiouZ53mrkL46BvmI8&si=Il84LiD_WKmyd_4Q",
  quiz: [
    {
      questionText: "Which data structure is typically used to implement Breadth-First Search (BFS)?",
      options: ["Stack", "Queue", "Heap", "Array"],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which data structure is used in Depth-First Search (DFS)?",
      options: ["Queue", "Heap", "Stack", "Linked List"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What does a node represent in a social network graph?",
      options: [
        "A connection",
        "A user",
        "A message",
        "A server"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does an edge represent in the graph?",
      options: [
        "User profile",
        "Friendship/connection",
        "Data storage",
        "Algorithm"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which traversal is useful for finding shortest path in an unweighted graph?",
      options: ["DFS", "BFS", "Binary Search", "Sorting"],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
  {
  title: "Dynamic Programming Applications",
  shortDesc: "Solve DNA Sequence Matching (LCS) and Stock Market (LIS).",
  info: {
    aim: "To solve optimization problems using Dynamic Programming techniques like Longest Common Subsequence (LCS) and Longest Increasing Subsequence (LIS).",
    theory: "Dynamic Programming (DP) is a problem-solving technique used to solve complex problems by breaking them into smaller overlapping subproblems and storing their results (memoization or tabulation) to avoid redundant computations.\n\nIt is an optimization over plain recursion, which often recalculates the same subproblems multiple times.\n\nThe Longest Common Subsequence (LCS) problem finds the longest sequence that appears in the same order in two given sequences. It is widely used in DNA sequence matching, text comparison, and version control systems.\n\nThe Longest Increasing Subsequence (LIS) problem finds the longest subsequence of a sequence such that all elements are in increasing order. It is used in stock market analysis, trend detection, and optimization problems.\n\nDP improves efficiency by reducing time complexity from exponential (in recursion) to polynomial time in many cases.\n\nKey properties of DP problems include optimal substructure and overlapping subproblems."
  },
demoVideoUrl:"https://youtu.be/tyB0ztf0DNY?si=37_twMyZ4k5b7daS",
  quiz: [
    {
      questionText: "Dynamic Programming is primarily an optimization over which technique?",
      options: ["Greedy algorithms", "Plain Recursion", "Sorting", "Hashing"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does LCS stand for?",
      options: [
        "Longest Common Subsequence",
        "Least Common Sequence",
        "Longest Continuous Sequence",
        "Linear Common Subset"
      ],
      correctAnswerIndex: 0
    },
    {
      questionText: "What does LIS stand for?",
      options: [
        "Longest Increasing Subsequence",
        "Linear Increasing Series",
        "Longest Indexed Set",
        "Least Increasing Subsequence"
      ],
      correctAnswerIndex: 0
    },
    {
      questionText: "Which property is essential for Dynamic Programming?",
      options: [
        "Randomness",
        "Greedy choice",
        "Overlapping subproblems",
        "Sorting requirement"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the main benefit of Dynamic Programming?",
      options: [
        "Increases memory usage",
        "Reduces redundant computations",
        "Simplifies syntax",
        "Eliminates loops"
      ],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.programiz.com/cpp-programming/online-compiler/" },
},
];

module.exports=dsaLabs;