
import React from 'react';

const UserDetails = (props) => {
    const { login, followers, following, repositories } = props.user;
    let followingList = [];
    if (following.nodes.length > 0 || followers.nodes.length > 0) {
        const followersList = followers.nodes.slice(0, props.count * 10);
        followingList = [...following.nodes, ...followersList].slice(0, props.count * 10);
    }

    return (
        <div>
            {  repositories && repositories.nodes && repositories.nodes.length > 0 &&
                <h5>
                    User "{login}" with {followers.totalCount} followers is following {following.totalCount}.
                One of the repo for this user is {repositories.nodes[0].name} and it is {repositories.nodes[0].isPrivate ? '' : 'not'} private.
            </h5>
            }
            {
                repositories && repositories.nodes && repositories.nodes.length === 0 &&
                <h5>
                    User The {login} with {followers.totalCount} followers is following {following.totalCount}. User has no Repos.
            </h5>
            }
            <div className="follow-block">
                <button className="follow-btn">Followers: {followers.totalCount}</button>
                <button className="follow-btn" onClick={() => props.onFollowingClick()}>Following: {following.totalCount}</button>
            </div>
            {
                followingList.length > 0 &&
                <div>
                    <h3>{login} Following</h3>
                    <ol>
                        {followingList.map(list => <li key={list.login}>{list.login}</li>)}
                    </ol>
                </div>
            }


        </div >
    )
};

export default UserDetails;