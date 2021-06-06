async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/login');

        } else {
            alert('Failed to signup!');
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', signupFormHandler);