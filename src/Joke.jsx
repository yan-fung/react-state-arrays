import { useState } from 'react';

export default function Joke({ id, text, favourite, onFavourite }) {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);


  const handleLike = () => {
    const newLike = likes + 1;
    setLikes(newLike)
    console.log(`like id: ${id}, totalLikes ${newLike}`)
  }

  const handleDislike = () => {
    const newDislike = dislikes + 1;
    setDislikes(newDislike)
    console.log(`dislike id: ${id}, totalDislike ${newDislike}`)
  }

  const handleFavourite = () => {
    onFavourite(id)
  }

  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes - dislikes}</p>
      <p>Favourite: {favourite ? "Yes" : "No"}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
      <button onClick={handleFavourite}>Favourite</button>
    </div>
  )
}