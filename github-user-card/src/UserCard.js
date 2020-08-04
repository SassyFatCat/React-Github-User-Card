import React from 'react';
import { UserDiv, UserImg, userAPI, ContainerDiv, FollowerDiv } from './Constants';
import axios from 'axios';

class UserCard extends React.Component {
constructor() {
    super();
    this.state = {
        followerData: []
    }
}


getFollowers = username => {
axios.get(`${userAPI}${username}/followers`)
    .then(success => {
        console.log(success);
        this.setState({
        followerData: success.data
          })
    })
    .catch(fail => {
        console.log('user follower failed')
    })
}   

componentDidMount() {
    this.setState({
        followerData: null
    })
    this.getFollowers(this.props.userData.login)
}

render() {
    return (
        <ContainerDiv>

            <UserDiv>
                <UserImg src={`${this.props.userData.avatar_url}`}></UserImg>
                <h2>{this.props.userData.login}</h2>
                <p>{`Name: ${this.props.userData.name}`}</p>
                <a href={`${this.props.userData.html_url}`}>Github Profile</a>
            </UserDiv>

            {!this.state.followerData && <p>Fetching followers...</p>}

            {this.state.followerData && 
            <ContainerDiv>
                <h2>Friends:</h2>
                <FollowerDiv>
                    {this.state.followerData.map(user => {
                        return (            
                            <UserDiv>
                                <UserImg src={`${user.avatar_url}`}></UserImg>
                                <h2>{user.login}</h2>
                                <a href={`${user.html_url}`}>Github Profile</a>
                        </UserDiv>
                        )   
                    })}
                </FollowerDiv>
            </ContainerDiv>}

        </ContainerDiv>
    )
}
}


export default UserCard