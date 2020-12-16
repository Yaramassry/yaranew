import React, { Component } from "react";
import cityTable from './cityTable.css';
import { connect } from 'react-redux';
import { getCities } from "../actions/CitiesAction";


class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properities:[],
         
        };
      }

     
        async componentWillReceiveProps(nextProps, nextState) {
         
            if (
              nextProps.properities !== this.state.properities
    
            ) {
              
              this.setState({
                  properities: nextProps.properities
                  })
                  console.log("11111");
              console.log(this.state.properities)
            
            } else {
              this.setState({
                properities:null
              });
          
            }
    
       
    }
    
    onProvinceClick(syriaCity){
        // alert(syriaCity); 
        
        this.props.getCities(true,syriaCity ,{"created_at":"desc"});
     
}
    render(){
            let filterCity=["دمشق","ريف دمشق","اللاذقية","حلب","حماة","الرقة",
            "درعا","دير الزور","طرطوس","الحسكة","القنيطرة","القامشلي","ادلب","حلب"];
            
             let ikars = this.state.properities;
            
            // console.log(ikars);
            return(
              <div>
                <div>
                    {filterCity.map(syriaCity => (
                        <button type="button"  class="btn btn-outline-success btn-lg"
                    onClick={this.onProvinceClick.bind(this,syriaCity)}>{syriaCity}</button>
                ))}  
                </div>
                <br/>
                <br/>
              
                  
                      
                <table className="customers" >
                    <thead>
                          <tr>
                            <th>IMG   </th>
                            <th>TITLE</th>
                            <th>MOBILE</th>
                          </tr>
                    </thead>
                    <tbody>
                      {ikars.map((ikar)=>(
                            <tr key={ikar.reference_id}>
                           
                            <td><img src={"http://207.180.233.248/" + ikar.thumbnails[0]} /></td>
                            <td >{ikar.title}</td>
                            <td>{ikar.agency_mobile}</td>
                            </tr>
                      ))}
                       
                    </tbody>
                </table>
        </div>
        )
    }

}

const mapStateToProps = (state) => ({
  properities:state.citiesR.properties
    });
export default connect(mapStateToProps, {
    getCities,
  })(Cities);