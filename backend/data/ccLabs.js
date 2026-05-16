const ccLabs= [

{
title:"Compiler Phases & Lexical Analyzer",
shortDesc:"Recognize keywords, identifiers, and literals.",
info:{
aim:"To study compiler phases and implement a lexical analyzer.",
theory:"A compiler translates high-level programming language code into machine code through multiple phases. These phases include lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and code generation. Lexical analysis is the first phase, which scans source code character by character and groups them into tokens such as keywords, identifiers, operators, and literals. It removes whitespace and comments and detects lexical errors. The output of this phase is a stream of tokens that is passed to the parser for further processing."
},
quiz:[
{questionText:"Output of lexical analysis?",options:["Machine code","Tokens","Parse tree","Optimized code"],correctAnswerIndex:1},
{questionText:"First compiler phase?",options:["Syntax","Lexical","Semantic","Code gen"],correctAnswerIndex:1},
{questionText:"Token is?",options:["Character","Word","Meaningful unit","Line"],correctAnswerIndex:2},
{questionText:"Removes?",options:["Code","Comments","Tokens","Variables"],correctAnswerIndex:1},
{questionText:"Used for?",options:["Scanning","Execution","Storage","Debugging"],correctAnswerIndex:0}
]
},

{
title:"Symbol Table & Parsing",
shortDesc:"Construct symbol table and parser.",
info:{
aim:"To manage symbol table and implement parsing techniques.",
theory:"A symbol table is a data structure used by the compiler to store information about identifiers such as variable names, data types, scope, and memory locations. It is accessed frequently, so efficient structures like hash tables are used. Parsing is the process of analyzing tokens based on grammar rules. Shift-reduce parsing is a bottom-up technique where input symbols are shifted onto a stack and reduced according to production rules. Parsing ensures syntactic correctness of programs."
},
quiz:[
{questionText:"Symbol table uses?",options:["Queue","Hash Table","Stack","Heap"],correctAnswerIndex:1},
{questionText:"Parsing checks?",options:["Syntax","Semantics","Execution","Storage"],correctAnswerIndex:0},
{questionText:"Shift-reduce is?",options:["Top-down","Bottom-up","Recursive","Linear"],correctAnswerIndex:1},
{questionText:"Symbol table stores?",options:["Data","Identifiers","Code","Errors"],correctAnswerIndex:1},
{questionText:"Parser input?",options:["Tokens","Code","Machine code","Binary"],correctAnswerIndex:0}
]
},

{
title:"Syntax Directed Translation (SDTS)",
shortDesc:"Generate postfix from infix.",
info:{
aim:"To implement SDTS and generate intermediate code.",
theory:"Syntax Directed Translation Schemes (SDTS) are used in compilers to associate semantic actions with grammar productions. These actions are executed during parsing to generate intermediate code or evaluate expressions. SDTS can produce postfix notation from infix expressions, which simplifies evaluation. Annotated parse trees represent how semantic rules are applied. SDTS is widely used in compilers for code generation and translation tasks."
},
quiz:[
{questionText:"SDTS stands for?",options:["Syntax Directed Translation Scheme","Simple Data Transfer","Standard Document","Sync Data"],correctAnswerIndex:0},
{questionText:"Used for?",options:["Parsing","Code generation","Storage","Execution"],correctAnswerIndex:1},
{questionText:"Postfix used for?",options:["Display","Evaluation","Storage","Input"],correctAnswerIndex:1},
{questionText:"Tree used?",options:["Parse tree","Binary tree","Heap","Graph"],correctAnswerIndex:0},
{questionText:"SDTS attaches?",options:["Data","Rules","Tokens","Loops"],correctAnswerIndex:1}
]
},

{
title:"Code Optimization Techniques",
shortDesc:"Constant folding, dead code, simplification.",
info:{
aim:"To apply optimization techniques to improve code efficiency.",
theory:"Code optimization is the process of improving program performance by reducing execution time and memory usage without changing output. Techniques include constant folding (evaluating expressions at compile time), algebraic simplification, dead code elimination, and common subexpression elimination. Peephole optimization examines a small sequence of instructions and replaces inefficient patterns with optimized ones. These techniques make programs faster and more efficient."
},
quiz:[
{questionText:"x=y*1 → x=y is?",options:["Loop","Simplification","Dead code","Lexical"],correctAnswerIndex:1},
{questionText:"Constant folding does?",options:["Runtime eval","Compile-time eval","Delete code","Store code"],correctAnswerIndex:1},
{questionText:"Dead code is?",options:["Unused","Used","Compiled","Run"],correctAnswerIndex:0},
{questionText:"Peephole means?",options:["Large window","Small window","No window","Loop"],correctAnswerIndex:1},
{questionText:"Optimization improves?",options:["Speed","Memory","Efficiency","All"],correctAnswerIndex:3}
]
}

];

module.exports = ccLabs;