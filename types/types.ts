export interface Props {
    inirialReduxState: string | number;
    setPost: <T>(PostWithComments) => T;
}

export interface ReduxState {
    posts: Post[];
    post: PostWithComments;
    loading: boolean;
    error: boolean;
}

export interface Payload {
    type: string;
    payload: Post;
}

export interface PostWithComments {
    body: string;
    title: string;
    id: number;
    comments: Comment[];
}
export interface Post {
    body: string;
    title: string;
    id?: number | void;
}

export interface Comment {
    postId: number;
    id: number | void;
    body: string;
}
