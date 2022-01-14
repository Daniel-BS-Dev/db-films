import { ReactComponent as StarFull } from '../../assets/starFull.svg';
import { ReactComponent as StarHalf } from '../../assets/starHalf.svg';
import { ReactComponent as StarEmpty } from '../../assets/starEmpty.svg';
import './styles.css';

type Props = {
  score: number;
}

type StarProps = {
  fill: number;
}

function getFills (score: number){

  const fills = [0,0,0,0,0];

  const integerPart = Math.floor(score);

  for(let i = 0; i < integerPart; i++){
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if(diff > 0){
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({fill} : StarProps){
  if(fill === 0){
    return <StarEmpty />
  }
  else if(fill === 1){
    return <StarFull />
  }
  else {
    return <StarHalf />
  }
}

const MovieStars = ({score} : Props ) => {

  const fills = getFills(score);

    return(
        <div className="dsmovie-stars-container">
        <Star fill={fills[0]} />
        <Star fill={fills[1]} />
        <Star fill={fills[2]} />
        <Star fill={fills[3]} />
        <Star fill={fills[4]} />
      </div>
    )
}

export default MovieStars ;