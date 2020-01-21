import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVideo } from '../../actions';
import NotFound from '../../components/NotFound';
import { BackButton, Video } from './styles';

const Player = (props) => {
  const {
    playing,
    params: {
      match: { id },
    },
  } = props;
  const isPlaying = Object.keys(playing).length > 0;

  React.useEffect(() => {
    props.getVideo(id);
  }, []);

  return isPlaying ? (
    <div>
      <BackButton onClick={() => props.history.goBack()} />
      <Video src={playing.source} type="video/mp4" controls autoPlay />
    </div>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  id: PropTypes.number,
  playing: PropTypes.object.isRequired,
  getVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
