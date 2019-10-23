import React from 'react'

const Profile = ({ name, blurb, ...props }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{blurb}</p>
        </div>
    )
}

export default Profile
