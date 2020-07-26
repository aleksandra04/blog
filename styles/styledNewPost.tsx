import styled from 'styled-components';

export const Form = styled.form`
    && {
        width: ${({ comment }) => (comment ? '100%' : '700px')};
        box-shadow: ${({ comment }) => (comment ? 'none' : '0px 0px 40px rgba(98, 120, 128, 0.15)')};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: ${({ comment }) => (comment ? '20px 0' : '20px 40px')};
        box-sizing: border-box;
        font-family: Arial, Sans-Serif;
        @media (max-width: 850px) {
            width: ${({ comment }) => (comment ? '100%' : '100%')};
            padding: ${({ comment }) => (comment ? '20px 10px' : '20px 30px')};
        }
        @media (max-width: 450px) {
            width: ${({ comment }) => (comment ? '100%' : '100%')};
            padding: ${({ comment }) => (comment ? '20px 10px' : '20px 15px')};
        }
    }
`;

export const Label = styled.label`
    && {
        margin: 0 0 5px;
    }
`;

export const Input = styled.input`
    && {
        margin: 0 0 20px;
        min-height: 30px;
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    && {
        margin: 0 0 20px;
        min-height: ${({ comment }) => (comment ? '40px' : '100px')};
        outline: none;
        font-family: Arial, Sans-Serif;
    }
`;

export const Button = styled.button`
    && {
        padding: 7px;
        text-align: center;
        width: 80px;
        margin: ${({ save }) => (save ? '0 0 0 auto' : '0 5px')};
        background-color: black;
        color: white;
        border: 1px solid black;
        border-radius: 3px;
        box-sizing: border-box;
        transition: 0.4s;
        cursor: pointer;
        outline: none;
        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`;

export const Message = styled.div`
    && {
        margin: 20px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
