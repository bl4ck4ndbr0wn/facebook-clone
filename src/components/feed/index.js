import React, {useState} from 'react';
import NewPost from './NewPost';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  const [posts, setPosts] = useState([{
    data: {
      id: '1',
      profilePic: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/10421336_868268546622447_903674747076133243_n.jpg?_nc_cat=107&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGmqHOso1WJv_FU4Tlb8VxluHDBSCw4ieO4cMFILDiJ4-b79JnnrFvy2aXx9enRg5OLOtMJFsyWYPzoyjtSXxc2&_nc_ohc=cidTXOnas5kAX8JTDIc&_nc_ht=scontent.fnbo1-1.fna&tp=27&oh=86d20866e3be7481571449b1766f5bc2&oe=6000231E',
      message: 'Looking for developers in kotlin || php || vuejs || python junior...medium level skill level.  Its a full time position. Location:Nairobi  Send me cv || portifolio || github link through kiura@hokela.co.ke',
      timestamp: new Date(),
      username: 'Denis Mugendi',
      image: 'https://www.careeraddict.com/uploads/article/57993/write-job-application-letter.jpg',
    }
  }]);

  function getPosts(postList) {
    return postList.map(({data}) => {
      console.log(data)
      return <Post
        key={data.id}
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
