import { Quiz } from "./index.types";

const quiz: Quiz = {
  quizName: "Marvel Cinematic Universe",
  playTime: "5 minutes",
  questions: [
    {
      questionText:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          text: "22",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        },
        {
          text: "89",
          isRight: false
        },
        {
          text: "67",
          isRight: false
        }
      ]
    },
    {
      questionText:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      negativePoints: 22,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true
        }
      ]
    },
    {
      questionText: "who's the love interest for Wanda in MCU?",
      points: 5,
      options: [
        {
          text: "Clint",
          isRight: false
        },
        {
          text: "Vision",
          isRight: true
        }
      ]
    }
  ]
};


export { quiz };
