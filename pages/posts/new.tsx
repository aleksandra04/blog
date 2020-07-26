import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { Form, Label, Input, Textarea, Button, Message } from '../../styles/styledNewPost';
import { NavLink, GlobalStyle } from '../../styles/styledLayout';
import axios from 'axios';

export default function NewPost(): JSX.Element {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const onFormSubmit = async (e: React.FormEvent<HTMLInputElement>): Promise<any> => {
        e.preventDefault();
        const url = 'https://simple-blog-api.crew.red/posts';
        const data = { title: title, body: body };

        const res = await axios.post(url, data);

        if (res.status === 201 || res.status === 200) {
            setTitle('');
            setBody('');
            setError(false);
            setSuccess(true);
        } else {
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Layout>
                <Form onSubmit={(e) => onFormSubmit(e)}>
                    <Label htmlFor="title">title</Label>
                    <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}></Input>

                    <Label htmlFor="body">text</Label>
                    <Textarea type="text" id="body" value={body} onChange={(e) => setBody(e.target.value)}></Textarea>

                    <Button save type="submit">
                        save
                    </Button>
                </Form>
                {success && (
                    <Message>
                        <p>your post was successfully created</p>
                        <Link href="/">
                            <NavLink>go to all posts</NavLink>
                        </Link>
                    </Message>
                )}
                {error && (
                    <Message>
                        <p>some error occured, try again</p>
                    </Message>
                )}
            </Layout>
        </>
    );
}
