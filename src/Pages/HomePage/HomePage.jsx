import React from 'react';
// Components
import Tags from '../../Components/Tags/Tags'
import GlobalFeedList from '../../Components/GlobalFeedList/GlobalFeedList';
import LocalFeedList from '../../Components/LocalFeedList/LocalFeedList';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className="flex">
                <h2>
                    Tags
                </h2>
                <Tags tags={[]} />
            </div>
            <div className="row">
                <div className="col">
                    <h2>
                        Global feed
                    </h2>
                    <GlobalFeedList posts={[]} />
                </div>
                <div className="col">
                    <h2>
                        Local feed
                    </h2>
                    <LocalFeedList posts={[]} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomePage;