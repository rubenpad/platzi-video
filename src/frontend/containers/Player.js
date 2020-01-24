import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getVideo } from '../actions'
import { BackButton, Video } from './styles'

const Player = props => {
  const {
    playing,
    match: {
      params: { id },
    },
  } = props

  React.useEffect(() => {
    props.getVideo(id)
  }, [])

  return (
    <div>
      <BackButton onClick={() => props.history.goBack()} />
      <Video src={playing.source} type="video/mp4" controls autoPlay />
    </div>
  )
}

Player.propTypes = {
  id: PropTypes.number,
  playing: PropTypes.object,
  getVideo: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
