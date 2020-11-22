import React from 'react';
import Album from './Album';
import { connect } from 'react-redux';

import { getAlbums } from '../actions/albumActions';

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  async componentWillReceiveProps(nextProps, nextState) {
    if (
      nextProps.albums !== this.state.albums &&
      nextProps.albums[0] !== undefined
    ) {
      const { albums } = nextProps;
      this.setState({
        albums,
      });
    } else if (
      nextProps.albums[0] === undefined ||
      nextProps.albums.length === 0
    ) {
      this.setState({
        albums: [],
      });
    }
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.albums.slice(0, 12).map((album) => (
              <Album
                key={album.id}
                url={album.url}
                thumbnailUrl={album.thumbnailUrl}
                title={album.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  albums: state.albumR.albums,
});

export default connect(mapStateToProps, {
  getAlbums,
})(Albums);
