
import { Box, Container, Grid, FormGroup, FormLabel, InputBase, Button, Stack, Typography, Divider } from '@mui/material'
import { useContext, useState } from 'react'
import BlogCxt from '../context/blogContext'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function WriteBlog() {
    const [iptHandler, setIptHandler] = useState({})
    const BlogContxt = useContext(BlogCxt)
    const [quiltxt, setQuilTxt] = useState('')

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ]



    const submitForm = () => {
        const blog = quiltxt
        const formData = { ...iptHandler, blog }

        console.log(formData)
        BlogContxt.addBlog(formData)


        alert('Data Enter Sucessfully!')
    }



    const inputChangeHandler = (e) => {
        setIptHandler({
            ...iptHandler, ...{
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={0} sm={2} md={2}></Grid>
                <Grid item xs={12} sm={8} md={8} paddingX={2} marginX={1} marginTop={2}>
                    <Box marginY={3}>
                        <center>
                            <Typography variant="h4" color="initial">Write Blog</Typography>
                        </center>
                    </Box>
                    <FormGroup>
                        <FormLabel>Title</FormLabel>
                        <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                            <InputBase name='title' type='text' onChange={inputChangeHandler} fullWidth={true} placeholder='Enter  Title here....' />
                        </Box>
                        <Box marginY={1}></Box>
                        <FormLabel>Category</FormLabel>
                        <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                            <InputBase name='category' type='text' onChange={inputChangeHandler} fullWidth={true} placeholder='Enter  Category here....' />
                        </Box>
                        <Box marginY={1}></Box>
                        <FormLabel>Image Url</FormLabel>
                        <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                            <InputBase name='imgUrl' type='text' onChange={inputChangeHandler} fullWidth={true} placeholder='Put Image URL here....' />
                        </Box>
                        <Box marginY={1}></Box>

                        <FormLabel>Blog Content</FormLabel>
                        <Box width={'100%'} height={'350px'} bgcolor={'white'} paddingX={1} paddingY={1}>
                            <ReactQuill modules={{ toolbar: toolbarOptions }} style={{ height: '280px' }} theme="snow" value={quiltxt} onChange={e => setQuilTxt(e.toString())} />;
                        </Box>
                        <Divider />

                        <Stack direction={'row'} justifyContent={'space-between'} marginY={2}>
                            <Box></Box>
                            <Button size='medium' onClick={() => submitForm()} variant='contained' color='success'>Save Blog</Button>
                        </Stack>
                    </FormGroup>


                </Grid>

            </Grid>
        </Container>
    )
}

export default WriteBlog