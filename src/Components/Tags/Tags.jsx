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
    if (!tags.lenght) {
        return (
            <p>
                No tags
            </p>
        );
    }

    return (
        <div className="d-flex flex-row mb-2 flex-wrap">
            {tags.map(tag => <Tag key={tag.id} tagName={tag.name} />)}
        </div>
    );
};

export default Tags;