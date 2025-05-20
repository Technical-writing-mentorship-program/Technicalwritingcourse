import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetEmbed = ({ tweetId }) => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  );
};

export default TweetEmbed;
 