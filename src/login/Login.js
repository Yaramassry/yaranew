import React, { Component } from "react";
//import login from './login.css'; 
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { getLogin } from "../actions/loginAction";
import { connect } from 'react-redux';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            email: "",
            agency_admin: "",
            ikar_admin: "",
            agency_ref_id:"",
            blocked:"",
            confirmed: "",
            token: "",
        
          login: false,
        };
      }
      async componentWillReceiveProps(nextProps, nextState) {
        if (
          nextProps.id !== this.state.id &&
          nextProps.name !== this.state.name &&
          nextProps.email !== this.state.email &&
          nextProps.agency_admin !== this.state.agency_admin &&
          nextProps.ikar_admin !== this.state.ikar_admin &&
          nextProps.agency_ref_id !== this.state.agency_ref_id &&
          nextProps.blocked !== this.state.blocked &&
          nextProps.confirmed !== this.state.confirmed &&
          nextProps.token !== this.state.token &&
          nextProps.login !== this.state.login &&
          nextProps.id!== undefined &&
          nextProps.name!== undefined &&
          nextProps.email!== undefined &&
          nextProps.agency_admin!== undefined &&
          nextProps.ikar_admin!== undefined &&
          nextProps.agency_ref_id!== undefined &&
          nextProps.blocked!== undefined &&
          nextProps.confirmed!== undefined &&
          nextProps.token!== undefined &&
          nextProps.login!== false 
        ) {
        //   const { array } = nextProps;
          this.setState({
            id: nextProps.id,
            name: nextProps.name,
            email: nextProps.email,
            agency_admin: nextProps.agency_admin,
            ikar_admin: nextProps.ikar_admin,
            agency_ref_id:nextProps.agency_ref_id,
            blocked: nextProps.blocked,
            confirmed: nextProps.confirmed,
            token: nextProps.token,
            login: true,
        
            
          });
        } else {
          this.setState({
            id: null,
            name:  null,
            email:  null,
            agency_admin: null,
            ikar_admin:  null,
            agency_ref_id: null,
            blocked: null,
            confirmed:  null,
            token:  null,
            login:false,
          });
        }
      }


    render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
              width: '25rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>LOGIN</strong>
                  
                 
                </h3>
              </div>
              <MDBInput
                label='Your name'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <div className='md-form pb-3'>
                
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn onClick={()=>{alert( 'Hello' +this.state.name )}}
                    color='success'
                   
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Log in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}

const mapStateToProps = (state) => ({
        
        id: state.loginR.id,
        name: state.loginR.name,
        email: state.loginR.email,
        agency_admin: state.loginR.agency_admin,
        ikar_admin: state.loginR.ikar_admin,
        agency_ref_id:state.loginR.agency_admin,
        blocked:state.loginR.blocked,
        confirmed: state.loginR.confirmed,
        token: state.loginR.token,
        login:state.loginR.login,
  });

  
export default connect(mapStateToProps, {
    getLogin,
  })(Login);