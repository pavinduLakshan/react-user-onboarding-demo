const axios = require('axios');
const qs = require('qs');

const organizationName = process.env.ASGARDEO_ORG_NAME;

async function getAccessToken() {
    const clientId = process.env.ASGARDEO_CLIENT_ID;
    const clientSecret = process.env.ASGARDEO_CLIENT_SECRET;
    const scope = process.env.ASGARDEO_SCOPE;

    const tokenUrl = `https://api.asgardeo.io/t/${organizationName}/oauth2/token`;
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const data = qs.stringify({
        'grant_type': 'client_credentials',
        'scope': scope
    });

    const config = {
        method: 'post',
        url: tokenUrl,
        headers: {
            'Authorization': `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    try {
        const response = await axios(config);
        return {
            error: null,
            result: response.data
        }
    } catch (err) {
        return {
            error: err,
            result: null
        }
    }
}

/**
 * @typedef {Object} User - creates a new type named 'User'
 * @property {string} firstName - first name
 * @property {string} lastName - last name
 * @property {string} email - email
 * @prop {string} password - password
 */

/**
 * @param {User} user - new user to be created 
 */
async function createUser(user) {
    const { result } = await getAccessToken();

    const userData = {
        schemas: [],
        name: {
            givenName: user.firstName,
            familyName: user.lastName
        },
        userName: `DEFAULT/${user.email}`,
        password: user.password,
        emails: [
            {
                value: `${user.email}`,
                primary: true
            }
        ]
    };

    const config = {
        method: 'post',
        url: `https://api.asgardeo.io/t/${organizationName}/scim2/Users`,
        headers: {
            'accept': 'application/scim+json',
            'Content-Type': 'application/scim+json',
            'Authorization': `Bearer ${result.access_token}`
        },
        data: userData
    };

    try {
        const response = await axios(config);

        return ({
            error: null,
            result: response.data
        })
    } catch (error) {
        return ({
            error: error,
            result: null
        })
    }
}

async function getSCIMSchemas() {
    const { result } = await getAccessToken();

    const config = {
        method: 'get',
        url: `https://api.asgardeo.io/t/${organizationName}/scim2/Schemas`,
        headers: {
            'accept': 'application/scim+json',
            'Content-Type': 'application/scim+json',
            'Authorization': `Bearer ${result.access_token}`
        }
    };

    try {
        const response = await axios(config);

        return ({
            error: null,
            result: response.data
        })
    } catch (error) {
        return ({
            error: error,
            result: null
        })
    }
}

module.exports = {
    getAccessToken,
    createUser,
    getSCIMSchemas
}
