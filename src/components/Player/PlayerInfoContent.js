import './PlayerInfoContent.css';
import PlayerTrack from './PlayerTrack';
import { useState, useEffect } from 'react';

function PlayerInfoContent({ tracks, isTextInfo, currentTrack, onTrackClick }) {

  const [contentStyle, setContentStyle] = useState('player__content');

  const setChangeStyle = () => {
    setContentStyle('player__content');
    setTimeout(() => {  
      setContentStyle('player__content player__content_loaded');
    }, 100)
  }

  const setTextLyricsFormat = (text) => {
    const textArray = text.split('\n')
    return textArray.map((line, i) => (
      <p key={i} className='player__text-line'>{line}</p>
    ))
  }

  const setSongLyrics = (currentTrack) => {
    return (<>
      <p className='player__info-header'>Текст песни:</p>
      {setTextLyricsFormat(currentTrack.text)}
    </>)
  }

  const setReleaseList = (tracks) => {
    if (tracks.length === 1) {
      return <p className='player__info-header'>Пока это единственный трек в проекте, но 12 декабря появятся новые</p>
    } else {
      return (
        <ul className='player__tracks'>
          {tracks.map((track, i) => (
            <li key={track.id} className='player__track-item'>
              <PlayerTrack
                trackId = {track.id}
                currentTrack={currentTrack}
                track={track}
                onTrackClick={onTrackClick}
                inList={true}
              />
            </li>
          ))}
        </ul>
      )
    }
  }

  const setInfoContent = (isTextInfo) => {
    return isTextInfo ? setSongLyrics(currentTrack) : setReleaseList(tracks)
  }

  useEffect(() => {
    setChangeStyle()
  }, [isTextInfo])

  return (
    <div className={contentStyle}>
      {setInfoContent(isTextInfo)}
    </div>   
  )
}

export default PlayerInfoContent;
