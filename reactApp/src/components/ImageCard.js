import React, {createRef} from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {spans: 0}
        this.imageRef = createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({spans})
    }

    render() {
        const {urls, description} = this.props.image
        console.log(`span ${this.state.spans}`)
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard
