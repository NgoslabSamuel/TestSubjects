function showModal(name, jobTitle, department, email, address, phone) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalJobTitle').innerText = jobTitle;
    document.getElementById('modalDepartment').innerText = department;
    document.getElementById('modalEmail').innerText = email;
    document.getElementById('modalAddress').innerText = address;
    document.getElementById('modalPhone').innerText = phone;
    document.getElementById('employeeModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('employeeModal').classList.add('hidden');
}