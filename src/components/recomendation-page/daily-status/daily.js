import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import Stories from '../../../data/posts.js'
import {
    faQuoteLeft,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../css/button.css'
import store from '../../../store'

library.add(
    faQuoteLeft,
    faQuoteRight
)
class DailyMood extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories: []   
        }
    }
    componentDidMount () {
        var  mood_stories = [];
        var a = Stories.getAll().then((data) => {
            for(let i = 0; i < data.length; i++) {
                console.log(data[i], this.props.date)
                if(this.props.username == data[i].username && this.props.date == data[i].date)
                mood_stories.push(data[i]);  
            }
        })
        .then(() => { 
            this.setState({
                stories: mood_stories
            })
        })
    }

    render () {
   
        const stor = this.state.stories.map((story) =>
        <ol className="story">
            <FontAwesomeIcon icon={faQuoteLeft}> </FontAwesomeIcon>
            <article className="story_text"> {story.text} </article>
            <FontAwesomeIcon icon={faQuoteRight}>
            </FontAwesomeIcon>
        </ol> );

        const activities = this.state.stories.map((story) => 
         story.activities.map((activiti) =>
        <li> {activiti} </li>
         )
        );
        console.log(this.props.activity);
        var a = this.props.activiti.map((act)=>
        console.log(act))



        return( 
        <div className = "daily-log">
            <h1> Daily mood </h1>
            <div className="content">
       
            <div className="leftside">
            <div className = "mood">
                <h1> Your mood is </h1>
                <h1> {this.props.mood} </h1>
                </div>
                <div className = "action">
                    <h1>You've been up to</h1>
                    <ul  className = "block"> {activities} </ul>
                    </div>   
                    </div> 
                 <div className = "stories">
                     <h3> Your stories: </h3> 
                     <ul> {stor} </ul>
                     </div>
                      </div>
                     
                     <button className="round-btn"><Link to ="/">Keep track</Link></button>
                     </div>
                );
        }
}
export default DailyMood;
