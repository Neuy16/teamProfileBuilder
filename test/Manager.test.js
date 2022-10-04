const Manager = require('../lib/manager');

test('Testing office number.', () => {
    const officeNumber = 69;
    const employeeInstance = new Manager('Andrew', 59 , 'neuwirth@gmail.com', officeNumber);
    expect(employeeInstance.officeNumber).toBe(officeNumber);
})

test('Testing school.', () => {
    const officeNumber = 69;
    const employeeInstance = new Manager('Andrew', 59 , 'neuwirth@gmail.com', officeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(officeNumber);
})

test('Testing getRole.', () => {
    const role = 'Manager';
    const employeeInstance = new Manager('Andrew', 59 , 'neuwirth@gmail.com', 69);
    expect(employeeInstance.getRole()).toBe(role);
})