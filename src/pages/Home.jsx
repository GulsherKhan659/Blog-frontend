import { Grid, Container } from '@mui/material'
import React, { useContext } from 'react'
import CardBlog from '../component/CardBlog'
import BlogCxt from '../context/blogContext'

function Home() {
    const { blogs } = useContext(BlogCxt)

    const BlogsCard = () => blogs.map((data, index) => {

        return (
            <CardBlog {...data} key={index} />
        )

    })
    return (
        <Container>
            <Grid container>
                <BlogsCard />
            </Grid>
        </Container>
    )
}

export default Home