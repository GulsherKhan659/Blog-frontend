import { Container, Box, Stack, Typography, Chip, Grid } from '@mui/material'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BlogCxt from '../context/blogContext'
function Blog() {
    const parms = useParams()
    const { blogs } = useContext(BlogCxt)


    const blog = blogs.filter((e) => e.slag === parms.slag)[0]


    const BlogHead = () => {
        return (
            <Box sx={{ height: '250px', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundImage: "url(" + blog.imgUrl + ")" }} >
                <Stack height={'100%'} component={'div'} justifyContent={'end'} >
                    <></>
                    <Box padding={3} sx={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(25, 118, 210,0), rgba(25, 118, 210,1));'
                    }}  >
                        <Chip label={blog.category} color='primary' />
                        <Typography variant='h2' color={'white'}>{blog.title}</Typography>

                    </Box>
                </Stack>
            </Box>
        )
    }

    const BlockBody = () => {
        const data = blog.blog.replaceAll('<img', '<img width="100%"')
        return (
            <Box dangerouslySetInnerHTML={{ __html: data }}>
            </Box>)

    }

    return (
        blog && <Grid container>
            <Grid item sm={12} md={12}>
                <Container >

                    <BlogHead />

                    <Box marginTop={4} marginBottom={1}>
                        <BlockBody />


                    </Box>

                </Container>
            </Grid>
        </Grid>
    )
}

export default Blog