import React from 'react';
// Components
import CreatePostForm from '../../Components/CreatePostForm/CreatePostForm';
import Tags from '../../Components/Tags/Tags'
import GlobalFeedList from '../../Components/GlobalFeedList/GlobalFeedList';
import LocalFeedList from '../../Components/LocalFeedList/LocalFeedList';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <Tags tags={[]} />
                    <GlobalFeedList />
                </div>
                <div className="col">
                    <CreatePostForm />
                    <LocalFeedList />
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomePage;