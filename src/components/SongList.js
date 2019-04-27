import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
renderList(){
    return this.props.songs.map( song => {
        return(
            <div className ="item" key={song.title}>
                <div className="right floated content">
                    <button 
                      className="ui button primary"
                      onClick ={ () => this.props.selectSong(song) }
                      >
                        Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        );
    });
   }



 render(){
     console.log(this.props)
     return <div className="ui divided list"> {this.renderList()} </div>;
    }

}

//controls everything from the storage/store
// every time a button is clicked mapStateToProps should rerun/re envoked
const mapStateToProps = (state) => {
    console.log(state)

    return { songs: state.songs };

}

//connect()(SongList); is valid JS its just retruning twice
export default connect(mapStateToProps, { selectSong })(SongList);

// Different way of doing component in the class name
// import React {Component} from 'react';

// class SongList extends Component {


// }