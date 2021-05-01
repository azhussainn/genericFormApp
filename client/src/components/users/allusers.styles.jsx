import styled from 'styled-components';

export const AllUsersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const UserContainer = styled.div`
    width : 22%;
    display: flex;
    flex-direction : column;
    padding: 20px;
    margin: 14px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    height: 68vh;
    background-color: white;
    border-radius : 8px;
`

export const ImageContainer = styled.div`
    width: 50%;
    margin : 0 auto;
    img{
        width: 90%;
        border-radius: 10px;
    }
`
export const Name = styled.h2`
    margin : 10px 0;
    font-size: 22px;
    text-transform: capitalize;
`

export const Details = styled.h4`
    margin : 20px 0;
    font-size: 16px;
`