import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import soullyApp from './reducers/reducers'
import { addStory, likeStory,setVisibilityFilter,VisibilityFilters} from './actions/actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import '././css/header_s.css';
import '././css/new-mood-page.css';
import '././css/stories.css'
import '././css/quote.css'

import '././css/containers.css'
import '././css/story-input.css'
import '././css/button.css'

import moment from 'moment';


import Header from './components/header/header';
import MoodGroup from './components/mood-group/mood-group';
import StoryBoard from './components/guest-page/storyBord';
import Quote from './components/guest-page/quote'
import Posts from './components/story-page/storyline'
import StoryEdit from './containers/story-editor'
import PostsWithLikes from './containers/LikedStoryline'

import '././css/daily-log.css';
import '././css/header_s.css';
import '././css/calendar.css';

import '././css/recomendation.css';


import DailyMood from './components/recomendation-page/daily-status/daily';
import DailyLog from './components/recomendation-page/daily-log/daily-log';
import Recomendation from './components/recomendation-page/swiper/swiper';
import MonthDetail from './components/recomendation-page/monthly-log/month-container';
//import LikedStoryLine from './containers/LikedStoryline'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

import videoClip from './assets/video/Nature.mp4'
import Reservation from './components/mood-group/test'

import MoodG from './components/mood-group/test'
library.add(faGhost)



function App() {
  return (
    <Router>
      <div>
        <Header_func />
        
        
        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />

        <Route path="/guest" component={Guest} />
        <Route path="/stories" component={Storypage} />
  <Route path="/month" component={Guest} />
       

        <Route path="/mood" component={MoodG} />

      </div>
    </Router>
  );
}


function Guest(){
  return (
  <div>
     <MoodG/>
     <div >
    <Quote mood="sad" />
  <StoryBoard mood="sad" visible='true'/>
  </div>

 </div>
  )
}
function Storypage(){
  return(
    <div>
    <StoryEdit></StoryEdit>
    <PostsWithLikes/>
    </div>
  )
}

function Home() {
  return(
     <div>
    </div>
  );
  /*return (
  <div>
      <MoodGroup/>
      <video  className="video" playsInline autoPlay muted loop id="myVideo">
                                <source src={videoClip} type="video/mp4"/>
        </video> 
      <Reservation/>
    </div>
  );*/
}

function Day() {
  var action=["Running","Water","Sport"];
  var date=moment().format("YYYY-MM-DD");
  console.log("date now ",date);
  return(
    <div>
    <div className="recomendation">
    <Recomendation mood="sad" category="books"/>
    <Recomendation mood="sad" category="films"/>
    <Recomendation mood="sad" category="activities"/>
    </div>
    <DailyMood username="Tom" mood="sad" actions={action} date={date}/> 

    <MonthDetail/>

   
    </div>
  );
  // return recomendation page
}
function Month(){
  return (
    <div>
 <StoryBoard/>
   </div>
  );

}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header_func() {
  return (
    <Header/>
  );
  /*return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );*/

}

export default App;