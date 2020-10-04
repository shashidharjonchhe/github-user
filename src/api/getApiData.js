import axios from 'axios';


const accessToken = 'ebe322bdfaeb090e38a28e86a19f8ee0c322c345';
const axiosGitHubApi = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${
            accessToken
            }`,
    },
});


export default axiosGitHubApi



