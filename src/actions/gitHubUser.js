import axiosGitHubApi from '../api/getApiData';
import GET_GITHUB_USER_QUERY from '../api/githubUsersQuery';


export const onFetchGitHubUserDetails = () => {
    return {
        type: 'FETCH_GIT_HUB',
        loading: true
    }
}

export const onSuccessGitHubUserDetails = (data) => {
    return {
        type: 'ON_SUCCESS_GITHUB',
        data: data,
        loading: false
    }
}


export const onFailGitHubUserDetails = (error) => {
    return {
        type: 'ON_FAIL_GITHUB',
        error: error,
        loading: false
    }
}

export const onIncrementFollowing = (action) => {
    return {
        type: 'ON_INCREMENT_FOLLOWING',
        count: action.count,
        user: action.user
    }
}

export const onFollowingClickAction = () => {
    return (dispatch, getState) => {
        let { user, count } = getState();
        user.following.totalCount += 10;
        count++;
        dispatch(onIncrementFollowing({
            count: count,
            user: { ...user }
        }));
    }
}


export const onSearchGitHubUser = (userName) => {
    return (dispatch) => {
        dispatch(onFetchGitHubUserDetails())
        return axiosGitHubApi
            .post('', { query: GET_GITHUB_USER_QUERY, variables: { userName }, })
            .then(result => {
                if (result.data.data.user) {
                    result.data.data.user.following.totalCount = result.data.data.user.followers.totalCount + 10;
                    dispatch(onSuccessGitHubUserDetails(result.data.data.user));
                } else {

                    dispatch(onFailGitHubUserDetails([...result.data.errors]));
                }

            }, error => {
                dispatch(onFailGitHubUserDetails([error]));
            });
    }
}