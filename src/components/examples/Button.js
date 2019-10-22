import styled from 'styled-components'

const color = 'blue'

const Button = styled.button`
/* color: yellow; */
color: ${(props) => props.color};
background: ${color};
/* font-size: 2rem; */
font-size: ${props => (props.big ? '4rem' : '1rem')};
margin: 6px;
padding: 6px;
`

export default Button