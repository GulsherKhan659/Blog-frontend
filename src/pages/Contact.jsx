import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Container, Box, FormGroup, FormLabel, Grid, InputBase, Stack, Button, Typography } from '@mui/material'



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wysvl2q', 'template_a4eg5rz', form.current, 'N45Xdqx4437U9ZH7x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert('We are 9j')
    };


    return (
        <Container>
            <Grid container>
                <Grid item xs={0} sm={4} md={4}></Grid>
                <Grid item xs={12} sm={4} md={4} paddingX={2} marginX={1} marginTop={2}>
                    <Box marginY={3}>
                        <center>
                            <Typography variant="h4" color="initial">Contact Us Form</Typography>
                        </center>
                    </Box>
                    <form ref={form} onSubmit={sendEmail}>
                        <FormGroup>
                            <FormLabel>Name</FormLabel>
                            <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                                <InputBase name="from_name" type='texts' fullWidth={true} placeholder='Enter full name here' />
                            </Box>
                            <Box marginY={1}></Box>
                            <FormLabel>Reason</FormLabel>
                            <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                                <InputBase name="from_reason" type='texts' fullWidth={true} placeholder='Enter your reason for query' />
                            </Box>
                            <Box marginY={1}></Box>

                            <FormLabel>Email</FormLabel>
                            <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                                <InputBase name="from_email" type='email' fullWidth={true} placeholder='Enter your email here' />
                            </Box>
                            <Box marginY={1}></Box>
                            <FormLabel>Message</FormLabel>
                            <Box width={'100%'} bgcolor={'white'} paddingX={1} paddingY={1}>
                                <textarea name="from_message" rows={8} style={{ border: 'none', width: '100%' }} placeholder='Write message here' ></textarea>
                            </Box>

                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Box></Box>
                                <Button type='submit' size='medium' variant='contained' color='primary'>Send</Button>
                            </Stack>
                        </FormGroup>
                    </form>

                </Grid>

            </Grid>
        </Container>
    )
}

export default Contact