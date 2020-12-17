import React, {useEffect, useState} from 'react';
import db from '../../firebase';
import NewPost from './NewPost';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])

  function getPosts(postList) {
    return postList.map(({data,id}) => {
      console.log(data)
      return <Post
        key={id}
        profilePic={data.profilePic}
        message={data.message}
        timestamp={data.timestamp}
        username={data.username}
        image={data.image}
      />
    });
  }

  return (
    <div className="feed">
      <StoryReel/>
      <NewPost/>
      {getPosts(posts)}
    </div>
  )
}

export default Feed;
