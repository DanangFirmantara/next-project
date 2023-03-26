import { colors } from 'src/constant';
import classes from './style.module.css'

const Index = ({ children }) => {
    return (
        <div className={classes.image} style={{ backgroundColor: colors.blue, position: 'relative' }}>
            <div
                style={{
                    width: '1293px',
                    height: '1293px',
                    borderRadius:'1293px',
                    backgroundColor: 'rgba(28, 61, 91, 0.25)',
                    position: 'absolute',
                    transform: 'translate(50%, -50%)',
                    justifyContent:'right'
                }}
            />
            {children}
        </div>
    )
}

export default Index;