import { Container } from 'react-bootstrap';
import styles from './Privacy.module.scss';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Link from 'next/link';

const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <PageHeader heading="Privacy Policy" />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.privacyPolicy}>
            <p>
              <span>Arima</span> is committed to providing quality services to
              you and this policy outlines our ongoing obligations to you in
              respect of how we manage your Personal Information. We have
              adopted the Australian Privacy Principles (APPs) contained in the
              Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way
              in which we collect, use, disclose, store, secure and dispose of
              your Personal Information. A copy of the Australian Privacy
              Principles may be obtained from the website of The Office of the
              Australian Information Commissioner at https://www.oaic.gov.au/.
            </p>
          </div>
          <div className={styles.personalInfo}>
            <h3>What is Personal Information and why do we collect it?</h3>
            <p>
              Personal Information is information or an opinion that identifies
              an individual. Examples of Personal Information we collect
              includes names, addresses, email addresses, phone and facsimile
              numbers. This Personal Information is obtained in many ways
              including name, email, our website and from third parties.
            </p>
            <p>
              We don’t guarantee website links or policy of authorised third
              parties. We collect your Personal Information for the primary
              purpose of providing our services to you, providing information to
              our clients and marketing. We may also use your Personal
              Information for secondary purposes closely related to the primary
              purpose, in circumstances where you would reasonably expect such
              use or disclosure.
            </p>
            <p>
              You may unsubscribe from our mailing/marketing lists at any time
              by contacting us in writing. When we collect Personal Information
              we will, where appropriate and where possible, explain to you why
              we are collecting the information and how we plan to use it.
            </p>
          </div>
          <div className={styles.sensitive}>
            <h3>Sensitive Information</h3>
            <p>
              Sensitive information is defined in the Privacy Act to include
              information or opinion about such things as an individual racial
              or ethnic origin, political opinions, membership of a political
              association, religious or philosophical beliefs, membership of a
              trade union or other professional body, criminal record or health
              information.
            </p>
            <p>Sensitive information will be used by us only:</p>
            <ul>
              <li>For the primary purpose for which it was obtained</li>
              <li>
                For a secondary purpose that is directly related to the primary
                purpose
              </li>
              <li>
                With your consent; or where required or authorised by law.
              </li>
            </ul>
          </div>
          <div className={styles.disclosure}>
            <h3>Disclosure of Personal Information</h3>
            <p>
              Your Personal Information may be disclosed in a number of
              circumstances including the following:
            </p>
            <ul>
              <li>
                Third parties where you consent to the use or disclosure; and
              </li>
              <li>Where required or authorised by law.</li>
            </ul>
          </div>
          <div className={styles.security}>
            <h3>Security of Personal Information</h3>
            <p>
              Your Personal Information is stored in a manner that reasonably
              protects it from misuse and loss and from unauthorized access,
              modification or disclosure. When your Personal Information is no
              longer needed for the purpose for which it was obtained, we will
              take reasonable steps to destroy or permanently de-identify your
              Personal Information. However, most of the Personal Information is
              or will be stored in client files which will be kept by us for a
              minimum of 7 years.
            </p>
          </div>
          <div className={styles.complaints}>
            <h3>Privacy Policy Complaints and Enquiries</h3>
            <p>
              If you have any queries or complaints about our Privacy Policy
              please contact us at: <Link href="/contact">Contact Me</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
