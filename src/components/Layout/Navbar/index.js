import { Container, Navbar, Nav } from "react-bootstrap"
import classes from './style.module.css'

import { item_nav } from 'src/routes/routes-navbar'

const { Brand } = Navbar
const { Item, Link } = Nav

const Index = () =>{

    return (
        <Navbar className={classes.navbar}>
            <Container>
                <Brand>BRAND</Brand>
                <Nav>
                    {item_nav.map(({label, link})=>(
                        <Item key={label}>
                            <Link href={link}>
                                {label}
                            </Link>
                        </Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Index