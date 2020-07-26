import styled from 'styled-components';

export const Posts = styled.div`
    && {
        width: 1000px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        @media (max-width: 1100px) {
            width: 90%;
        }
    }
`;

export const Post = styled.div`
    && {
        box-shadow: 0px 0px 40px rgba(98, 120, 128, 0.15);
        border-radius: 5px;
        width: 45%;
        margin-bottom: 10px;
        padding: 10px 20px;
        font-family: Arial, Sans-Serif;
        cursor: pointer;
        @media (max-width: 1100px) {
            width: 40%;
        }
        @media (max-width: 680px) {
            width: 70%;
        }
        @media (max-width: 540px) {
            width: 90%;
        }
    }
`;

export const NewPost = styled.a`
    && {
        display: block;
        margin: 30px auto;
        cursor: pointer;
        transition: 0.4s;
        text-transform: uppercase;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const Title = styled.p`
    && {
        font-weight: 700;
        font-size: ${({ post }) => (post ? '24px' : '18px')};
        color: ${({ post }) => (post ? 'black' : 'gray')};
        @media (max-width: 540px) {
            font-size: ${({ post }) => (post ? '18px' : '18px')};
        }
    }
`;
