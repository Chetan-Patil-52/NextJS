import React from 'react'

const postnumberDisplay = ({ params }: { params: { postnumber: number } }) => {
    const { postnumber } = params;
    return (
        <div>Your post-id : {params.postnumber}</div>
    );
};

export default postnumberDisplay;
