import apiOrigin from './api';

export const getEvents = (authToken) => {
    return fetch(`${apiOrigin}/events`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${authToken}`,
        },
    }).then(res => res.json());
}