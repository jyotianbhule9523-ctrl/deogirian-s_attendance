let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

function saveStudent() {
  let name = document.getElementById("name").value;
  let prn = document.getElementById("prn").value;
  let dept = document.getElementById("department").value;

  if (name === "" || prn === "" || dept === "") {
    alert("Please fill all fields");
    return;
  }

  if (editIndex === null) {
    students.push({ name, prn, dept });
  } else {
    students[editIndex] = { name, prn, dept };
    editIndex = null;
  }

  localStorage.setItem("students", JSON.stringify(students));
  clearForm();
  displayStudents(students);
}

function displayStudents(data) {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  data.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.prn}</td>
        <td>${s.dept}</td>
        <td>
          <button class="edit" onclick="editStudent(${index})">Edit</button>
          <button class="delete" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editStudent(index) {
  let s = students[index];
  document.getElementById("name").value = s.name;
  document.getElementById("prn").value = s.prn;
  document.getElementById("department").value = s.dept;
  editIndex = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents(students);
}

function searchStudent() {
  let value = document.getElementById("search").value.toLowerCase();

  let filtered = students.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.prn.toLowerCase().includes(value) ||
    s.dept.toLowerCase().includes(value)
  );

  displayStudents(filtered);
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("prn").value = "";
  document.getElementById("department").value = "";
}

displayStudents(students);