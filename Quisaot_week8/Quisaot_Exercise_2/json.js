const jsonData = '{"name": "MJ", "age": 22, "hobbies": ["riding", "playing", "relaxing"]}';

const button = document.getElementById('changeTextBtn');
const header = document.getElementById('header');
const jsonDataElement = document.getElementById('jsonData');

const parsedData = JSON.parse(jsonData);

button.addEventListener('click', function() {
  header.textContent = 'You made the magic happen!';
  jsonDataElement.textContent = `Name: ${parsedData.name}, Age: ${parsedData.age}, Hobbies: ${parsedData.hobbies.join(", ")}`;
});
