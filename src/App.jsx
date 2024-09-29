import { useState } from "react";
import news_feed from './sample_news_stories.json';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const handleDeleteStory = (index) => {
    setStories(stories.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onDelete={() => handleDeleteStory(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Story({ story, onDelete }) {
  return (
    <div className="story">
      <span className="delete" onClick={onDelete}>x</span>
      <div className="story_header">
        {story.image_url && (
          <div className="story_image">
            <img
              src={story.image_url}
              alt={story.title}
            />
          </div>
        )}
        <div>
          <h1>
            <a href={story.link} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h1>
          <p className="story_creator">{story.creator?.[0] || 'Unknown Author'}</p>
          <p>{story.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;