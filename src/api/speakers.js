import apiOrigin from './api';

export const getSpeakers = (authToken) => {
    return fetch(`${apiOrigin}/speakers`, {
        headers: {
            Authorization: `${authToken}`,
        },
    }).then(res => res.json());
}