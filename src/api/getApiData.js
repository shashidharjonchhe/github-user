import axios from 'axios';


const accessToken = '06f6ae5d73b2b257b23b2756e490d68a2d277877'
const axiosGitHubApi = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${
            accessToken
            }`,
    },
});


export default axiosGitHubApi



