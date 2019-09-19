import React from "react";


export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;


class UserProvider extends React.Component {
  state = {
    firstName: "shannon",
    lastName: "jones",
    email: "theshannonjones@gmail.com",

  };

  updateUser = (user) => this.setState({ ...user, });

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          updateUser: this.updateUser,
        }}
      >
        { this.props.children }
      </UserContext.Provider>
    );
  };
};

export default UserProvider;