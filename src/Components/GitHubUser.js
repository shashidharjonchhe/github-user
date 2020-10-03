import React from 'react';
import UserForm from '../Components/UserForm';
import Loading from '../Components/Loading';
import UserDetails from '../Components/UserDetails';
import Error from '../Components/Errors';

export default class GitHubUser extends React.Component {
    onSearchGitHubUser(query) {
        this.props.onSearchGitHubUser(query);
    }

    onFollowingClick() {
        this.props.onFollowingClick();
    }
    render() {
        const { loading, user, error, count } = this.props;
        return (
            <div className="github-user-container">
                <UserForm onSearch={this.onSearchGitHubUser.bind(this)} />
                { loading === true && <Loading />}
                {(user && loading === false) && <UserDetails count={count} user={user} onFollowingClick={this.onFollowingClick.bind(this)} />}
                {error && <Error error={error} />}
            </div>
        );
    }
}