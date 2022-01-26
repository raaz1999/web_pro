import React from "react";
import {Marker, Popup} from 'react-map-gl';
import axios from "axios";
import {Star} from "@material-ui/icons";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {format} from "timeago.js"



class Resto extends React.Component {
  constructor(props){
    super(props)
    this.state={
			'resto': null,
      'currentplace':null
		}
    
   
  }

  async data_resto(){
    try{
      await axios.get("http://localhost:4000/restaurant/getRestaurant").then((res)=>{
        this.setState({
          'resto': res,
          'currentplace':null
        })
      })
      
    }catch(err){
      console.log(err)
    }
  } 

  componentWillMount(){
    this.data_resto()
  }

  handelchangepl(id){
    this.setState({
      'resto': this.state.resto,
      'currentplace': id
    })
  }

  render(){
    
    return(
      <>{this.state.resto && this.state.resto.data.data.map((x)=>{
        
        try{
          
      

        return(<>


        {this.state.currentplace===x.recordid &&(
        <Popup
        latitude={x.geometry.coordinates[1]}
        longitude={x.geometry.coordinates[0]}
        closeButton={true}
        closeOnClick={false}
        anchor="top"
        style={{ position: 'relative', zIndex: '4' }}
        onClose={()=>{this.setState({
          'resto': this.state.resto,
          'currentplace': null
        })}}
        >
          
                  <label>adresse :</label>
                  <h4 className="place">{x.fields.adresse}</h4>
                  <label>nom :</label>
                  <p className="desc">{x.fields.nom_restaurant}</p>
                  <label>note :</label>
                  <p>
                  <div className="stars">
                      {Array(parseInt(Math.random()%0.5*10)+1).fill(<Star />)}
                  </div>
                  </p>
                  <label>Date d'enregistrement de la donnée  :</label>
                  <p><span className="date">{format(x.record_timestamp)}</span></p>


        </Popup>)}
        <Marker
              latitude={x.geometry.coordinates[1]}
              longitude={x.geometry.coordinates[0]}
              offsetLeft={-11 }
              offsetTop={-20 }
              style={{zIndex:3}}
            >
              <RestaurantIcon
                style={{
                  fontSize: 2 * this.props.vue.zoom,
                  color:"tomato" ,
                  cursor: "pointer",
                }}

                onClick={()=>this.handelchangepl(x.recordid)}
                
              />
        </Marker>

      
        </>
        )


        }catch(err){}
      
      })}</>
    )
  }





 
}


export default Resto;