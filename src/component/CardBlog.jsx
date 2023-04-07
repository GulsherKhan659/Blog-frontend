import { Grid, Card, Box, Typography, Stack, CardMedia, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function CardBlog({ imgUrl, title, category, createdAt, slag }) {
    return (
        <Grid item xs={6} sm={6} md={3}>
            <Box sx={{
                marginX: {
                    xs: '10px',
                    sm: '25px',
                    md: '25px',

                },
                marginY: {
                    xs: '5px',
                    sm: '20px',
                    md: '20px',

                }
            }}>
                <Card >
                    <CardMedia
                        sx={{ height: 220 }}
                        title='img' image={imgUrl} />

                    <Box marginX={2} marginY={1}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Box></Box>
                            <Typography fontSize={10}>{createdAt.toString().split('T')[0]}</Typography>


                        </Stack>
                        <Typography fontSize={12} fontWeight={'bold'} color={'grey'}>{category}</Typography>
                        <Typography>{title}</Typography>


                        <Link to={`/blog/${slag}`} style={{ textDecoration: 'none' }}><Button size='small' variant='contained' color='success'>Read</Button></Link>


                    </Box>
                </Card>
            </Box>
        </Grid>
    )
}

export default CardBlog
