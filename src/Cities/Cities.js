import React, { Component } from "react";
import cityTable from './cityTable.css';
import { connect } from 'react-redux';
import { getCities } from "../actions/CitiesAction";


class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            city:{},
            parking: "" ,
            temp_status: "",
            reference_id: "",
            agency_ref_id: "",
            type: "",
            title: "",
            gps_location: "",
            province: "",
            price: "",
            rank: "",
            agency_mobile: "",
            floor: "",
            views: "",
            num_contacts: "",
            area: "",
            visible: "",
            agency_name: "",
            business_status: "",
            garage: "",
            bathrooms: "",
            bedrooms: "",
            pricing_type: "",
            furnitured: "",
            business_offer: "",
            lift: "",
            days: "",
            thumbnails: "",
            price_upon_review:"",
            getIkars:false,

        };
      }

     
        async componentWillReceiveProps(nextProps, nextState) {
            if (
              nextProps.city !== this.state.city 
    
            ) {
           
              this.setState({
               
                parking:nextProps.city.parking ,
                temp_status: nextProps.city.temp_status,
                reference_id:nextProps.city.reference_id ,
                agency_ref_id:nextProps.city.agency_ref_id ,
                type: nextProps.city.type,
                title:nextProps.city. title,
                gps_location:nextProps.city.gps_location ,
                province:nextProps.city.province ,
                price:nextProps.city.price,
                rank: nextProps.city.rank,
                agency_mobile:nextProps.city.agency_mobile ,
                floor:nextProps.city.floor ,
                views: nextProps.city.views,
                num_contacts: nextProps.city. num_contacts,
                area:nextProps.city.area ,
                visible:nextProps.city.visible ,
                agency_name: nextProps.city.agency_name,
                business_status:nextProps.city.business_status ,
                garage:nextProps.city.garage ,
                bathrooms: nextProps.city.bathrooms,
                bedrooms:nextProps.city.bedrooms ,
                pricing_type:nextProps.city.pricing_type ,
                furnitured:nextProps.city.furnitured ,
                business_offer:nextProps.city.business_offe ,
                lift: nextProps.city.lift,
                days: nextProps.city.days,
                thumbnails:nextProps.city.thumbnails ,
                price_upon_review:nextProps.city.price_upon_review,
               // getIkars:true
        
    
              })
              console.log(this.state.title)
            
            } else {
              this.setState({
                parking: null,
                temp_status: null,
                reference_id: null,
                agency_ref_id: null,
                type: null,
                title: null,
                gps_location: null,
                province: null,
                price: null,
                rank: null,
                agency_mobile: null,
                floor:null,
                views: null,
                num_contacts: null,
                area:null,
                visible:null ,
                agency_name: null,
                business_status: null,
                garage: null,
                bathrooms:null,
                bedrooms: null,
                pricing_type: null,
                furnitured: null,
                business_offer: null,
                lift: null,
                days: null,
                thumbnails: null,
                price_upon_review:null,
               // getIkars:false
              });
              console.log(this.state.title)
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
    city:state.citiesR.city
    });
export default connect(mapStateToProps, {
    getCities,
  })(Cities);