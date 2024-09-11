/**
 * Fetches the name from the '/api/users' endpoint.
 */
export const getName = async () => {
    const response = await fetch('/api/users');
    const { message } = await response.json();
    return message;
}

/**
 * Creates a new user on the '/api/users' endpoint.
 */
export const createUser = async (name: string) => {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });
    const { message } = await response.json();
    return message;
}