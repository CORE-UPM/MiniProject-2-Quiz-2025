// Load ORM
const Sequelize = require('sequelize');

// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url);

const Quiz = require('./quiz')(sequelize);
const Attachment = require('./attachment')(sequelize);

// Relation 1-to-1 between Quiz and Attachment
Quiz.hasOne(Attachment, {as: 'attachment', foreignKey: 'quizId'});
Attachment.belongsTo(Quiz, {as: 'quiz', foreignKey: 'quizId'});

module.exports = sequelize;
