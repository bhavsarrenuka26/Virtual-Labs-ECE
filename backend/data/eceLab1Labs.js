const eceLab1Labs = [

{
title:"AM Transmitter and Receiver",
shortDesc:"Generate AM signal and calculate modulation index.",
info:{
aim:"To observe AM waveforms and calculate modulation index.",
theory:"Amplitude Modulation (AM) is a modulation technique in which the amplitude of a high-frequency carrier signal is varied according to the instantaneous amplitude of the message signal, while frequency and phase remain constant. The modulation index (m) indicates the extent of modulation and is defined as the ratio of message amplitude to carrier amplitude. When m > 1, overmodulation occurs causing distortion. AM is widely used in radio broadcasting due to its simple transmitter and receiver design. However, it is highly susceptible to noise since noise directly affects amplitude."
},
 demoVideoUrl: "https://drive.google.com/drive/folders/1sSlyluHzCLqSHVVEtTg2XoAtgqpLA341?usp=drive_link",
quiz:[
{questionText:"What is varied in AM?",options:["Phase","Frequency","Amplitude","Time"],correctAnswerIndex:2},
{questionText:"What is modulation index?",options:["Frequency ratio","Amplitude ratio","Time delay","Phase shift"],correctAnswerIndex:1},
{questionText:"Overmodulation causes?",options:["Clear signal","Distortion","Noise removal","Amplification"],correctAnswerIndex:1},
{questionText:"Carrier signal frequency is?",options:["Low","Zero","High","Variable"],correctAnswerIndex:2},
{questionText:"AM is most affected by?",options:["Noise","Speed","Voltage","Temperature"],correctAnswerIndex:0}
]
},

{
title:"FM Modulator and Demodulator",
shortDesc:"Calculate modulation index & bandwidth of FM.",
info:{
aim:"To observe FM spectrum and calculate bandwidth.",
theory:"Frequency Modulation (FM) is a technique where the frequency of the carrier signal is varied in accordance with the amplitude of the modulating signal, while the amplitude remains constant. FM provides better noise immunity compared to AM because noise affects amplitude rather than frequency. The modulation index in FM is the ratio of frequency deviation to modulating frequency. Bandwidth is calculated using Carson’s rule. FM is widely used in high-fidelity broadcasting systems."
},
 demoVideoUrl: "https://drive.google.com/drive/folders/1uEvO_YJHDakBuu70DLHGMsr2K1f6a06J?usp=drive_link",
quiz:[
{questionText:"FM varies which parameter?",options:["Amplitude","Frequency","Phase","Time"],correctAnswerIndex:1},
{questionText:"FM is resistant to?",options:["Noise","Voltage","Current","Delay"],correctAnswerIndex:0},
{questionText:"Carrier amplitude in FM is?",options:["Variable","Zero","Constant","Random"],correctAnswerIndex:2},
{questionText:"Bandwidth depends on?",options:["Time","Voltage","Deviation","Resistance"],correctAnswerIndex:2},
{questionText:"FM quality is?",options:["Low","Moderate","High","None"],correctAnswerIndex:2}
]
},

{
title:"Sampling Theorem & PAM",
shortDesc:"Verify sampling theorem and observe aliasing.",
info:{
aim:"To generate PAM and verify Nyquist theorem.",
theory:"The Sampling Theorem states that a continuous-time signal can be reconstructed from its samples if it is sampled at a frequency at least twice the maximum frequency of the signal (Nyquist rate). Pulse Amplitude Modulation (PAM) represents sampled values as pulses. If sampling frequency is below Nyquist rate, aliasing occurs, causing distortion. This experiment demonstrates importance of correct sampling in digital systems."
},
demoVideoUrl:"https://drive.google.com/drive/folders/1uEvO_YJHDakBuu70DLHGMsr2K1f6a06J?usp=drive_link",
quiz:[
{questionText:"Nyquist rate is?",options:["fm","2fm","fm/2","4fm"],correctAnswerIndex:1},
{questionText:"Aliasing occurs when?",options:["High sampling","Low sampling","No sampling","Equal sampling"],correctAnswerIndex:1},
{questionText:"PAM represents?",options:["Frequency","Phase","Amplitude pulses","Noise"],correctAnswerIndex:2},
{questionText:"Sampling converts?",options:["Digital to analog","Analog to discrete","Noise to signal","Voltage to current"],correctAnswerIndex:1},
{questionText:"Aliasing causes?",options:["Clear output","Distortion","Amplification","Filtering"],correctAnswerIndex:1}
]
},

{
title:"PCM Signaling Rate",
shortDesc:"Determine signaling rate and bandwidth.",
info:{
aim:"To generate PCM and calculate data rate.",
theory:"PCM converts analog signals into digital form through sampling, quantization, and encoding. It provides high noise immunity and is widely used in digital communication systems. Quantization introduces small error known as quantization noise. PCM requires higher bandwidth compared to analog signals. It is used in telephony and digital audio systems."
},
demoVideoUrl:"https://drive.google.com/drive/folders/1pXl_39hqsJWtxo17nXyytmGd_F-vtVJx?usp=drive_link",
quiz:[
{questionText:"Final step in PCM?",options:["Sampling","Quantizing","Encoding","Filtering"],correctAnswerIndex:2},
{questionText:"PCM output is?",options:["Analog","Digital","Noise","Frequency"],correctAnswerIndex:1},
{questionText:"Quantization does?",options:["Sampling","Level mapping","Filtering","Amplifying"],correctAnswerIndex:1},
{questionText:"PCM improves?",options:["Noise immunity","Speed","Voltage","Power"],correctAnswerIndex:0},
{questionText:"PCM requires?",options:["Low bandwidth","High bandwidth","No bandwidth","Fixed voltage"],correctAnswerIndex:1}
]
},

{
title:"Line Codes (NRZ, RZ, AMI)",
shortDesc:"Sketch waveforms and determine bandwidth.",
info:{
aim:"To study line coding techniques.",
theory:"Line coding converts digital data into electrical signals for transmission. NRZ maintains constant voltage, RZ returns to zero in each bit, and AMI alternates polarity of ones. These techniques affect synchronization and bandwidth. Proper line coding improves efficiency."
},
demoVideoUrl:"https://drive.google.com/drive/folders/1u7mnUlqYauDv1mg2UiRZln-lbCaNg6Rn?usp=drive_link",
quiz:[
{questionText:"RZ returns to zero?",options:["Start","Middle","End","Never"],correctAnswerIndex:1},
{questionText:"AMI reduces?",options:["Noise","DC component","Frequency","Power"],correctAnswerIndex:1},
{questionText:"NRZ is?",options:["Complex","Simple","Analog","Digital"],correctAnswerIndex:1},
{questionText:"Line coding is used in?",options:["Transmission","Amplifier","Filter","Motor"],correctAnswerIndex:0},
{questionText:"AMI uses?",options:["One level","Two levels","Three levels","Zero levels"],correctAnswerIndex:2}
]
},

{
title:"Baseband Receiver Performance",
shortDesc:"Verify performance in noise.",
info:{
aim:"To study noise effects.",
theory:"Noise in communication systems leads to errors in received signals. Performance is evaluated using BER (Bit Error Rate). Higher noise increases BER. Signal-to-Noise Ratio (SNR) determines quality. Systems are designed to minimize noise impact."
},
demoVideoUrl:"https://youtu.be/lOI5MhNSaJE?si=uY1xxCo6JxotLFYn",
quiz:[
{questionText:"Performance metric?",options:["Voltage","BER","Power","Speed"],correctAnswerIndex:1},
{questionText:"Noise causes?",options:["Accuracy","Errors","Amplification","Filtering"],correctAnswerIndex:1},
{questionText:"BER measures?",options:["Speed","Errors","Voltage","Time"],correctAnswerIndex:1},
{questionText:"High noise leads to?",options:["Better signal","Errors","No signal","Amplification"],correctAnswerIndex:1},
{questionText:"Receiver reduces?",options:["Signal","Noise","Voltage","Current"],correctAnswerIndex:1}
]
},

{
title:"BFSK Transmitter and Receiver",
shortDesc:"Observe FSK signals.",
info:{
aim:"To study BFSK.",
theory:"BFSK uses two frequencies to represent binary data. It is robust against noise and used in digital communication. Frequency switching encodes data."
},
demoVideoUrl:"https://youtu.be/un0ZlaqDMhQ?si=_Lt_6PKZ_YlJfaOO",
quiz:[
{questionText:"BFSK uses frequencies?",options:["1","2","4","8"],correctAnswerIndex:1},
{questionText:"Represents?",options:["Amplitude","Frequency","Phase","Time"],correctAnswerIndex:1},
{questionText:"Binary 1 uses?",options:["Same","Different","None","Random"],correctAnswerIndex:1},
{questionText:"FSK resistant to?",options:["Noise","Voltage","Power","Speed"],correctAnswerIndex:0},
{questionText:"BFSK is?",options:["Analog","Digital","Hybrid","Mechanical"],correctAnswerIndex:1}
]
},

{
title:"GPIO LED Blink (ESP32)",
shortDesc:"Toggle LED.",
info:{
aim:"To control GPIO.",
theory:"GPIO pins allow microcontrollers to interact with devices. LED blinking shows digital output control. HIGH turns ON, LOW turns OFF."
},
demoVideoUrl:"https://youtu.be/-cQDTK7xXZk?si=9G7Xy9ZnlTYRZkrJ",
quiz:[
{questionText:"GPIO stands for?",options:["General Purpose Input Output","Global IO","Gate IO","General Pin"],correctAnswerIndex:0},
{questionText:"LED uses?",options:["Analog","Digital","PWM","Freq"],correctAnswerIndex:1},
{questionText:"HIGH means?",options:["0V","OFF","ON","None"],correctAnswerIndex:2},
{questionText:"LOW means?",options:["ON","OFF","HIGH","Signal"],correctAnswerIndex:1},
{questionText:"GPIO are?",options:["Fixed","Programmable","Analog","Unused"],correctAnswerIndex:1}
]
},

{
title:"Wi-Fi Network Scanner",
shortDesc:"Scan networks.",
info:{
aim:"To scan Wi-Fi.",
theory:"ESP32 scans networks and shows SSID and RSSI. RSSI measures signal strength. Used in wireless communication."
},
demoVideoUrl:"https://youtu.be/HaZBxCuhPfE?si=CRfy7nW01wX0A7ph",
quiz:[
{questionText:"RSSI measures?",options:["Signal strength","Speed","Data","Voltage"],correctAnswerIndex:0},
{questionText:"SSID is?",options:["Signal","Name","Password","IP"],correctAnswerIndex:1},
{questionText:"Wi-Fi uses?",options:["Wires","Radio","Fiber","USB"],correctAnswerIndex:1},
{questionText:"ESP32 supports?",options:["Wi-Fi","Ethernet","USB","Only BT"],correctAnswerIndex:0},
{questionText:"Strong RSSI?",options:["Weak","Strong","None","Error"],correctAnswerIndex:1}
]
},

{
title:"PWM LED Dimming",
shortDesc:"Control brightness.",
info:{
aim:"To vary brightness.",
theory:"PWM controls brightness by varying duty cycle. Higher duty cycle gives more brightness. Used in motor and LED control."
},
demoVideoUrl:"https://youtu.be/U4NSoW90THk?si=AOnb34isFQhrAbHl",
quiz:[
{questionText:"PWM varies?",options:["Voltage","Freq","Duty cycle","Time"],correctAnswerIndex:2},
{questionText:"Higher duty?",options:["Dim","Bright","Off","Low"],correctAnswerIndex:1},
{questionText:"PWM is?",options:["Analog","Digital","Hybrid","None"],correctAnswerIndex:1},
{questionText:"Used in?",options:["Motor","LED","Both","None"],correctAnswerIndex:2},
{questionText:"Duty cycle 50% means?",options:["Half ON","Always ON","OFF","None"],correctAnswerIndex:0}
]
},

{
title: "USART Asynchronous Communication",
shortDesc: "Write a program that echoes characters.",
info: {
aim: "To configure USART peripheral using HAL and transmit/receive data.",
theory: "USART (Universal Synchronous/Asynchronous Receiver Transmitter) is a communication protocol used for serial data transmission. In asynchronous mode (UART), data is transmitted without a shared clock, using start and stop bits for synchronization. Data is sent bit-by-bit over a single line, making it simple and efficient for short-distance communication. Parameters like baud rate, parity, stop bits, and data bits must match on both transmitting and receiving devices. USART is widely used in embedded systems for debugging, communication with sensors, and interfacing with computers."
},
demoVideoUrl:"https://youtu.be/LvXIntiy_DU?si=_iQVxQQZnEd4Vcx0",
quiz: [
{questionText:"What does the 'A' in USART stand for?",options:["Analog","Asynchronous","Advanced","Arithmetic"],correctAnswerIndex:1},
{questionText:"UART communication uses?",options:["Clock signal","No clock","Parallel lines","Fiber"],correctAnswerIndex:1},
{questionText:"Which parameter must match in UART?",options:["Voltage","Baud rate","Temperature","Power"],correctAnswerIndex:1},
{questionText:"Start bit indicates?",options:["End","Beginning","Error","Stop"],correctAnswerIndex:1},
{questionText:"USART is used for?",options:["Parallel comm","Serial comm","Power supply","Amplification"],correctAnswerIndex:1}
]
},

{
title: "DC Motor Speed Control",
shortDesc: "Use potentiometer to vary PWM duty cycle.",
info: {
aim: "To control motor speed using STM32 timers and PWM.",
theory: "DC motor speed control is achieved using Pulse Width Modulation (PWM), where the average voltage applied to the motor is varied by changing the duty cycle of the PWM signal. A potentiometer acts as a voltage divider, producing an analog voltage which is read by an Analog-to-Digital Converter (ADC). The microcontroller uses this ADC value to adjust the PWM duty cycle accordingly. Higher duty cycle results in higher motor speed. This method is efficient and widely used in robotics, automation, and control systems."
},
demoVideoUrl:"https://youtu.be/TvacIiEwWFw?si=2fkXFX4SK2qH_s05",
quiz: [
{questionText:"Which component reads the potentiometer voltage?",options:["DAC","ADC","PWM","UART"],correctAnswerIndex:1},
{questionText:"Motor speed depends on?",options:["Frequency","Voltage","Current","Duty cycle"],correctAnswerIndex:3},
{questionText:"PWM controls?",options:["Voltage directly","Duty cycle","Current only","Resistance"],correctAnswerIndex:1},
{questionText:"Potentiometer is?",options:["Sensor","Voltage divider","Amplifier","Filter"],correctAnswerIndex:1},
{questionText:"Higher duty cycle means?",options:["Slow speed","High speed","Stop","Reverse"],correctAnswerIndex:1}
]
},

{
title: "Ultrasonic Sensor (HC-SR04)",
shortDesc: "Calculate distance based on pulse width.",
info: {
aim: "To measure distance using ultrasonic sensor.",
theory: "The HC-SR04 ultrasonic sensor measures distance by emitting ultrasonic waves and measuring the time taken for the echo to return after reflecting from an object. The sensor requires a trigger pulse (typically 10 microseconds) to start measurement. The time of flight is proportional to the distance. Distance is calculated using the formula: Distance = (Time × Speed of Sound) / 2. Division by 2 accounts for the forward and return journey of the wave. This sensor is widely used in robotics, obstacle detection, and distance measurement systems."
},
demoVideoUrl:"https://youtu.be/TvacIiEwWFw?si=2fkXFX4SK2qH_s05",
quiz: [
{questionText:"Why divide time by 2?",options:["Speed doubles","Round trip","Clock fast","Hardware"],correctAnswerIndex:1},
{questionText:"Sensor uses?",options:["Light","Sound","Heat","Magnet"],correctAnswerIndex:1},
{questionText:"Speed of sound approx?",options:["100 m/s","340 m/s","1000 m/s","10 m/s"],correctAnswerIndex:1},
{questionText:"Trigger pulse duration?",options:["1ms","10μs","1s","100ms"],correctAnswerIndex:1},
{questionText:"Used in?",options:["Audio","Robotics","Display","Power"],correctAnswerIndex:1}
]
},

{
title: "External EEPROM (I2C/SPI)",
shortDesc: "Write/read byte sequence to memory.",
info: {
aim: "To interface EEPROM using I2C/SPI protocols.",
theory: "EEPROM (Electrically Erasable Programmable Read-Only Memory) is a non-volatile memory used to store data permanently, even after power is removed. It communicates using protocols like I2C or SPI. Devices like 24LCxx use I2C, while 25LCxx use SPI. Data can be written and read in bytes or pages. EEPROM is widely used in embedded systems for storing configuration data, calibration values, and user settings. Its advantage is low power consumption and reliable data retention."
},
quiz: [
{questionText:"Which protocol used in 24LCxx?",options:["UART","I2C","Parallel","CAN"],correctAnswerIndex:1},
{questionText:"EEPROM is?",options:["Volatile","Non-volatile","Temporary","Cache"],correctAnswerIndex:1},
{questionText:"SPI uses?",options:["1 line","2 lines","4 lines","Parallel"],correctAnswerIndex:2},
{questionText:"EEPROM stores?",options:["Temporary","Permanent data","Power","Signals"],correctAnswerIndex:1},
{questionText:"I2C uses how many lines?",options:["1","2","3","4"],correctAnswerIndex:1}
]
}

];
module.exports=eceLab1Labs;