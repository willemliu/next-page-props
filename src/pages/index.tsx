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
            title: 'HOME',
            active: 'home',
        },
    };
};

export default Page;
