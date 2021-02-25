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
            title: 'Page 2',
            active: 'page2',
        },
    };
};

export default Page;
