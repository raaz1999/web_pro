import React from "react";
import {Marker, Popup} from 'react-map-gl';
import axios from "axios";
import {Star} from "@material-ui/icons";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import {format} from "timeago.js"



class Evenement extends React.Component {
  constructor(props){
    super(props)
    this.state={
			'eve': null,
      'currentplace':null
		}
    
   
  }

  async data_eve(){
    try{
      await axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs").then((res)=>{
        this.setState({
          'eve': res.data,
          'currentplace':null
        })
      })
      
    }catch(err){
      console.log(err)
    }
  } 

  componentWillMount(){
    this.data_eve()
  }

  handelchangepl(id){
    this.setState({
      'eve': this.state.eve,
      'currentplace': id
    })
  }

  render(){
    
    return(
      <>{this.state.eve && this.state.eve.records.map((x)=>{
        
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
          'eve': this.state.eve,
          'currentplace': null
        })}}
        >
                  <label>titre de l'évenement :</label>
                  <p>{x.fields.title_event}</p>
                  <label>adresse :</label>
                  <h4 className="place">{x.fields.address_street}</h4>
                  <label>description :</label>
                  <p className="desc">{x.fields.lead_text}</p>
                  <label>Date d'Evenement:</label>
                  <p>{format(x.fields.date_start)}</p>
                  <label>site de réservation :</label>
                  <p>{x.fields.url}</p>


        </Popup>)}
        <Marker
              latitude={x.geometry.coordinates[1]}
              longitude={x.geometry.coordinates[0]}
              offsetLeft={-11 }
              offsetTop={-20 }
              style={{zIndex:3}}
            >
              <AnnouncementIcon
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


export default Evenement;