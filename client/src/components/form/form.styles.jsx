import styled from 'styled-components'

export const FormContainer = styled.form`
    padding: 40px;
    margin: 25px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    flex-wrap : wrap;
    justify-content: space-around;
    background-color: white;
`

export const Input = styled.input`
    width : 40%;
    height: 50px;
    margin: 14px;
    font-size: 18px;
`

export const Button = styled.button`
    height: 40px;
    width: 20%;
    background-color: #e8ce87;
    border: 1px solid #9e9e9e;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-size: 18px;
`

export const ButtonLabel = styled.label`
    display: block;
    width: 30%;
    background-color: #e8ce87;
    border: 1px solid #9e9e9e;
    padding: 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    text-align: center;
`