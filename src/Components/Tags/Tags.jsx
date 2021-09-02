const Tag = ({ tagName }) => {
    return (
        <div className="d-flex">
            <button className="btn btn-outline-primary me-2 mb-2">
                {tagName}
            </button>
        </div>
    );
};

const Tags = ({ tags }) => {
    return (
        <div className="d-flex flex-row mb-2 flex-wrap">
            {tags.map(tag => <Tag key={Date().toString()} tagName={tag.name} />)}
        </div>
    );
};

export default Tags;