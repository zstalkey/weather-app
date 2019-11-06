import React from 'react'

const Avatar = ({ image, ...props }) => {
    return <img src={image} alt="Logged In User Avatar" />;
};

export default Avatar
