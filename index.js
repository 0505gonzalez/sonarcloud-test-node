module.exports = (firstName, lastName) => {
    const cleanFirstName = typeof firstName === 'string' ? firstName : '';
    const cleanLastName = typeof lastName === 'string' ? lastName : '';

    return `${cleanFirstName} ${cleanLastName}`.trim();
};
