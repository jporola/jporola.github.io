const accesstokenKey = 'accesstoken';

const filter = (array) => {
    return array
        .filter(o => o.id && o.avatar && o.name)
        .map((o) => {
            return {
                'id': o.id,
                'name': o.name,
                'avatar': o.avatar
            };
        });
}

export const getPersons = async () => {
    const url = 'https://2umdflpqk3.execute-api.us-west-2.amazonaws.com/prod/persons'
    const options = {
        headers: {
            'x-accesstoken': localStorage.getItem(accesstokenKey)
        }
    };

    const json = sessionStorage.getItem(url);
    if (json) {
        return JSON.parse(json);
    } else {
        const response = await fetch(url, options);
        if (response.ok) {
            let json = await response.json();
            if (!json.error) {
                json = filter(json);
                try {
                    sessionStorage.setItem(url, JSON.stringify(json));
                } catch (error) {
                    console.error(error);
                }
                return json;
            }
            throw json;
        }
        throw response.clone();
    }
}

export const login = async (user, pass) => {
    const url = 'https://2umdflpqk3.execute-api.us-west-2.amazonaws.com/prod/login'
    const data = {
        email: user,
        password: pass
    };
    const options = {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    };

    const response = await fetch(url, options);
    if (response.ok) {
        const json = await response.json();
        if (!json.error) {
            return localStorage.setItem(accesstokenKey, json.key);
        }
        throw json;
    }
    throw response.clone();
}
