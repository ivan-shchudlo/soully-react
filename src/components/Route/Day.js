import React from 'react'
import DailyMood from '../recomendation-page/daily-status/daily';
import Recomendation from '../recomendation-page/swiper/swiper';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/daily-log.css';
import '../../css/containers.css';

import {DataLoaded,DataLoading} from '../../actions'
class Day extends React.Component{
    
    render() {
      
      
        return (
             <div>
                
                 <div className="scrollRec">
                 <div className = "recomendation">
                     <Recomendation mood = {this.props.mood} category = "books" classL="day_load "/>
                     <Recomendation mood = {this.props.mood} category = "films" classL="day_load hide "/>
                     <Recomendation mood = {this.props.mood} category = "activities" classL="day_load hide "/>
                     </div>
                     <div className="scrollDiv">
                   <a href="#scroll"> <div className ="arrow"></div></a>
                   </div>
                   
                          
                </div>
               
               
                
                    <div id ='scroll' className='scroll'>
                     <DailyMood  username = "Tom" mood = "sad" date = '19/6/2019'/>
                     </div>
                </div>
        )
    }

}
const mapStateToProps = (state)=>{
    console.log("state", state.changeMood.mood);
    return{
        mood:state.changeMood.mood
    }
}
const mapDispatchToProps = {
   
    DataLoading,
    DataLoaded
  
  
  };
export default (connect)(mapStateToProps,mapDispatchToProps)(Day);