const QuestionStore = require('./src/questionStore');
const QuestionPaperGenerator = require('./src/questionPaperGenerator');
const questions = require('./data');

// Create instances
const questionStore = new QuestionStore(questions);
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Sample usage
const totalMarks = 100;
const difficultyDistribution = { easy: 0.2, medium: 0.5, hard: 0.3 };

const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

console.log(generatedQuestionPaper);
