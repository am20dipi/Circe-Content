import React from 'react'

export default function NewVideoForm() {
    return (
        <form className="video-form">
            <input type="text" className="video-name" placeholder="video name"/>
            <input type="text" className="video-source" placeholder="video source"/>
            <input type="text" className="video-caption" placeholder="video caption"/>
            <button type="submit" value="submit"/>
        </form>
    )
}
