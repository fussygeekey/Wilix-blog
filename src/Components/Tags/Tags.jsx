import React from "react";

const Tag = ({ tagName, callback }) => {
    return (
        <div className="d-flex">
            <button className="btn btn-outline-primary me-2 mb-2" onClick={callback}>
                {tagName}
            </button>
        </div>
    );
};

const Tags = ({ tags }) => {
    return (
        <React.Fragment>
            <h2>
                Tags
            </h2>
            {!tags.lenght ?
                <p>
                    No tags
                </p>
                :
                <div className="d-flex flex-row mb-2 flex-wrap">
                    {tags.map(tag => <Tag key={tag.id} tagName={tag.name} />)}
                </div>
            }
        </React.Fragment>
    );
};

export default Tags;