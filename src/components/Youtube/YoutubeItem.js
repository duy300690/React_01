import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className="youtube-item">
        <div className={`youtube-image ${props.className}`}>
          <img src={props.image} alt="" className="youtube-image" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title || "this is example of title"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "this is exmple of author"}
            </h4>
          </div>
        </div>
      </div>
    );
};

export default YoutubeItem;