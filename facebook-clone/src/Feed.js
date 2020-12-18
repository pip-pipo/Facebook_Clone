import React from 'react'
import './Post.css';
import './Feed.css'
import StoryReal from './StoryReal'
import MessageSender from './MessageSender';
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            {/* story real */}
            <StoryReal />
            {/* messageSender */}
            <MessageSender/>
            {/* post */}
            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEqKRPaqaOHWIyiKXq8YN6BMDy-vo5fg0gA&usqp=CAU" message="Hello Every on" timestamp="tismalfj" username="Nedaniya ho" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEqKRPaqaOHWIyiKXq8YN6BMDy-vo5fg0gA&usqp=CAU"/>
            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolE7NFSUjLh-Mf9RUdsbT5B7aiZCWndsuGw&usqp=CAU" message="hi world" timestamp=" hello eid mubarak all " username="Pm erdugan" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolE7NFSUjLh-Mf9RUdsbT5B7aiZCWndsuGw&usqp=CAU"/>
            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpgL-xTo0dmiK490iMj2ydnfBA6Y5eRrPLA&usqp=CAU" message="sdf" timestamp="dsdaf" username="Pm lfks" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpgL-xTo0dmiK490iMj2ydnfBA6Y5eRrPLA&usqp=CAU"/>
 

        </div>
    )
}

export default Feed
