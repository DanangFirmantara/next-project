import Navbar from 'src/components/Layout/Navbar'
import { Container } from 'react-bootstrap'
import classes from './style.module.css'
import Image from './Image'
import { colors } from 'src/constant'

const Index = ({ children, bg = false }) => {
    return (
        <div style={{ position: 'relative', flex: 1, color:colors.white }}>
            <Image>
                <Navbar />
                <Container>
                    {children}
                </Container>
            </Image>

        </div>
    )
}

export default Index