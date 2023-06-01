import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <PageHeader
        heading="Contact Me"
        sub="Please leave a message for any inquiries or questions"
      />
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
