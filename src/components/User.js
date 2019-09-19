import React from "react";
import { Card, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";


const User = () => (
  <UserConsumer>
    { user => (
      <Card>
        <Card.Content>
          <Card.Header>{user.firstName}</Card.Header>
          <Card.Meta>
            {user.lastName}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>
            email: {user.email}
          </p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User;
