const adeLabs = [
 {
  title: "Binary and Gray Code Converters",
  shortDesc: "Design 4-bit Binary to Gray and vice versa.",
  info: {
    aim: "To design and implement code converter circuits using logic gates.",
    theory: "Binary and Gray codes are widely used in digital systems for data representation. In Binary code, multiple bits may change simultaneously when transitioning from one number to another, which can cause errors in digital circuits. Gray code overcomes this issue by ensuring that only one bit changes at a time between successive values, reducing the possibility of errors.\n\nIn Binary to Gray conversion, the Most Significant Bit (MSB) of the Gray code is the same as the MSB of the binary input. The remaining bits are obtained by performing XOR operation between adjacent binary bits.\n\nFor example:\nG3 = B3\nG2 = B3 XOR B2\nG1 = B2 XOR B1\nG0 = B1 XOR B0\n\nIn Gray to Binary conversion, the MSB of the binary output is equal to the MSB of the Gray input. The remaining bits are obtained by performing successive XOR operations between the previous binary bit and the current Gray bit.\n\nFor example:\nB3 = G3\nB2 = B3 XOR G2\nB1 = B2 XOR G1\nB0 = B1 XOR G0\n\nThese conversions are implemented using XOR gates, making the circuit simple and efficient for digital applications such as error minimization in encoders and communication systems."
  },

   demoVideoUrl: "https://youtu.be/SdWuhgf5BNk?si=u_3O9WM3E_EhTMha",
 quiz: [
  {
    questionText: "What is the main advantage of Gray code over binary code?",
    options: [
      "Faster arithmetic operations",
      "Only one bit changes between successive values",
      "Uses fewer bits",
      "Simpler hardware implementation"
    ],
    correctAnswerIndex: 1
  },
  {
    questionText: "Which logic gate is primarily used to convert Binary to Gray code?",
    options: ["AND", "OR", "XOR", "NOT"],
    correctAnswerIndex: 2
  },
  {
    questionText: "In a 4-bit Binary to Gray conversion, the MSB of Gray code is equal to:",
    options: [
      "LSB of binary",
      "XOR of all bits",
      "MSB of binary",
      "Complement of MSB"
    ],
    correctAnswerIndex: 2
  },
  {
    questionText: "To convert Gray code back to Binary, which operation is repeatedly used?",
    options: [
      "AND operation",
      "OR operation",
      "XOR operation",
      "NOT operation"
    ],
    correctAnswerIndex: 2
  },
  {
    questionText: "How many XOR gates are required for a 4-bit Binary to Gray code converter?",
    options: ["2", "3", "4", "5"],
    correctAnswerIndex: 1
  }
],
tryYourself: { link: "https://www.falstad.com/circuit/" }
  },
  {
  title: "IC-74LS153 Multiplexer",
  shortDesc: "Design 8:1 MUX using IC-74LS153.",
  info: {
    aim: "To study Multiplexer operation and verify truth tables using IC-74LS153.",
    theory: "A Multiplexer (MUX) is a combinational circuit that selects one of many input signals and forwards it to a single output line based on select inputs. The number of select lines determines how many inputs can be handled, following the relation 2^n inputs for n select lines.\n\nThe IC 74LS153 is a dual 4:1 Multiplexer, meaning it contains two independent 4-input multiplexers in a single package. Each multiplexer has four data inputs, two select lines (S0 and S1), one active-low enable input, and one output.\n\nTo design an 8:1 Multiplexer using IC 74LS153, two 4:1 multiplexers are combined. The lower two select lines (S0, S1) are connected to both multiplexers, while the third select line is used to control which multiplexer is enabled at a time via the enable pins.\n\nWhen the enable pin of a multiplexer is LOW, it becomes active and passes one of its inputs to the output based on the select lines. When the enable is HIGH, the multiplexer is disabled.\n\nThus, by properly controlling the enable pins and select lines, an 8:1 MUX can be implemented. Multiplexers are widely used in digital systems for data routing, signal selection, and efficient resource utilization."
  },
  demoVideoUrl: "https://drive.google.com/drive/folders/1qENMPxNMhpEnlaoDPhQTzVGZXG0WqtaB?usp=sharing",
  quiz: [
  {
    questionText: "What is the main function of a Multiplexer (MUX)?",
    options: [
      "Combine multiple outputs into one input",
      "Select one input from many and route it to a single output",
      "Amplify signals",
      "Convert analog signals to digital"
    ],
    correctAnswerIndex: 1
  },
  {
    questionText: "How many select lines are required for a 4:1 Multiplexer?",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1
  },
  {
    questionText: "A 2:1 Multiplexer has how many input lines?",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1
  },
  {
    questionText: "What is the output of a MUX determined by?",
    options: [
      "Only input lines",
      "Only select lines",
      "Both input and select lines",
      "Clock signal"
    ],
    correctAnswerIndex: 2
  },
  {
    questionText: "How many data inputs does an 8:1 Multiplexer have?",
    options: ["4", "6", "8", "16"],
    correctAnswerIndex: 2
  }
],
tryYourself: { link: "https://www.falstad.com/circuit/" }
  },
{
  title: "IC-74LS138 Demultiplexer",
  shortDesc: "Implement full adder/subtractor using decoders.",
  info: {
    aim: "To study Decoders/Demultiplexers and their applications using IC 74LS138.",
    theory: "A Demultiplexer (DEMUX) is a combinational circuit that takes a single input and routes it to one of many output lines based on select inputs. It performs the reverse operation of a multiplexer.\n\nThe IC 74LS138 is a 3-to-8 line decoder, which can also function as a demultiplexer. It has 3 select inputs (A, B, C) and 8 outputs (Y0 to Y7). Depending on the combination of select inputs, one of the outputs becomes active (LOW), while all others remain HIGH.\n\nThis IC includes three enable inputs: two active LOW (G2A, G2B) and one active HIGH (G1). The decoder works only when G1 = HIGH and G2A = G2B = LOW.\n\nIn demultiplexer mode, a single data input can be connected through the enable pins, and the select lines determine which output receives the signal.\n\nThe IC 74LS138 is widely used in digital systems for memory decoding, implementing combinational logic functions like full adders/subtractors, and data routing applications."
  },
 demoVideoUrl: "https://youtu.be/Icp6MTVAzn4?si=E2Wzw5DZ4lEzUA3V",
  quiz: [
    {
      questionText: "A 3-to-8 decoder has how many output lines?",
      options: ["3", "6", "8", "11"],
      correctAnswerIndex: 2
    },
    {
      questionText: "How many select inputs are present in IC 74LS138?",
      options: ["2", "3", "4", "8"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the active state of outputs in IC 74LS138?",
      options: [
        "Active HIGH",
        "Active LOW",
        "Tri-state",
        "Floating"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which condition enables the IC 74LS138 to operate?",
      options: [
        "G1 = LOW, G2A = HIGH, G2B = HIGH",
        "G1 = HIGH, G2A = LOW, G2B = LOW",
        "All enables HIGH",
        "All enables LOW"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the main function of a demultiplexer?",
      options: [
        "Combine multiple inputs into one output",
        "Convert analog to digital",
        "Route one input to multiple outputs",
        "Store data"
      ],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
  {
  title: "IC-74LS83 BCD Adder",
  shortDesc: "Design 1 digit BCD adder and 4-bit Binary Adder.",
  info: {
    aim: "To implement binary and BCD addition using IC-74LS83.",
    theory: "The IC 74LS83 is a 4-bit binary full adder capable of adding two 4-bit binary numbers along with a carry input. It produces a 4-bit sum and a carry output. This IC is widely used for arithmetic operations in digital systems.\n\nIn Binary Coded Decimal (BCD) addition, each decimal digit is represented by its 4-bit binary equivalent (0000 to 1001). When two BCD digits are added using a binary adder like IC 74LS83, the result may exceed the valid BCD range (i.e., greater than 9 or 1001).\n\nTo correct this, an additional correction step is required. If the sum is greater than 1001 (decimal 9) or if a carry is generated, then 0110 (decimal 6) is added to the result. This ensures the output remains a valid BCD representation.\n\nThus, a BCD adder is implemented using two IC 74LS83 adders: one for initial addition and another for adding the correction factor (0110) when required. This design is commonly used in calculators and digital display systems."
  },
 demoVideoUrl: "https://youtu.be/2IoNEBtWGvw?si=JUWsdQE-vUK6Lti7",
  quiz: [
    {
      questionText: "In BCD addition, when is 0110 added to the sum?",
      options: [
        "Always",
        "When sum > 9 or carry is generated",
        "When sum < 9",
        "Never"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What type of adder is IC 74LS83?",
      options: [
        "Half adder",
        "Full adder",
        "4-bit binary full adder",
        "BCD adder"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the valid range of BCD digits?",
      options: [
        "0000 to 1111",
        "0000 to 1001",
        "0001 to 1010",
        "0010 to 1110"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "How many bits can IC 74LS83 add at a time?",
      options: ["2", "3", "4", "8"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Why is correction required in BCD addition?",
      options: [
        "To reduce power consumption",
        "To simplify circuit",
        "To convert invalid binary result into valid BCD",
        "To increase speed"
      ],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
 {
  title: "IC-74LS85 Magnitude Comparator",
  shortDesc: "Design 4-bit and 8-bit comparators.",
  info: {
    aim: "To compare binary numbers using magnitude comparators.",
    theory: "A Magnitude Comparator is a combinational circuit used to compare two binary numbers and determine their relative magnitude. It indicates whether one number is greater than, less than, or equal to another.\n\nThe IC 74LS85 is a 4-bit magnitude comparator that compares two 4-bit binary inputs (A3–A0 and B3–B0). It provides three outputs: A > B (greater than), A < B (less than), and A = B (equal).\n\nFor comparison of larger bit numbers such as 8-bit numbers, multiple IC 74LS85 comparators can be cascaded. The outputs of one comparator are connected to the cascade inputs of the next higher-order comparator to extend the comparison.\n\nThe IC also includes cascading inputs (A > B_in, A < B_in, A = B_in) which allow chaining multiple comparators for higher-bit comparisons.\n\nMagnitude comparators are widely used in digital systems for decision-making operations, sorting circuits, and arithmetic logic units (ALUs)."
  },
 demoVideoUrl: "https://youtu.be/6Y5ske4p6fE?si=gV5MQHBJWl0YP2uM",
  quiz: [
    {
      questionText: "How many output pins does a basic magnitude comparator have?",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What does IC 74LS85 compare?",
      options: [
        "Analog signals",
        "4-bit binary numbers",
        "Decimal numbers",
        "8-bit ASCII values"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which output indicates equality in IC 74LS85?",
      options: ["A > B", "A < B", "A = B", "Carry"],
      correctAnswerIndex: 2
    },
    {
      questionText: "How can we compare 8-bit numbers using IC 74LS85?",
      options: [
        "Using one IC only",
        "Using a decoder",
        "By cascading two comparators",
        "Using a multiplexer"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What are the three outputs of a magnitude comparator?",
      options: [
        "Sum, Carry, Borrow",
        "Input, Output, Enable",
        "Greater than, Less than, Equal",
        "High, Low, Floating"
      ],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
  {
  title: "Counter ICs (74LS90/74LS93)",
  shortDesc: "Implement MOD-N counters and timing diagrams.",
  info: {
    aim: "To design and analyze asynchronous counters using IC 74LS90 and 74LS93.",
    theory: "Counters are sequential logic circuits that count clock pulses and progress through a predefined sequence of states. They are widely used in digital electronics for timing, frequency division, and event counting.\n\nIC 74LS90 is a decade (MOD-10) counter, which counts from 0 to 9 and then resets automatically. It is composed of internal divide-by-2 and divide-by-5 sections, allowing flexible configuration for different MOD values.\n\nIC 74LS93 is a 4-bit binary ripple counter (MOD-16), which counts from 0 to 15. It is an asynchronous counter where flip-flops are triggered sequentially, causing a ripple effect.\n\nMOD-N counters can be designed by resetting the counter at a specific count before it completes its natural sequence. This is achieved using external logic gates connected to reset inputs.\n\nSince these are asynchronous (ripple) counters, there is a propagation delay between flip-flops, which affects timing diagrams. These timing diagrams show how output bits change with respect to clock pulses.\n\nCounters are essential in applications such as digital clocks, frequency dividers, timers, and control circuits."
  },
 demoVideoUrl: "https://drive.google.com/drive/folders/1LuRafpKIPhwacD977V0e0pHGFKUGsWuG?usp=sharing",
  quiz: [
    {
      questionText: "A MOD-10 counter has how many unique states?",
      options: ["5", "9", "10", "16"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the modulus of IC 74LS93?",
      options: ["8", "10", "16", "12"],
      correctAnswerIndex: 2
    },
    {
      questionText: "IC 74LS90 is commonly used as which type of counter?",
      options: [
        "Binary counter",
        "Decade counter",
        "Ring counter",
        "Up-down counter"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Why are 74LS90 and 74LS93 called asynchronous counters?",
      options: [
        "They use no clock",
        "All flip-flops trigger simultaneously",
        "Flip-flops trigger one after another (ripple effect)",
        "They are analog circuits"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "How can a MOD-N counter be implemented?",
      options: [
        "By increasing clock frequency",
        "By using a multiplexer",
        "By resetting the counter at a desired count",
        "By using only AND gates"
      ],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
  {
  title: "Pulse Train Generator",
  shortDesc: "Implement ring counter and twisted ring counter.",
  info: {
    aim: "To implement ring counter and twisted ring counter using shift registers (IC 74HC194).",
    theory: "A Pulse Train Generator is a sequential circuit used to generate a sequence of pulses in a specific pattern. It is commonly implemented using shift registers.\n\nA Ring Counter is a type of shift register where the output of the last flip-flop is fed back to the input of the first flip-flop. It circulates a single ‘1’ (or ‘0’) through the register, producing a repeating sequence. For an n-bit ring counter, the number of states is n.\n\nA Twisted Ring Counter, also known as a Johnson Counter, is similar but the inverted output of the last flip-flop is fed back to the input of the first flip-flop. This results in a sequence of 2n states for an n-bit register, making it more efficient than a simple ring counter.\n\nThe IC 74HC194 is a universal shift register that supports shift left, shift right, parallel load, and hold operations. It is commonly used to implement these counters by controlling the mode select inputs.\n\nPulse train generators are used in timing circuits, digital systems, sequence generators, and control applications."
  },
 demoVideoUrl: "https://youtu.be/p0wGioNtYXo?si=yZDWgOqp0LKZEL8b",
  quiz: [
    {
      questionText: "Which counter is also known as a Johnson counter?",
      options: [
        "Ring Counter",
        "Twisted Ring Counter",
        "Ripple Counter",
        "Decade Counter"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "How many states does an n-bit ring counter have?",
      options: ["n", "2n", "n-1", "2^n"],
      correctAnswerIndex: 0
    },
    {
      questionText: "How many states does an n-bit Johnson counter have?",
      options: ["n", "2n", "n^2", "2^n"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is fed back in a twisted ring counter?",
      options: [
        "Direct output",
        "Clock signal",
        "Inverted output",
        "Enable signal"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which IC is commonly used for implementing ring and twisted ring counters?",
      options: ["74LS83", "74LS138", "74HC194", "74LS85"],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
 {
  title: "Measure Op-Amp Parameters",
  shortDesc: "Compare LM741, OP07, LF351 parameters.",
  info: {
    aim: "To measure input bias current, input offset voltage, CMRR, and slew rate of different op-amps.",
    theory: "Operational Amplifiers (Op-Amps) are high-gain differential voltage amplifiers widely used in analog electronics for amplification, filtering, and signal processing.\n\nCommon op-amps such as LM741, OP07, and LF351 differ in performance characteristics. The LM741 is a general-purpose op-amp, OP07 is a precision op-amp with very low offset voltage, and LF351 is a JFET-input op-amp with high input impedance and fast response.\n\nImportant parameters of op-amps include:\n\n1. Input Bias Current: The small current required at the input terminals for proper operation.\n2. Input Offset Voltage: The differential input voltage required to make the output zero.\n3. CMRR (Common Mode Rejection Ratio): The ability of the op-amp to reject common-mode signals.\n4. Slew Rate: The maximum rate of change of output voltage per unit time, indicating how fast the op-amp can respond.\n\nIn an ideal op-amp, input impedance is infinite, output impedance is zero, gain is infinite, and bandwidth is infinite. Practical op-amps approximate these ideal characteristics.\n\nThese parameters are measured experimentally and compared to evaluate the performance of different op-amps in real-world applications."
  },
 demoVideoUrl: "https://youtu.be/mS05dBFHGBc?si=f-6dZzYxeRv3YvUN",
  quiz: [
    {
      questionText: "What is the ideal input impedance of an Op-Amp?",
      options: ["Zero", "100 ohms", "Infinite", "Negative"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which op-amp is known for very low offset voltage?",
      options: ["LM741", "OP07", "LF351", "555 Timer"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What does CMRR stand for?",
      options: [
        "Common Mode Rejection Ratio",
        "Current Mode Resistance Ratio",
        "Capacitance Mode Response Rate",
        "Common Mode Response Range"
      ],
      correctAnswerIndex: 0
    },
    {
      questionText: "What does slew rate measure?",
      options: [
        "Input resistance",
        "Rate of change of output voltage",
        "Power consumption",
        "Frequency response"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which op-amp uses JFET input stage?",
      options: ["LM741", "OP07", "LF351", "74LS83"],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
 {
  title: "Op-Amp Integrator",
  shortDesc: "Design, build and test an integrator circuit.",
  info: {
    aim: "To design and analyze an op-amp integrator circuit for integrating input waveforms.",
    theory: "An Op-Amp Integrator is an analog circuit that performs mathematical integration of the input signal with respect to time. It is implemented using an operational amplifier with a resistor at the input and a capacitor in the feedback path.\n\nWhen a signal is applied to the input, the output voltage is proportional to the integral of the input voltage. For example, when a square wave is applied, the output becomes a triangular wave, and when a constant (DC) input is applied, the output is a ramp signal.\n\nThe basic integrator configuration consists of an input resistor (R) and a feedback capacitor (C). The output voltage is given by:\nVout = - (1/RC) ∫ Vin dt\n\nIn practical integrators, a resistor is often added in parallel with the capacitor to prevent saturation and improve stability.\n\nIntegrators are widely used in signal processing, waveform generation, analog computers, and control systems."
  },
 demoVideoUrl: "https://drive.google.com/file/d/1JLPb71A5_JxBjIcJ0JumXoawM-IBY64n/view?usp=drive_link",
  quiz: [
    {
      questionText: "An integrator uses which component in its feedback loop?",
      options: ["Resistor", "Capacitor", "Inductor", "Diode"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What type of waveform is obtained when a square wave is applied to an integrator?",
      options: ["Sine wave", "Triangle wave", "Square wave", "Pulse"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is placed at the input of an op-amp integrator?",
      options: ["Capacitor", "Inductor", "Resistor", "Diode"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Why is a resistor added parallel to the capacitor in practical integrators?",
      options: [
        "To increase gain",
        "To reduce noise",
        "To prevent saturation and improve stability",
        "To increase bandwidth"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What type of output is obtained for a constant DC input?",
      options: ["Constant output", "Ramp output", "Zero output", "Oscillating output"],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
  {
  title: "Schmitt Trigger using Op-Amp",
  shortDesc: "Test Schmitt trigger using LF356.",
  info: {
    aim: "To implement and study hysteresis using an op-amp based Schmitt Trigger.",
    theory: "A Schmitt Trigger is a comparator circuit with positive feedback that introduces hysteresis. It converts a noisy or slowly varying analog input signal into a clean, stable digital output signal.\n\nUnlike a standard comparator, a Schmitt Trigger has two distinct threshold voltages: Upper Threshold Voltage (UTP) and Lower Threshold Voltage (LTP). The output switches HIGH when the input exceeds the upper threshold and switches LOW when the input falls below the lower threshold.\n\nThis difference between the two thresholds is called hysteresis, which helps eliminate noise and prevents false triggering due to small fluctuations in the input signal.\n\nAn op-amp like LF356 can be used to implement a Schmitt Trigger by applying positive feedback through a resistor network. The feedback determines the threshold levels.\n\nSchmitt Triggers are widely used in waveform shaping, signal conditioning, noise reduction, and digital interfacing applications."
  },
 demoVideoUrl: "https://drive.google.com/file/d/1wsjZIElwryTvf7OptMouBox_n6RORDEo/view?usp=drive_link",
  quiz: [
    {
      questionText: "What phenomenon is the primary feature of a Schmitt Trigger?",
      options: [
        "Integration",
        "Hysteresis",
        "Differentiation",
        "Modulation"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "How many threshold levels does a Schmitt Trigger have?",
      options: ["1", "2", "3", "Infinite"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What type of feedback is used in a Schmitt Trigger?",
      options: [
        "Negative feedback",
        "No feedback",
        "Positive feedback",
        "Mixed feedback"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "What is the main purpose of hysteresis?",
      options: [
        "Increase gain",
        "Reduce noise and avoid false triggering",
        "Amplify signal",
        "Increase frequency"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which op-amp is commonly used for Schmitt Trigger in this experiment?",
      options: ["LM741", "LF356", "OP07", "74LS85"],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
 {
  title: "Waveform Generator",
  shortDesc: "Design square and triangular waveform generators.",
  info: {
    aim: "To design and generate square and triangular waveforms using op-amp (LF351).",
    theory: "A waveform generator is an electronic circuit used to generate periodic signals such as square, triangular, and sine waves. In this experiment, square and triangular waveforms are generated using op-amps like LF351.\n\nThe circuit typically combines a Schmitt Trigger (comparator with hysteresis) and an integrator. The Schmitt Trigger generates a square wave output, while the integrator converts this square wave into a triangular waveform.\n\nAn astable multivibrator is a circuit that continuously switches between two states without any external triggering, producing a continuous square wave. It has no stable states, hence the name 'astable'.\n\nThe frequency of oscillation depends on resistor and capacitor values in the circuit. By adjusting these components, different frequencies and amplitudes can be obtained.\n\nWaveform generators are widely used in signal processing, testing electronic circuits, communication systems, and instrumentation."
  },
 demoVideoUrl: "https://drive.google.com/file/d/1dntpZQLXkuDebXUImgDFUust0g3NNztF/view?usp=drive_link",
  quiz: [
    {
      questionText: "An astable multivibrator operates in how many stable states?",
      options: ["0", "1", "2", "3"],
      correctAnswerIndex: 0
    },
    {
      questionText: "Which op-amp is used in this waveform generator experiment?",
      options: ["LM741", "OP07", "LF351", "74LS138"],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which circuit is used to convert square wave into triangular wave?",
      options: ["Amplifier", "Integrator", "Differentiator", "Comparator"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What type of waveform is generated by a Schmitt Trigger?",
      options: ["Sine wave", "Triangular wave", "Square wave", "Sawtooth wave"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What determines the frequency of the waveform generator?",
      options: [
        "Only voltage supply",
        "Resistor and capacitor values",
        "Only op-amp type",
        "Temperature"
      ],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},  {
  title: "Single Stage CS Amplifier (DC)",
  shortDesc: "Verify DC operating point.",
  info: {
    aim: "To design a common-source (CS) amplifier and verify its DC operating point.",
    theory: "A Common-Source (CS) amplifier is a basic field-effect transistor (FET) amplifier configuration widely used for voltage amplification. In this configuration, the source terminal is common to both input and output.\n\nThe DC operating point, also known as the Q-point (quiescent point), is crucial for proper amplifier operation. It determines the biasing conditions of the FET and ensures that the device operates in the correct region.\n\nFor proper amplification, the FET must operate in the saturation (active) region, where the drain current is relatively constant and controlled by the gate-source voltage (Vgs).\n\nBiasing circuits are used to set the Q-point by fixing values of Vgs, Vds, and Id. A stable Q-point ensures minimal distortion and allows maximum symmetrical output signal swing.\n\nIf the FET operates in cut-off or triode region, the amplifier will not function properly, leading to distortion or no amplification.\n\nThus, verifying the DC operating point is essential for reliable performance of a CS amplifier."
  },
demoVideoUrl: "https://drive.google.com/file/d/1Jh5V3IffMN-szYlOeyCdw3z2dY6mXqVw/view?usp=drive_link",
  quiz: [
    {
      questionText: "Which region must the FET operate in for amplification?",
      options: ["Cut-off", "Triode", "Saturation", "Breakdown"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What does Q-point stand for?",
      options: [
        "Quick point",
        "Quiescent point",
        "Quantum point",
        "Quality point"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "In a CS amplifier, which terminal is common?",
      options: ["Gate", "Drain", "Source", "Body"],
      correctAnswerIndex: 2
    },
    {
      questionText: "What parameter mainly controls drain current in saturation region?",
      options: [
        "Drain voltage (Vds)",
        "Gate-source voltage (Vgs)",
        "Supply voltage",
        "Temperature"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What happens if the Q-point is not set properly?",
      options: [
        "No effect",
        "Improved gain",
        "Distortion in output",
        "Infinite output"
      ],
      correctAnswerIndex: 2
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
},
 {
  title: "CS Amplifier Frequency Response",
  shortDesc: "Calculate Av, Ri, Ro & bandwidth.",
  info: {
    aim: "To analyze and plot the frequency response of a common-source amplifier and determine gain, input resistance, output resistance, and bandwidth.",
    theory: "The frequency response of a Common-Source (CS) amplifier describes how its gain varies with frequency. It is typically divided into three regions: low-frequency region, mid-frequency region, and high-frequency region.\n\nIn the mid-frequency region, the gain (Av) remains approximately constant. At low frequencies, coupling and bypass capacitors affect the gain, causing it to decrease. At high frequencies, parasitic capacitances reduce the gain.\n\nThe bandwidth of the amplifier is defined as the range of frequencies between the lower cut-off frequency (fL) and upper cut-off frequency (fH), within which the gain remains relatively constant.\n\nAt the cut-off frequencies, the gain drops to 0.707 times its maximum value, which corresponds to a decrease of -3 dB.\n\nKey parameters include:\n- Voltage Gain (Av): Ratio of output voltage to input voltage.\n- Input Resistance (Ri): Resistance seen by the input source.\n- Output Resistance (Ro): Resistance seen at the output.\n\nUnderstanding frequency response is essential for designing amplifiers that operate effectively over a desired frequency range."
  },
demoVideoUrl: "https://youtu.be/HuE1OSIZUDM?si=-kf7fCilEToXZSO1",
  quiz: [
    {
      questionText: "At the cut-off frequencies, the gain drops by how many decibels?",
      options: ["-1 dB", "-3 dB", "-10 dB", "-20 dB"],
      correctAnswerIndex: 1
    },
    {
      questionText: "What is the gain level at cut-off frequency relative to maximum gain?",
      options: [
        "0.5 times",
        "0.707 times",
        "1.0 times",
        "2 times"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "What defines the bandwidth of an amplifier?",
      options: [
        "Maximum gain",
        "Input resistance",
        "Range between lower and upper cut-off frequencies",
        "Power consumption"
      ],
      correctAnswerIndex: 2
    },
    {
      questionText: "Which components mainly affect low-frequency response?",
      options: [
        "Transistor only",
        "Coupling and bypass capacitors",
        "Power supply",
        "Resistors only"
      ],
      correctAnswerIndex: 1
    },
    {
      questionText: "Which region has approximately constant gain?",
      options: [
        "Low-frequency region",
        "Mid-frequency region",
        "High-frequency region",
        "Cut-off region"
      ],
      correctAnswerIndex: 1
    }
  ],
  tryYourself: { link: "https://www.falstad.com/circuit/" }
}
];

module.exports=adeLabs;