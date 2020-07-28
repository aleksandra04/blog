import { useSelector } from 'react-redux';
import { initializeStore } from '../../store/store';
import * as types from '../../store/actionTypes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPost } from '../../store/actions/postAction';
import Layout from '../../components/layout';
import { PostContainer, ButtonsContainer, CommentsContainer, Comment } from '../../styles/styledPost';
import { Form, Label, Input, Textarea, Button } from '../../styles/styledNewPost';
import { Title } from '../../styles/styledMain';
import { GlobalStyle } from '../../styles/styledLayout';
import { Props } from '../../types/types';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';

function Post(props: Props): JSX.Element {
    const storePost = useSelector((state) => state.post);

    const [post, setPost] = useState(storePost);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(storePost.title);
    const [body, setBody] = useState(storePost.body);
    const [comments, setComments] = useState(storePost.comments);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const router = useRouter();

    const onFormSubmit = async (e: React.FormEvent<HTMLInputElement>): Promise<string> => {
        e.preventDefault();

        const prepTitle = title.trim();
        const prepBody = body.trim();

        if (!prepTitle && !prepBody) return;

        const url = `https://simple-blog-api.crew.red/posts/${router.query.id}`;
        const data = { title: prepTitle, body: prepBody };

        const res = await axios.put(url, data);

        if (res.status === 201 || res.status === 200) {
            setError(false);
            setSuccess(true);
            setEdit(false);
        } else {
            setError(true);
            setSuccess(false);
        }
    };

    const handleDelete = async () => {
        if (confirm('are you sure?')) {
            const res = await axios.delete(`https://simple-blog-api.crew.red/posts/${router.query.id}`);
            if (res.status === 201 || res.status === 200) {
                router.push(`/`);
            } else {
                setError(true);
            }
        }
    };

    const handleSaveComment = async (e: React.FormEvent<HTMLInputElement>): Promise<string> => {
        e.preventDefault();

        const preparedComment = comment.trim();
        if (!preparedComment) return;

        const url = `https://simple-blog-api.crew.red/comments`;
        const data = { postId: +router.query.id, body: preparedComment };

        const res = await axios.post(url, data);
        if (res.status === 201) {
            comments.push({ body: comment, postId: +router.query.id });
            const currPost = { ...post };
            currPost.coments = comments;

            props.setPost(currPost);
            setComment('');
        } else {
            console.log(error);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Layout>
                {!edit && (
                    <PostContainer>
                        <ButtonsContainer>
                            <Button onClick={() => setEdit(true)}>edit</Button>
                            <Button onClick={() => handleDelete()}>delete</Button>
                        </ButtonsContainer>
                        <div>
                            <Title post>{title}</Title>
                            <p>{body}</p>
                        </div>
                        <Title>Comments</Title>
                        {!!comments.length && (
                            <CommentsContainer>
                                {comments.map((comment) => (
                                    <Comment key={post.id + Math.random()}>{comment.body}</Comment>
                                ))}
                            </CommentsContainer>
                        )}
                        {!comments.length && <Comment> no comments yet</Comment>}
                        <Form comment onSubmit={(e) => handleSaveComment(e)}>
                            <Label htmlFor="comment">Write your comment</Label>
                            <Textarea
                                comment
                                type="text"
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></Textarea>
                            <Button save type="submit">
                                save
                            </Button>
                        </Form>
                    </PostContainer>
                )}

                {!edit && error && <p>some error occured</p>}

                {edit && (
                    <Form onSubmit={(e) => onFormSubmit(e)}>
                        <Label htmlFor="title">title</Label>
                        <Input type="text" id="title " value={title} onChange={(e) => setTitle(e.target.value)}></Input>

                        <Label htmlFor="body">text</Label>
                        <Textarea
                            type="text"
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></Textarea>

                        <ButtonsContainer>
                            <Button onClick={() => setEdit(false)}>go back</Button>
                            <Button type="submit">save</Button>
                        </ButtonsContainer>
                    </Form>
                )}
            </Layout>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await axios.get('https://simple-blog-api.crew.red/posts/');

    const paths = posts.data.map((post) => `/posts/${post.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const reduxStore = initializeStore({});
    const { dispatch } = reduxStore;

    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}?_embed=comments`);

    dispatch({
        type: types.GET_POST,
        payload: res.data,
    });

    return { props: { initialReduxState: reduxStore.getState() } };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPost: bindActionCreators(setPost, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(Post);
