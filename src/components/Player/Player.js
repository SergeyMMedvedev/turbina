import { useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import ExtendBtn from './ExtendBtn';
import PlayerInfoContainer from './PlayerInfoContainer';
import PlayerVideoBtn from './PlayerVideoBtn';
import tracks from '../../db/tracks';
import PlayerCover from './PlayerCover';
import { useSpring, animated } from 'react-spring';


function Player ({ isPlayerExtend, onPlayerExtend, style, currentTrack, onSetCurrentTrack }) {
  // const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isTextInfo, setTextInfo] = useState(false);
  const [isExtendElementsMounted, setIsExtendElementsMounted] = useState(false);

  const extendPlayerAnimationConfig = useSpring({
    from: { opacity: .1, scale: 0.8 },
    to: { opacity: isPlayerExtend ? 1 : 0.1, scale: isPlayerExtend ? 1 : 0.8 },
    config: { duration: 250 },
    // delay: !isPlayerExtend ? 100 : 0,
    onRest: () => {
      if (!isPlayerExtend) {
        setIsExtendElementsMounted(false)
      }
    } 
  });

  const handleExtendClick = () => {
    onPlayerExtend();
    setIsExtendElementsMounted(true);
  }

  const handleTrackClick = (track) => {
    onSetCurrentTrack(track);
  }

  const handlePlayerSwitcherClick = () => {
    setTextInfo(!isTextInfo);
  }

  const AnimatedPlayerCover = animated(PlayerCover);
  
  return (
    <section className="player" style={style}>
      {isExtendElementsMounted && 
        <AnimatedPlayerCover
          image={currentTrack.albumPicture}
          style={extendPlayerAnimationConfig}
        />
      }
      <PlayerController
        isPlayerExtend={isPlayerExtend}
        track={currentTrack}
      />
      <ExtendBtn
        isOpen={isPlayerExtend}
        onBtnClick={handleExtendClick}
      />
      {isPlayerExtend && 
        <PlayerInfoContainer
        isOpen={isPlayerExtend}
        onTrackClick={handleTrackClick}
        tracks={tracks}
        isTextInfo={isTextInfo}
        currentTrack={currentTrack}
        />
      }
      {isExtendElementsMounted &&
        <animated.div 
          className="player__buttons-wrapper"
          style={extendPlayerAnimationConfig}
        >
          <PlayerVideoBtn 
            videoLink={currentTrack.videoLink}
          />   
          <PlayerSwitcher
            onClick={handlePlayerSwitcherClick}
            isTextInfo={isTextInfo}
          />
        </animated.div>
      }
    </section>
  )
}

export default Player;
