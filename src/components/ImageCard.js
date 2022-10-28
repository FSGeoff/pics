import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        //Used to retrieve image info
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //waits until images are loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //gets height of image
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;
