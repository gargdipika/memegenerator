import {Component} from 'react'
import {
  FormContainer,
  HeadingMeme,
  HeadingInput,
  InputElement,
  MainContainer,
  ButtonElement,
  SelectElement,
  MemeGeneratorContainer,
  MemeHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    inputImageUrl: '',
    inputTopText: '',
    inputBottomText: '',
    inputFontSize: '',
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangingImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  onChangingTopText = event => {
    this.setState({inputTopText: event.target.value})
  }

  onChangingBottomText = event => {
    this.setState({inputBottomText: event.target.value})
  }

  onChangingFontSize = event => {
    this.setState({inputFontSize: event.target.value})
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {
      inputBottomText,
      inputFontSize,
      inputImageUrl,
      inputTopText,
    } = this.state

    this.setState({
      imageUrl: inputImageUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      fontSize: inputFontSize,
      inputImageUrl: '',
      inputTopText: '',
      inputBottomText: '',
      inputFontSize: 8,
    })
  }

  generatingMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(fontSize)
    return (
      <MemeGeneratorContainer data-testid="meme" bgImage={imageUrl}>
        <MemeHeading size={fontSize}>{topText}</MemeHeading>
        <MemeHeading size={fontSize}>{bottomText}</MemeHeading>
      </MemeGeneratorContainer>
    )
  }

  render() {
    const {inputImageUrl, inputTopText, inputBottomText} = this.state
    return (
      <MainContainer>
        <FormContainer onSubmit={this.onSubmittingForm}>
          <HeadingMeme>Meme Generator</HeadingMeme>
          <HeadingInput htmlFor="image">Image URL</HeadingInput>
          <InputElement
            value={inputImageUrl}
            id="image"
            onChange={this.onChangingImageUrl}
            type="text"
          />
          <HeadingInput htmlFor="top">Top Text</HeadingInput>
          <InputElement
            value={inputTopText}
            id="top"
            onChange={this.onChangingTopText}
            type="text"
          />
          <HeadingInput htmlFor="bottom">Bottom Text</HeadingInput>
          <InputElement
            value={inputBottomText}
            id="bottom"
            onChange={this.onChangingBottomText}
            type="text"
          />
          <HeadingInput htmlFor="font">Font Size</HeadingInput>
          <SelectElement id="font" onChange={this.onChangingFontSize}>
            {fontSizesOptionsList.map(eachItem => (
              <option value={eachItem.optionId} key={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </SelectElement>
          <ButtonElement type="submit">Generate</ButtonElement>
        </FormContainer>
        {this.generatingMeme()}
      </MainContainer>
    )
  }
}

export default MemeGenerator
