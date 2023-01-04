import { useState } from 'react';
import {Container, Form} from 'react-bootstrap';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        // TODO: submit to backend
    }

    return (
        <Container>
             <Form onSubmit={e => submitHandler(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={event => setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Message" value={message} onChange={event => setMessage(event.target.value)}/>
                </Form.Group>
                <Form.Control type="submit" variant="primary"/>
            
            </Form>
        </Container>
           
    );
}

export default CreatePost;
