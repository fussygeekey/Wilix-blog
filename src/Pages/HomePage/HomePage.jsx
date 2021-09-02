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
                <Tags tags={[
                    {
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tagasd2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Taasdasdsafg1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tagasdfasdfasdf1"
                    },
                    {
                        id: 2,
                        name: "Tagsasdfasfasfasfasfasfasfasdf2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tagsafasf1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },{
                        id: 1,
                        name: "Tag1"
                    },
                    {
                        id: 2,
                        name: "Tag2"
                    },
                ]} />
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