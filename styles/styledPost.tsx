import styled from 'styled-components';

export const PostContainer = styled.div`
    && {
        width: 700px;
        box-shadow: 0px 0px 40px rgba(98, 120, 128, 0.15);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 20px 40px;
        box-sizing: border-box;
        font-family: Arial, Sans-Serif;
        @media (max-width: 850px) {
            width: 100%;
        }
        @media (max-width: 850px) {
            padding: 20px 20px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    && {
        display: flex;
        justify-content: flex-end;
    }
`;

export const CommentsContainer = styled.div`
    && {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 0 0 10px;
    }
`;

export const Comment = styled.p`
    && {
        margin: 0 0 20px;
        word-wrap: break-word;
        font-size: 15px;
        color: gray;
    }
`;
