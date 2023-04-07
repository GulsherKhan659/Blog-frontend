import { AppBar, Box, Toolbar, Typography, Stack, MenuItem, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {


    const [dOpen, setDOpen] = useState(false)
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Write', link: '/write-blog' },
        { name: 'Contact Us', link: '/contact-us' },
        { name: 'About', link: '/about-us' },

    ]

    const NavLinks = ({ txtColor }) => links.map((e, i) => {
        return (
            <Link to={e.link} style={{ textDecoration: 'none', color: 'white' }} key={i}>
                <MenuItem sx={{ color: txtColor }}>{e.name.toUpperCase()}</MenuItem>

            </Link>
        )
    })



    return (
        <AppBar position="sticky"  >

            <Stack direction={'row'} paddingX={4} alignItems={'center'} justifyContent={'space-between'}>
                <Toolbar >
                    <Box>
                        <Typography variant="h6">
                            Blog
                        </Typography>
                    </Box>
                </Toolbar>
                <Box>
                    <Box sx={{ display: { xs: 'block', sm: 'flex', md: 'none' } }}>
                        <MenuIcon onClick={() => setDOpen(true)} />
                        <Drawer open={dOpen} anchor='right' onClose={() => setDOpen(false)}>
                            <Box sx={{ marginX: '30px', marginTop: '30px' }}>
                                <NavLinks txtColor={'#000'} />
                            </Box>

                        </Drawer>
                    </Box>
                    <Stack sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} direction={'row'}>
                        <NavLinks txtColor={'#FFF'} />
                    </Stack>

                </Box>
            </Stack>


        </AppBar>
    )
}

export default Header