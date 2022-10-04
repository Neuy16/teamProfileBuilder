const Employee = require('../lib/employee')

test('Can create new employee.', () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe('object');
})

test('Testing name.', () => {
    const name = 'Andrew';
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test('Testing ID.', () => {
    const id = 69;
    const employeeInstance = new Employee('Andrew', id);
    expect(employeeInstance.id).toBe(id);
})

test('Testing email.', () => {
    const email = 'neuwirth.andrew9@gmail.com';
    const employeeInstance = new Employee('Andrew', 69, email);
    expect(employeeInstance.email).toBe(email);
})


test('Testing getName().', () => {
    const newName = 'Andrew';
    const employeeInstance = new Employee(newName);
    expect(employeeInstance.getName()).toBe(newName);
})

test('Testing getId().', () => {
    const newId = 89;
    const employeeInstance = new Employee('Andrew', newId);
    expect(employeeInstance.getId()).toBe(newId);
})

test('Testing getEmail().', () => {
    const newEmail = 'neuwirth.andrew@gmail.com';
    const employeeInstance = new Employee('Andrew', 49, newEmail);
    expect(employeeInstance.getEmail()).toBe(newEmail);
})

test('Testing getRole().', () => {
    const newRole = 'Engineer';
    const employeeInstance = new Employee('Andrew', 49, 'neuwirth@gmail.com', newRole);
    expect(employeeInstance.getRole()).toBe(newRole);
})