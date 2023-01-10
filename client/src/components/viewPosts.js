import { useEffect, useState } from 'react';
import {Container,Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import Axios from 'axios';

function ViewPosts() {
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get("http://127.0.0.1:8000/posts");
            setPosts(response.data);
        }

        fetchData();
          
        
    }, [posts]);


    return (
        <Container>
            <Table>
                <TableHead>
                    <TableCell>Title</TableCell>
                    <TableCell>Message</TableCell>
                </TableHead>
                <TableBody>
        
                    {posts && 
                        posts.map(p => (
                            <TableRow>
                                <TableCell>{p.title}</TableCell>
                                <TableCell>{p.message}</TableCell>
                            </TableRow>
                    ))}
                
                </TableBody>
            </Table>

            
            
        </Container>
    );
}

export default ViewPosts;