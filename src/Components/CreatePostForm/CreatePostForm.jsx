import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createPost } from '../../redux/actions';

const CreatePostForm = ({ createPost, login }) => {
    if (!login) {
        return null;
    }

    return (
        < React.Fragment >
            <h2>
                Create own post
            </h2>
            <Formik
                initialValues={{ heading: '', text: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    if (!values.heading.trim() || !values.text.trim()) {
                        setSubmitting(false);
                        return;
                    }

                    const newPost = {
                        id: Date.now().toString(),
                        title: values.heading,
                        text: values.text
                    };

                    createPost(newPost);

                    values.heading = '';
                    values.text = '';

                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="mb-3">
                        <label htmlFor="heading">
                            Post heading:
                        </label>
                        <Field type="text" name="heading" className="form-control mb-3" id="heading" />
                        <label htmlFor="text">
                            Text:
                        </label>
                        <Field as="textarea" rows={6} type="text" name="text" className="form-control mb-3" id="text" />
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Publish now
                        </button>
                    </Form>
                )}
            </Formik>
        </React.Fragment >
    );
};

const mapDispatchToProps = dispatch => {
    return {
        createPost: props => dispatch(createPost(props))
    };
};

export default connect(null, mapDispatchToProps)(CreatePostForm);