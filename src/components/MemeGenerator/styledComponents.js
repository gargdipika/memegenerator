// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  align-items: center;
`

export const FormContainer = styled.form`
  margin-left: 50px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 30vw;
`

export const HeadingMeme = styled.h1`
  color: #35469c;
`
export const HeadingInput = styled.label`
  margin-top: 20px;
  color: #7e858e;
`

export const InputElement = styled.input`
  color: #5a7184;
  border-radius: 5px;
  height: 36px;
  outline: none;
  border: solid #5a7184 1px;
  margin-top: 10px;
  padding: 10px;
  font-size: 15px;
`

export const ButtonElement = styled.button`
  border: none;
  height: 36px;
  padding: 10px;
  background-color: #0b69ff;
  width: 15vw;
  border-radius: 5px;
  margin-top: 10px;
  color: white;
`
export const SelectElement = styled.select`
  margin-top: 5px;
  height: 36px;
  border-radius: 5px;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.bgImage});
  width: 50vw;
  margin-left: 30px;
  background-size: cover;
  height: 60vh;
`
export const MemeHeading = styled.p`
  font-size: ${props => props.size}px;
  color: white;
  text-align: center;
`
