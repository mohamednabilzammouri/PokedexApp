import styled from '@emotion/styled'
import { Toolbar } from '@mui/material'
import { colors } from '../../../Styles/Colors'

export const StyledToolbar = styled(Toolbar)`
background-color: ${colors.MainRed};
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Logo = styled('img')`
src: url(${props => props.src});
width: 8%;
min-width: 100px;
cursor: pointer;
`
export const Search = styled('input')`
width: 20%;
height: 2em;
min-width: 150px;
border-radius: 5px;

`



