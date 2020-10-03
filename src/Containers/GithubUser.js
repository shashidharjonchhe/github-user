import { connect } from 'react-redux';
import { onSearchGitHubUser, onFollowingClickAction } from '../actions/gitHubUser';
import GitHubUser from '../Components/GitHubUser';

const mapStateToProps = (state) => {
    return ({
        user: state.user,
        loading: state.loading,
        error: state.error,
        count: state.count
    })
}

const mapDispatchToProps = (dispatch) => ({
    onSearchGitHubUser: (query) => {
        dispatch(onSearchGitHubUser(query))
    },
    onFollowingClick: () => {
        dispatch(onFollowingClickAction())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(GitHubUser);

