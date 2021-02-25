import React from 'react';

interface Props {
    title?: string;
}

function Page(props: Props) {
    return <p>Should render the title {props.title}</p>;
}

export const getServerSideProps = async () => {
    return {
        props: {
            title: 'Page 1',
            active: 'page1',
        },
    };
};

export default Page;
