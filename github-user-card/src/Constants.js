import styled from 'styled-components';

const userAPI = `https://api.github.com/users/`;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FollowerDiv = styled.div`
display: flex;
`;

const UserDiv = styled.div`
    width: 60%;
    margin: 1% auto;
    display: flex;
    flex-direction: column;
    padding: 1%;
    margin: 1%;
    background-color: palegoldenrod;
    align-items: center;
`;

const UserImg = styled.img`
    width: 20%;
    height: 20%;
`;

export {userAPI, UserDiv, UserImg, ContainerDiv, FollowerDiv}