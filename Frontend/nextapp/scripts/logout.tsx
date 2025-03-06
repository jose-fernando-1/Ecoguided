async function logout() {
    const token = localStorage.getItem('sessionToken');
    
    if (token) {
        try {
            const response = await fetch('http://127.0.0.1:8000/user/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${token}`
                },
                body: JSON.stringify({ token })
            });

            if (response.ok) {
                localStorage.removeItem('sessionToken');
                window.location.reload();
            } else {
                console.error('Failed to logout:', response.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    } else {
        console.warn('No auth token found in localStorage.');
    }
}

export default logout;