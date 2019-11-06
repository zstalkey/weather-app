import React from 'react'

const Profile = ({ name, blurb, ...props }) => {
    return (
        <div>
            <h2>Timothy Tucker</h2>
            <p>Timothy is a weather wizard</p>
        </div>
    )
}

export default Profile;
