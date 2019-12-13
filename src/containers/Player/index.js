import React from 'react';
import { connect } from 'react-redux';

import { getVideo } from '../../actions';
import NotFound from '../../components/NotFound';
import { Back, Button, Video } from './styles';

const Player = (props) => {
  const { id } = props.match.params;
  const { playing } = props;
  const isPlaying = Object.keys(playing).length > 0;

  React.useEffect(() => {
    props.getVideo(id);
  }, []);

  return isPlaying ? (
    <div>
      <Back>
        <Button type="button">Back</Button>
      </Back>
      <Video src={playing.source} type="video/mp4" controls autoPlay />
    </div>
  ) : (
    <NotFound />
  );
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
