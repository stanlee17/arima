import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Form, Container } from 'react-bootstrap';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <PageHeader
        heading="Contact Me"
        sub="Please leave a message for any inquiries or questions"
      />
      <Container>
        <div className={styles.wrapper}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name..."
                className={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email..."
                className={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Message..."
                className={styles.input}
              />
            </Form.Group>

            <button className={styles.button}>Submit</button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
