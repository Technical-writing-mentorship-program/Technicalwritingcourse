import React, { useEffect } from 'react';

const TweetEmbed = ({ tweetUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <a href={tweetUrl}></a>
    </blockquote>
  );
};

export default TweetEmbed;