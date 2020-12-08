import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({mySelectedSong})=> {
if(!mySelectedSong){
    return<div>select a sng</div>
}
  return <div>
    Song Title : {mySelectedSong.title} 
    <br/>
    Duration : {mySelectedSong.duration}      
</div>
  
};

const mapStateToProps=(state1)=>{
    return {mySelectedSong: state1.selectedSong};

};
export default connect(mapStateToProps) (SongDetail);
