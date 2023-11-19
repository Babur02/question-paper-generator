// class QuestionPaperGenerator {
//     constructor(questionStore) {
//       this.questionStore = questionStore;
//     }

//     generateQuestionPaper(totalMarks, difficultyDistribution) {
//       // Logic to generate the question paper based on difficulty distribution
//       // ...
//       return questionPaper;
//     }
//   }

//   module.exports = QuestionPaperGenerator;
// src/questionPaperGenerator.js
class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];

    // Calculate the number of marks for each difficulty level
    const easyMarks = Math.ceil(totalMarks * difficultyDistribution.easy);
    const mediumMarks = Math.ceil(totalMarks * difficultyDistribution.medium);
    const hardMarks = Math.ceil(totalMarks * difficultyDistribution.hard);

    // Retrieve questions from the QuestionStore based on difficulty
    const easyQuestions = this.questionStore.getQuestionsByDifficulty("Easy");
    const mediumQuestions =
      this.questionStore.getQuestionsByDifficulty("Medium");
    const hardQuestions = this.questionStore.getQuestionsByDifficulty("Hard");

    // Add questions to the question paper
    questionPaper.push(...this.getRandomQuestions(easyQuestions, easyMarks));
    questionPaper.push(
      ...this.getRandomQuestions(mediumQuestions, mediumMarks)
    );
    questionPaper.push(...this.getRandomQuestions(hardQuestions, hardMarks));

    return questionPaper;
  }

  // Helper function to get a random subset of questions
  getRandomQuestions(questions, marks) {
    // Shuffle the array of questions to randomize the selection
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // Return a subset of questions based on the specified marks
    return shuffledQuestions.slice(0, marks);
  }
}

module.exports = QuestionPaperGenerator;
