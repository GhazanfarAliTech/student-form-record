
const students = [];

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const student = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        dob: formData.get('dob'),
      
        gender: formData.get('gender'),
        email: formData.get('email'),
        courses: formData.getAll('courses'),
        description: formData.get('description'),
        grade: formData.get('grade')
    };

    students.push(student);
    console.log(students);
    event.target.reset();

    alert('Student information submitted successfully!');
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchWord = document.getElementById('searchWord').value.trim().toLowerCase();
    const student = students.find(s => 
        s.firstName.toLowerCase().includes(searchWord) || 
        s.lastName.toLowerCase().includes(searchWord)
    );

    if (student) {
        
        document.getElementById('firstName').value = student.firstName;
        document.getElementById('lastName').value = student.lastName;
        document.getElementById('dob').value = student.dob;
       
        document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
        document.getElementById('email').value = student.email;

     
        document.querySelectorAll('input[name="courses"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        student.courses.forEach(course => {
            document.querySelector(`input[name="courses"][value="${course}"]`).checked = true;
        });

        document.getElementById('description').value = student.description;
        document.getElementById('grade').value = student.grade;
    } else {
        alert('Student not found.');
    }
});
