import React, { Component } from "react";
//import login from './login.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { getLogin } from "../actions/loginAction";
import { connect } from 'react-redux';
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          user:{},
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
          input: {},
          errors: {}
        };
      //   this.handleChange = this.handleChange.bind(this);
      //   this.handleSubmit = this.handleSubmit.bind(this);
       }


      // handleChange(event) {
      //   let input = this.state.input;
      //   input[event.target.name] = event.target.value;
      
      //   this.setState({
      //     input
      //   });
      // }

    
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["email"] = "";
            this.setState({input:input});
      
            alert('Demo Form is submited');
        }
      }    



      async componentWillReceiveProps(nextProps, nextState) {
        if (
          nextProps.user !== this.state.user 

        ) {
        //   const { array } = nextProps;
          this.setState({
            id: nextProps.user.id,
            name: nextProps.user.name,
            email: nextProps.user.email,
            agency_admin: nextProps.user.agency_admin,
            ikar_admin: nextProps.user.ikar_admin,
            agency_ref_id:nextProps.user.agency_ref_id,
            blocked: nextProps.user.blocked,
            confirmed: nextProps.user.confirmed,
            token: nextProps.user.token,
            login: true,


          })
        console.log(this.state.name);
          toast.info("welcome  "+ nextProps.user.email);
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













      
      // validate(){
      //   let input = this.state.input;
      //   let errors = {};
      //   let isValid = true;
      //   if (!input["email"]) {
      //     isValid = false;
      //     errors["email"] = "Please enter your email Address.";
      //   }
      //   if (typeof input["email"] !== "undefined") {
          
      //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      //     if (!pattern.test(input["email"])) {
      //       isValid = false;
      //       errors["email"] = "Please enter valid email address.";
      //     }
      //   }
      //   this.setState({
      //     errors: errors
      //   });
      //   return isValid;
      // }

alertFun(event){
      const name = document.getElementById("name").value;
      const password = document.getElementById("pass").value;
      if (name !== "" && password.length >=8 ){
        this.props.getLogin(name,password, toast);
      
      }else if (name==""){
        toast.info("please enter your email");
      }else if(password==""){
        toast.info("please enter your password");
      }else if (password.length <8){
        toast.error("passwoard must be 8 charecters at least");
      }

      let input = this.state.input;
    // input[event.target.name] = event.target.value;

      this.setState({
        input
      });
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
                id ='name'
                label='Your name'
                pl
                group
                value={this.state.input.email}
                type='text'
                validate
                labelClass='white-text'
                
              />
              <MDBInput
                id ='pass'
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
                  <MDBBtn onClick={()=>{this.alertFun()}}
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
      <ToastContainer position="top-center"/>
    </MDBContainer>

  );
};
}

const mapStateToProps = (state) => ({
  user:state.loginR.user
  });


export default connect(mapStateToProps, {
    getLogin,
  })(Login);
