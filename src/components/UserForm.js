import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";


class UserForm extends React.Component {
  state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email,
  };


handleChange = (e, {name, value, }) => {
  this.setState({ [name]: value, });
};

handleSubmit = (e) => {
  e.preventDefault();
  this.props.updateUser(this.state);
};

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
        <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          />
        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};

const ConnectedUserForm = (props) => {
  return(
    <UserConsumer> 
      { user => (
        <UserForm 
          {...props}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          updateUser={user.updateUser}
        />  
      )}
    </UserConsumer>
  )
}


export default ConnectedUserForm;



