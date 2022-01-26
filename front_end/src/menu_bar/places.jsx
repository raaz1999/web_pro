import React from "react";
import {Marker, Popup} from 'react-map-gl';
import axios from "axios";
import {Star} from "@material-ui/icons";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {format} from "timeago.js"
import {Room} from "@material-ui/icons";



class Places extends React.Component {
  constructor(props){
    super(props)
    this.state={
			'place': null,
      'currentplace':null
		}
  }

  async data_place(){
    try{
      await axios.get("http://localhost:4000/place/get_place").then((res)=>{
        this.setState({
          'place': res.data.data,
          'currentplace':null
        })
      })
    }catch(err){
      console.log(err)
    }
  } 

  componentWillMount(){
    this.data_place().then(()=>{
      console.log(this.state.place)
    })
  }

  handelchangepl(id){
    this.setState({
      'place': this.state.place,
      'currentplace': id
    })
  }

  render(){
    
    return(
      <>{this.state.place && this.state.place.map((x)=>{
        
        try{
          

        return(<div key={x._id}>
          {this.state.currentplace===x._id &&(
        <Popup 
        key={x._id}
        latitude={x.latitude}
        longitude={x.longitude}
        closeButton={true}
        closeOnClick={false}
        anchor="top"
        style={{ position: 'relative', zIndex: '4' }}
        onClose={()=>{this.setState({
          'place': this.state.place,
          'currentplace': null
        })}}
        >
                  <label>crée par :</label>
                  <h4 className="place">{x.made}</h4>
                  <label>adresse :</label>
                  <h4 className="place">{x.adresse}</h4>
                  <label>nom :</label>
                  <p className="desc">{x.Name}</p>
                  <label>note :</label>
                  <p>
                  <div className="stars">
                      {Array(parseInt(x.note)).fill(<Star />)}
                  </div>
                  </p>
                  <label>Date d'enregistrement de la donnée  :</label>
                  <p><span className="date">{format(x.date)}</span></p>

        </Popup>)}
          <Marker
              latitude={x.latitude}
              longitude={x.longitude}
              offsetLeft={-11 }
              offsetTop={-20 }
              style={{zIndex:3}}
            >
              <Room
              key={x._id}
                style={{
                  fontSize: 2 * this.props.vue.zoom,
                  color:"tomato" ,
                  cursor: "pointer",
                }}

                onClick={()=>this.handelchangepl(x._id)}
                
              />
        </Marker>

        </div>
          
        )
        }catch(err){}
      
      })}</>
    )
  }
}


export default Places;