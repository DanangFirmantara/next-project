import Navbar from 'src/components/Layout/Navbar'
import { Container } from 'react-bootstrap'

const Index = ({children}) =>{
    return (
        <div>
            <Navbar />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Index