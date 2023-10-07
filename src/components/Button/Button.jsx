import classes from './Button.module.css'

const Button = ({callback, color, text}) => {
/*     const {callback, color, text } = props
 */    
    return <button onClick={callback} className={ `${classes.color} ${classes.font}`} style={{color: color}}>{text}</button>
}

export default Button