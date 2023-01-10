import { useState } from 'react';
import Axios from 'axios';
import { Alert, TextField, Container, Button, Grid } from '@mui/material';


function CreatePost() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [error, setError] = useState(null);

    async function submitHandler(e) {
        e.preventDefault();
        if (title === null || title.length === 0) {
            setIsSuccessful(false);
            setError("Please enter a title");
            return;
        }
        if (message === null || message.length === 0) { 
            setIsSuccessful(false);
            setError("Please enter a message");
            return;
        }

        try {
            const response = await Axios.post("http://127.0.0.1:8000/posts", {title: title, message: message});

            if (response.status !== 201) throw new Error(response.data);
            setIsSuccessful(true);
            setError(null);
             
        } catch (error) {
            setError("Unable to create post!");
            setIsSuccessful(false);
        }
    }

    return (
        <Container>
            {isSuccessful && <Alert severity="success">Success! Your post has been created!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            
            <form onSubmit={e => submitHandler(e)}>
            <Grid
             alignItems="center"
             justify="center">
                <Grid item s={12}>
                    <TextField 
                        type="text" 
                        placeholder="Title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        fullWidth={true}
                    ></TextField>
                </Grid>
                <Grid item s={12}>
                    <TextField 
                        type="text" 
                        placeholder="Message"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        fullWidth={true}
                    ></TextField>
                </Grid>
                <Grid item s={8}>
                    <Button type="submit" variant="contained" >Submit</Button>
                </Grid>
            </Grid>


            </form>
           

        </Container>



    
    );
}

export default CreatePost;
