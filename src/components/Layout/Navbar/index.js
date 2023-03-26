import { Container, Navbar, Nav, Button } from "react-bootstrap"
import classes from './style.module.css'

import { item_nav } from 'src/routes/routes-navbar'
import { colors } from "src/constant"
import logo from "src/assets/svg/logo.svg"
import Image from "next/image"

const { Brand } = Navbar
const { Item, Link } = Nav

const Index = () => {

    return (
        <Navbar className={classes.navbar}>
            <Container>
                <Brand style={{ fontSize: '20px', fontWeight: 'bold', color: colors.white, display: 'flex' }}>
                    <Image
                        src={logo}
                        height={'32px'}
                        width={'32px'}
                        style={{
                            color: 'red'
                        }}
                        alt='logo'
                    />
                    <div style={{marginLeft:'10px'}}>
                        Boldo
                    </div>
                </Brand>
                <Nav >
                    {item_nav.map(({ label, link }, idx) => (
                        <Item key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: label != 'Log In' ? '10px' : '0' }}>
                            {label == 'Log In' ? (
                                <Button
                                    style={{
                                        padding: '5px 12px',
                                        borderRadius: '30px',
                                        width: '100px',
                                        height: '50px',
                                        backgroundColor: colors.white
                                    }}
                                >
                                    <Link href={link} style={{ fontSize: '14px', fontWeight: 'bold', color: colors.white, padding: 'unset', width: '100%', color: colors.blue }}>
                                        {label}
                                    </Link>
                                </Button>
                            ) : (
                                <Link href={link} style={{ fontSize: '14px', fontWeight: 'bold', color: colors.white }}>
                                    {label}
                                </Link>
                            )}
                        </Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Index