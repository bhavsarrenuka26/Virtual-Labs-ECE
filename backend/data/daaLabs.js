const daaLabs = [

{
title:"Algorithmic Complexity",
shortDesc:"Compare Exponential vs Polynomial Algorithms.",
info:{
aim:"To analyze and compare time complexity of algorithms.",
theory:"Algorithmic complexity measures the efficiency of an algorithm in terms of time and space. It is commonly expressed using Big-O notation. Polynomial time algorithms such as O(n), O(n log n), and O(n²) are considered efficient and scalable. Exponential time algorithms like O(2^n) or O(n!) grow very rapidly and become impractical for large inputs. Complexity analysis helps in selecting the best algorithm for a problem. It is widely used in machine learning, optimization, and software development to improve performance."
},
quiz:[
{questionText:"Efficient complexity?",options:["O(n!)","O(2^n)","O(n^2)","O(n^n)"],correctAnswerIndex:2},
{questionText:"Big-O measures?",options:["Speed","Memory","Efficiency","All"],correctAnswerIndex:3},
{questionText:"Polynomial is?",options:["Efficient","Slow","Random","None"],correctAnswerIndex:0},
{questionText:"Exponential is?",options:["Fast","Slow","Efficient","None"],correctAnswerIndex:1},
{questionText:"Used in?",options:["ML","Software","Optimization","All"],correctAnswerIndex:3}
]
},

{
title:"Heaps and Priority Queues",
shortDesc:"Apply heaps in CPU scheduling.",
info:{
aim:"To implement heap data structure and priority queue.",
theory:"A heap is a complete binary tree that satisfies the heap property. In a max-heap, the root node contains the largest element, while in a min-heap, it contains the smallest. Heaps are commonly used to implement priority queues, where elements are processed based on priority rather than order of insertion. Operations like insertion and deletion take O(log n) time. Heaps are widely used in scheduling algorithms, graph algorithms, and sorting techniques like Heap Sort."
},
quiz:[
{questionText:"Extract max time?",options:["O(1)","O(log n)","O(n)","O(n log n)"],correctAnswerIndex:1},
{questionText:"Heap is?",options:["Tree","Graph","List","Array"],correctAnswerIndex:0},
{questionText:"Max-heap root?",options:["Smallest","Largest","Random","None"],correctAnswerIndex:1},
{questionText:"Used in?",options:["Sorting","Scheduling","Graphs","All"],correctAnswerIndex:3},
{questionText:"Insert time?",options:["O(1)","O(log n)","O(n)","O(n²)"],correctAnswerIndex:1}
]
},

{
title:"Graph Traversals & NP-Hard",
shortDesc:"BFS, DFS, TSP, Vertex Cover.",
info:{
aim:"To implement graph traversal and understand NP-hard problems.",
theory:"Graph traversal algorithms such as Breadth-First Search (BFS) and Depth-First Search (DFS) are used to explore nodes in a graph. BFS uses a queue and explores level by level, while DFS uses a stack or recursion to explore depth-first. NP-Hard problems like the Traveling Salesman Problem (TSP) have no known polynomial-time solution. Approximation algorithms are used to find near-optimal solutions. These concepts are widely used in networking, artificial intelligence, and optimization problems."
},
quiz:[
{questionText:"TSP belongs to?",options:["P","NP-Hard","Linear","Constant"],correctAnswerIndex:1},
{questionText:"BFS uses?",options:["Stack","Queue","Heap","Array"],correctAnswerIndex:1},
{questionText:"DFS uses?",options:["Queue","Stack","Heap","List"],correctAnswerIndex:1},
{questionText:"NP-hard means?",options:["Easy","Hard","Polynomial","None"],correctAnswerIndex:1},
{questionText:"Traversal used for?",options:["Search","Sort","Store","Delete"],correctAnswerIndex:0}
]
},

{
title:"Divide and Conquer",
shortDesc:"Binary Search, Merge Sort, Closest Pair.",
info:{
aim:"To solve problems using divide and conquer strategy.",
theory:"Divide and Conquer is a technique where a problem is divided into smaller subproblems, each solved independently, and results are combined. Algorithms like Merge Sort and Quick Sort use this approach. Binary Search reduces search space by half at each step. This method improves efficiency and reduces complexity. It is widely used in sorting, searching, and computational geometry problems."
},
quiz:[
{questionText:"Uses divide & conquer?",options:["Bubble Sort","Merge Sort","Linear Search","Knapsack"],correctAnswerIndex:1},
{questionText:"Binary search time?",options:["O(n)","O(log n)","O(n²)","O(1)"],correctAnswerIndex:1},
{questionText:"Divide step?",options:["Split problem","Combine","Store","Delete"],correctAnswerIndex:0},
{questionText:"Combine step?",options:["Merge","Split","Delete","Store"],correctAnswerIndex:0},
{questionText:"Used in?",options:["Sorting","Searching","Geometry","All"],correctAnswerIndex:3}
]
},

{
title:"Dynamic Programming & Greedy",
shortDesc:"Knapsack, Huffman, Floyd-Warshall.",
info:{
aim:"To implement DP and greedy algorithms.",
theory:"Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation. It uses memoization or tabulation techniques. Greedy algorithms make the best choice at each step without considering future consequences. Examples include Huffman coding and activity selection. DP is used in problems like Knapsack and shortest path algorithms. These techniques improve efficiency and are widely used in optimization problems."
},
quiz:[
{questionText:"DP uses?",options:["Recursion","Memoization","Random","Loop"],correctAnswerIndex:1},
{questionText:"Greedy means?",options:["Best choice","Worst choice","Random","None"],correctAnswerIndex:0},
{questionText:"Knapsack uses?",options:["Greedy","DP","Both","None"],correctAnswerIndex:1},
{questionText:"Huffman uses?",options:["DP","Greedy","Divide","None"],correctAnswerIndex:1},
{questionText:"DP avoids?",options:["Repetition","Sorting","Searching","Memory"],correctAnswerIndex:0}
]
}

];

module.exports = daaLabs;