
const fs = require('fs');

const getUserData = () => {
  try {
    const userData = fs.readFileSync('user.json', 'utf8');
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error reading user data:', error.message);
    return null;
  }
};

const saveUserData = (userData) => {
  try {
    const dataToSave = JSON.stringify(userData, null, 2);
    fs.writeFileSync('user.json', dataToSave, 'utf8');
    console.log('User data saved successfully.');
  } catch (error) {
    console.error('Error saving user data:', error.message);
  }
};

const addLanguage = (title, level) => {
  const userData = getUserData();
  if (userData) {
    const newLanguage = { name: title, level };
    userData.languages.push(newLanguage);
    saveUserData(userData);
    console.log(`Language "${title}" added successfully.`);
  }
};

const removeLanguage = (title) => {
  const userData = getUserData();
  if (userData) {
    userData.languages = userData.languages.filter(lang => lang.name !== title);
    saveUserData(userData);
    console.log(`Language "${title}" removed successfully.`);
  }
};

const listLanguages = () => {
  const userData = getUserData();
  if (userData) {
    console.log('Languages:');
    userData.languages.forEach(lang => {
      console.log(`- ${lang.name} (Level: ${lang.level})`);
    });
  }
};

const readLanguage = (title) => {
  const userData = getUserData();
  if (userData) {
    const language = userData.languages.find(lang => lang.name === title);
    if (language) {
      console.log(`Language: ${language.name}`);
      console.log(`Level: ${language.level}`);
    } else {
      console.log(`Language "${title}" not found.`);
    }
  }
};

module.exports = {
  addLanguage,
  removeLanguage,
  listLanguages,
  readLanguage
};
