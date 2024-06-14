document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const todoContainer = document.getElementById('todo-container');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const todoForm = document.getElementById('todo-form');

    const loginButton = document.getElementById('register-button');
    const registerButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');

    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = [];

    // Switch to Register
    loginButton.addEventListener('click', () => {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    // Switch to Login
    registerButton.addEventListener('click', () => {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Dummy login check, replace with actual authentication
        if (email === 'programmerdevansh@gmail.com' && password === 'DK@12345') {
            loginContainer.style.display = 'none';
            todoContainer.style.display = 'block';
        } else {
            document.getElementById('login-error').textContent = 'Invalid email or password.';
        }
    });

    // Handle Registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Dummy registration, replace with actual registration
        if (email && password) {
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        } else {
            document.getElementById('register-error').textContent = 'Please enter valid details.';
        }
    });

    // Handle Logout
    logoutButton.addEventListener('click', () => {
        todoContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Handle Adding To-Do
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value;
        if (todoText) {
            todos.push(todoText);
            todoInput.value = '';
            renderTodos();
        }
    });

    // Handle Deleting To-Do
    const handleDelete = (index) => {
        todos.splice(index, 1);
        renderTodos();
    };

    // Render To-Do List
    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => handleDelete(index));
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    };
});
