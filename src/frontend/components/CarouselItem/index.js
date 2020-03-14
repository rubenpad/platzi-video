import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserMovie, deleteUserMovie } from '../../actions'

import {
  Item,
  Cover,
  Detail,
  Action,
  AddButton,
  PlayButton,
  CheckButton,
} from './styles'

const CarouselItem = props => {
  const { isLibrary, id, title, cover, year, contentRating, duration } = props

  const handleSetFavorite = () => {
    return props.setUserMovie({
      movie: {
        id,
        title,
        cover,
        year,
        contentRating,
        duration,
      },
    })
  }

  const handleDeleteFavorite = movieId => {
    return props.deleteUserMovie(movieId)
  }

  return (
    <Item>
      <Cover src={cover} alt="Video Cover" />
      <Detail>
        <Action>
          <Link to={`/player/${id}`}>
            <PlayButton />
          </Link>
          {!isLibrary ? (
            <AddButton onClick={handleSetFavorite} />
          ) : (
            <CheckButton onClick={() => handleDeleteFavorite(id)} />
          )}
        </Action>
        <h3>{title}</h3>
        <p>{`${year} ${contentRating} ${duration}min`}</p>
      </Detail>
    </Item>
  )
}

CarouselItem.propTypes = {
  isLibrary: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setUserMovie,
  deleteUserMovie,
}

export default connect(null, mapDispatchToProps)(CarouselItem)
