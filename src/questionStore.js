class QuestionStore {
    constructor(questions) {
      this.questions = questions;
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questions.filter(q => q.difficulty === difficulty);
    }
  }
  
  module.exports = QuestionStore;
  