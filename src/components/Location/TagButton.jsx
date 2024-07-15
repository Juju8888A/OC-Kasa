import React from 'react';

const TagButton = ( {tags} ) => {
    return (
        <div className="div-tag">
                <ul>
                {tags.map((tag, index) => (
                    <li key={index} className="tag-button">{tag}</li>
                ))}
                </ul>
              </div>
    );
};

export default TagButton;