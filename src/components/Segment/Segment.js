import radium from 'radium';
import React, {Component, PropTypes} from 'react';
import style from './Style';

@radium
class Segment extends Component {
  static propTypes = {
    children: PropTypes.node,
    heading: PropTypes.any,
  };

  render() {
    let heading = <h4 className='sd-segment-heading ui header'>{this.props.heading}</h4>;
    return (
      <div className='sd-segment ui segment' style={[style.segmentBase]}>
        {this.props.heading && heading}
        {this.props.children}
      </div>
    );
  }
}

export default Segment;