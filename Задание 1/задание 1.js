// Создание экземпляра класса DOMParser.
const parser = new DOMParser();
// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const studentsNode = xmlDOM.querySelectorAll("student");
let result = [];
studentsNode.forEach(student => {
  result.push( {
    //здесь получаете данные
    name: student.querySelector("first").textContent + ' ' + student.querySelector("second").textContent, 
    age: student.querySelector("age").textContent, 
    prof: student.querySelector("prof").textContent,
    lang: student.querySelector("name").getAttribute('lang'),
  });
});
console.log('result', result);