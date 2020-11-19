import {
  Segment,
  Form,
  Message,
  Icon,
  Button,
  Divider,
} from "semantic-ui-react";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Segment>
        <Message
          attached
          icon="settings"
          header="Get Started!"
          content="Create New Account!"
          color="teal"
        />
        <Divider />
        <Form>
          <Segment>
            <Message error header="Oops!" />
            <Message success header="yep!" />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              label="Name"
              placeholder="Name"
              name="name"
            />
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
            />
            <Button
              icon="signup"
              type="submit"
              color="orange"
              content="Signup"
            />
          </Segment>
        </Form>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Existing User?{" "}
          <Link href="/auth/login">
            <a>Login here</a>
          </Link>{" "}
          Instead!
        </Message>
      </Segment>
    </>
  );
}
