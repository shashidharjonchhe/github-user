const GET_REPOS_QUERY = `
query ($userName: String!){
    user(login: $userName) {
      login
      repositories(first: 50, isFork: false) {
        nodes {
            name
            url
            description
            isPrivate
            id
            updatedAt
            owner{
                avatarUrl
                id
              }
        }
      }
      followers(first: 10) {
          totalCount
          nodes {
            login
          }
        }
        following(first: 10) {
          totalCount
          nodes {
            login
          }
        }
    }
  }`;

export default GET_REPOS_QUERY;