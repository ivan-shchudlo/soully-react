import React from 'react';
import { chooseMood } from '../../actions';

class Mood extends React.Component {
    constructor(props) {
        super(props);
                   
 }
    
    render() {
        let imgElement;
        let showlabel;
        if (this.props.selected === this.props.mood)
        {
            imgElement = <img className={this.props.mood} src = {this.props.imgClicked}/>;
            showlabel = "showLabel";
        }
        else 
        {
            imgElement = <img className={this.props.mood} src = {this.props.img}/>
            showlabel = "hideLabel";
        }
      return (
        <div   className="flex-item" >
        <label>        
    <input className="hide" 
        name="mood"
        type={this.props.type}   
        value={this.props.mood}
        onChange={this.props.onClick}
       
       />
    {/* <img className={this.props.mood} src = {this.props.img}/> */}
    {imgElement}
    <h6 className= {showlabel} > {this.props.mood}</h6>
 
  </label>    
</div>
      );
    }
  }
  export default Mood
