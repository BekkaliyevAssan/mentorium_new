import styled from 'styled-components'

const ImageStyle = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    object-fit: cover;
    padding: 0;
    ${props => props.withFilter &&
        `
        filter: brightness(35%);
        `
    }

    ${props => props.withBrightFilter &&
        `
        filter: brightness(650%);
        `
    }
    padding: 0 auto;

    ${props => props.welcome &&
        `
        margin-top: -340px;
        margin-right: 40px;
        `
    }

    ${props => props.navbar &&
        `
        
        `
    }

    ${props => props.professionHeader &&
        `
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -200px;
        `
    }

`

export default ImageStyle;
