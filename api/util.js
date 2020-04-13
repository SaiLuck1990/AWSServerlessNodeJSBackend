const getUserId = (headers) => {
    return headers.app_user_id;
}

const getUserName = (headers) => {
    return headers.app_user_name;
}

const getIdToken = (headers) => {
    return headers.Authorization;
}

const getResponseHeaders = () => {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Origin-Headers': '*'
    }
}

module.exports = {
    getUserId,
    getUserName,
    getResponseHeaders,
    getIdToken
}