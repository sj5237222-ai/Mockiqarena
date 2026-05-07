const questions = [
  {
    id: 1,
    subject: "Physics",
    chapter: "Units & Dimensions",

    question: "SI unit of Force is?",

    options: [
      "Newton",
      "Joule",
      "Pascal",
      "Watt",
    ],

    answer: 0,

    explanation:
      "Force is measured in Newton (N) according to SI units.",
  },

  {
    id: 2,
    subject: "Physics",
    chapter: "Motion",

    question: "Velocity is a?",

    options: [
      "Scalar quantity",
      "Vector quantity",
      "Neither",
      "Both",
    ],

    answer: 1,

    explanation:
      "Velocity has both magnitude and direction, therefore it is a vector quantity.",
  },

  {
    id: 3,
    subject: "Chemistry",
    chapter: "pH",

    question: "pH of pure water is?",

    options: [
      "5",
      "6",
      "7",
      "8",
    ],

    answer: 2,

    explanation:
      "Pure water is neutral at 25°C therefore pH is 7.",
  },

  {
    id: 4,
    subject: "Biology",
    chapter: "Cell",

    question: "Powerhouse of cell is?",

    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondria",
      "Golgi body",
    ],

    answer: 2,

    explanation:
      "Mitochondria produce ATP energy for the cell, hence called powerhouse of the cell.",
  },
];

export default questions;
