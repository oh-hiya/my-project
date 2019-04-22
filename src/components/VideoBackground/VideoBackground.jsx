// Libraries
import React, {Component} from 'react';

// Styles
import './VideoBackground.scss';

class VideoBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {children} = this.props;
    return (<div className="VideoBackground">
      <video
        src={"./video/videoplayback.mp4"}
        preload={"auto"}
        autoPlay={true}
        loop={true}
        muted={"muted"}
      />
      {children}
    </div>);
  }
}

export default VideoBackground;
