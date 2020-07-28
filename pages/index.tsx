import Link from 'next/link';
import { useSelector } from 'react-redux';
import { initializeStore } from '../store/store';
import * as types from '../store/actionTypes';
import Layout from '../components/layout';
import { Posts, Post, NewPost, Title } from '../styles/styledMain';
import Router from 'next/router';
import { GlobalStyle } from '../styles/styledLayout';
import axios from 'axios';

export default function Main(): JSX.Element {
    const posts = useSelector((state) => state.posts);

    return (
        <>
            <GlobalStyle />
            <Layout>
                <Link href="/posts/new">
                    <NewPost>Create new post</NewPost>
                </Link>
                <Posts>
                    {posts &&
                        posts.map((post) => (
                            <Post key={post.id} onClick={() => Router.push(`/posts/[id]`, `/posts/${post.id}`)}>
                                <Title post>{post.title}</Title>
                                <p>{post.body}</p>
                            </Post>
                        ))}
                </Posts>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const reduxStore = initializeStore({});
    const { dispatch } = reduxStore;

    const posts = await axios.get('https://simple-blog-api.crew.red/posts');
    const flteredPosts = posts.data.filter((post) => post.title || post.body);

    dispatch({
        type: types.GET_POSTS,
        payload: flteredPosts.reverse(),
    });

    return { props: { initialReduxState: reduxStore.getState() } };
}
