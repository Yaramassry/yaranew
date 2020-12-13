import React, { Component } from "react";
import cityTable from './cityTable.css';
import { connect } from 'react-redux';
import { getCities } from "../actions/CitiesAction";


class Cities extends React.Component {
    constructor() {
        super();
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
                        <tr>
                          <td>Titanic</td>
                          <td>800000000</td>
                          <td>0965662433</td>
                          </tr>
                          <tr>
                          <td>Titanic</td>
                          <td>800000000</td>
                          <td>0965662433</td>
                          </tr>
                          <tr>
                          <td>Titanic</td>
                          <td>800000000</td>
                          <td>0965662433</td>
                          </tr>
                    </tbody>
                </table>
        </div>
        )
    }

}

const mapStateToProps = (state) => ({
  properities:state.citiesR
    });
export default connect(mapStateToProps, {
    getCities,
  })(Cities);