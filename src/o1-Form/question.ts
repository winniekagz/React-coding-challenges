const registrationmarkdownContent =` 

### **Build a User Registration Form**:
**fields**:
- **Username**
- **Email**
- **Password**

1. **Validate Inputs:**
   - Username must not be empty.
   - Email should be in a valid format.
   - Password must be at least 6 characters long.
   
2. **Display Error Messages:**
   - If the form input is invalid, display an appropriate error message for each field.

### **Tasks**:
- Implement the User Registration Form UI.
- Create input fields for username, email, and password.
- Add a submit button.
- Validate the form inputs and display error messages using a list and bold text for each error.
- Simulate form submission with a mock API call that includes a simulated delay (e.g., 1-2 seconds).
- Show a success message when the form is submitted successfully.

### **Hints**:
- Use React's controlled components to manage input values.
- Use a state object to track the values of username, email, and password.
- For validation, consider using regular expressions or a library like Yup.
- Use \`setTimeout\` to simulate an API delay during form submission.`

export {registrationmarkdownContent}
