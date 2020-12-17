import React from 'react';
import Story from './Story';


function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/id/1022/200/300"
        profileSrc="https://picsum.photos/id/1005/200/300"
        title="Cassandra Drake"
      />
      <Story
        image="https://picsum.photos/id/1024/200/300"
        profileSrc="https://picsum.photos/id/1006/200/300"
        title="Kellie Mcdonald"
      />
      <Story
        image="https://picsum.photos/id/1023/200/300"
        profileSrc="https://picsum.photos/id/1012/200/300"
        title="Leigh Vaughan"
      />
      <Story
        image="https://picsum.photos/id/1020/200/300"
        profileSrc="https://picsum.photos/id/1/200/300"
        title="Sid Chase"
      />
      <Story
        image="https://picsum.photos/id/102/200/300"
        profileSrc="https://picsum.photos/id/1025/200/300"
        title="Arnoldo Kelly"
      />
      <Story
        image="https://picsum.photos/id/101/200/300"
        profileSrc="https://picsum.photos/id/1011/200/300"
        title="Jackson Dean"
      />
    </div>
  );
}

export default StoryReel;
