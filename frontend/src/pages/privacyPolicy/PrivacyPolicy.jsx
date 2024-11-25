import React, { useState, useEffect } from "react";
import styles from "./privacyPolicy.module.css";
import Runline from "../../components/runline/Runline";
import Header from "../../components/header/Header";

export default function PrivacyPolicy() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
      <Header full={false} transparent={true} width={width}></Header>
      <Runline text="/POLICY/ ON PERSONAL /DATA/ PROCESSING"></Runline>
      <div className={styles.container}>
        <div className={styles.chapter}>
          <h2 className={styles.title}>1. GENERAL PROVISIONS</h2>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.1. </span>This policy on personal data processing (hereinafter referred to as the Policy) establishes
            the main provisions regarding the processing of personal data of users of the website (hereinafter referred to as the subject of personal
            data) collected by the operator on its website in the information and telecommunication network "Internet" at www.ilovefirstclass.com
            (hereinafter referred to as the site).
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.2. </span>This Policy has been developed in accordance with the Constitution of the Russian Federation,
            Federal Law No. 152-FZ of July 27, 2006 "On Personal Data," and other regulatory legal acts of the Russian Federation that regulate
            relations in the field of personal data processing.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.3. </span>The list of personal data subject to collection and processing on the site is established in
            accordance with the requirements of Federal Law No. 152-FZ of July 27, 2006 "On Personal Data."
          </p>

          <p className={`${styles.paragraph} ${styles["list-title"]}`}>
            <span className={styles.number}>1.4. </span>
            The operator adheres to the following main principles of personal data processing:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>1% Personal data processing must be carried out on a lawful and fair basis;</li>
            <li className={styles["list-item"]}>
              1% Personal data processing should be limited to achieving specific, predetermined, and lawful purposes;
            </li>
            <li className={styles["list-item"]}>
              1% It is not allowed to process personal data that is incompatible with the purposes of collecting personal data;
            </li>
            <li className={styles["list-item"]}>
              1% Combining databases containing personal data, the processing of which is carried out for purposes incompatible with each other, is
              not allowed;
            </li>
            <li className={styles["list-item"]}>1% Only personal data that meets the purposes of its processing is subject to processing;</li>
            <li className={styles["list-item"]}>
              1% The content and volume of processed personal data must correspond to the stated purposes of processing;
            </li>
            <li className={styles["list-item"]}>
              1% Processed personal data should not be excessive in relation to the stated purposes of processing;
            </li>
            <li className={styles["list-item"]}>
              1% When processing personal data, the accuracy of personal data, its sufficiency, and, if necessary, relevance in relation to the
              purposes of personal data processing must be ensured;
            </li>
            <li className={styles["list-item"]}>
              1% The operator must take necessary measures or ensure that measures are taken to delete or clarify incomplete or inaccurate data;
            </li>
            <li className={styles["list-item"]}>
              1% Personal data storage should be carried out in a form that allows identifying the subject of personal data no longer than the
              purposes of personal data processing require, unless the retention period of personal data is established by federal law or an agreement
              to which the subject of personal data is a party, beneficiary, or guarantor;
            </li>
            <li className={styles["list-item"]}>
              1% Processed personal data is subject to destruction or depersonalization upon achieving the purposes of processing or in case of losing
              the need to achieve these purposes, unless otherwise provided by federal law.
            </li>
          </ul>

          <p className={styles.paragraph}>
            <span className={styles.number}>1.5. </span>Personal data processing is carried out solely for the purpose of providing services that the
            subject of personal data requests from the operator's site.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.6. </span>The subject of personal data makes the decision to provide their personal data and consents to
            its processing freely, by their will, and in their interest. Consent to personal data processing must be specific, informed, and
            conscious. Consent to personal data processing may be given by the subject of personal data or their representative in any form that
            allows confirming the fact of its receipt, unless otherwise provided by federal law. If consent to personal data processing is obtained
            from the representative of the subject of personal data, the authority of this representative must be confirmed.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>2. RIGHTS OF PERSONAL DATA SUBJECTS</h2>

          <p className={`${styles.paragraph} ${styles["list-title"]}`}>
            <span className={styles.number}>2.1. </span>A personal data subject has the right to receive the following information (hereinafter
            referred to as the information):
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>confirmation of the fact of personal data processing by the operator;</li>
            <li className={styles["list-item"]}>the legal grounds and purposes of personal data processing;</li>
            <li className={styles["list-item"]}>the purposes and methods of personal data processing applied by the operator;</li>
            <li className={styles["list-item"]}>
              the name and location of the operator, information about persons (excluding the operator’s employees) who have access to personal data
              or to whom personal data may be disclosed based on a contract with the operator or based on federal law;
            </li>
            <li className={styles["list-item"]}>
              the personal data being processed related to the relevant personal data subject, the source of their receipt, if a different procedure
              for providing such data is not stipulated by federal law;
            </li>
            <li className={styles["list-item"]}>the processing period of personal data, including the period of their storage;</li>
            <li className={styles["list-item"]}>the procedure for exercising the personal data subject's rights;</li>
            <li className={styles["list-item"]}>information about the carried out or proposed cross-border data transfer;</li>
            <li className={styles["list-item"]}>
              the name or surname, first name, patronymic, and address of the person processing personal data on behalf of the operator if the
              processing is entrusted or will be entrusted to such a person;
            </li>
            <li className={styles["list-item"]}>other information as provided by applicable legislation.</li>
          </ul>

          <p className={styles.paragraph}>
            <span className={styles.number}>2.2. </span>
            The personal data subject has the right to demand from the operator the clarification of their personal data, its blocking, or destruction
            if the personal data is incomplete, outdated, inaccurate, unlawfully obtained, or not necessary for the declared purpose of processing, as
            well as to take measures provided by law to protect their rights.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.3. </span>
            The information must be provided to the personal data subject by the operator in an accessible form and should not contain personal data
            related to other personal data subjects, except in cases where there are legal grounds for disclosing such personal data.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.4. </span>
            The information is provided to the personal data subject or their representative by the operator upon request or upon receiving a request
            from the personal data subject or their representative. The request must contain the number of the main identity document of the personal
            data subject or their representative, details of the issuance date of the specified document and the issuing authority, information
            confirming the participation of the personal data subject in relations with the operator (contract number, date of contract conclusion,
            conditional verbal designation, and/or other information) or information otherwise confirming the fact of personal data processing by the
            operator, the signature of the personal data subject or their representative. The request can be sent in the form of an electronic
            document and signed with an electronic signature in accordance with the legislation of the Russian Federation.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.5. </span>
            If the information and processed personal data were provided for review to the personal data subject upon their request, the personal data
            subject has the right to re-apply to the operator or send a repeated request to the operator for obtaining information and reviewing such
            personal data no earlier than thirty days after the initial request or sending the initial request unless a shorter period is established
            by federal law or a normative legal act adopted in accordance with it.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.6. </span>
            The personal data subject has the right to re-apply to the operator or send a repeated request to the operator for obtaining information
            and reviewing the processed personal data before the expiration of thirty days if such information and/or processed personal data were not
            provided to them in full for review based on the results of the initial request. The repeated request should contain the justification for
            sending the repeated request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.7. </span>
            The processing of personal data for the purpose of promoting goods, works, services in the market through direct contacts with a potential
            consumer using means of communication, as well as for political campaigning, is allowed only with the prior consent of the personal data
            subject. The specified personal data processing is considered to be carried out without the prior consent of the personal data subject if
            the operator does not prove that such consent was obtained.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.8. </span>
            It is prohibited to make decisions based solely on the automated processing of personal data that produce legal consequences concerning
            the personal data subject or otherwise affect their rights and legitimate interests.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.9. </span>A decision that has legal consequences for the personal data subject or otherwise affects
            their rights and legal interests may be made solely based on automated processing of their personal data only with written consent from
            the personal data subject or in cases provided by federal laws, which also establish measures to ensure the protection of the rights and
            legal interests of the personal data subject.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.10. </span>
            The operator is obliged to explain to the personal data subject the procedure for making a decision based solely on automated processing
            of their personal data and the possible legal consequences of such a decision, to provide the opportunity to object to such a decision,
            and to explain the procedure for protecting the personal data subject's rights and legal interests.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.11. </span>
            If the personal data subject believes that the operator is processing their personal data in violation of the requirements of this Federal
            Law or otherwise violating their rights and freedoms, the personal data subject has the right to appeal the actions or omissions of the
            operator to the authorized body for the protection of personal data subjects' rights or in court.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.12. </span>
            The personal data subject has the right to protect their rights and legal interests, including the right to claim compensation for damages
            and/or moral harm through judicial proceedings.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>3. OPERATOR'S OBLIGATIONS</h2>

          <p className={styles.paragraph}>
            <span className={styles.number}>3.1. </span>
            When collecting personal data, the operator is obligated to provide the personal data subject with the information specified in clause 2.1
            of this Policy upon their request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.2. </span>
            If providing personal data is mandatory in accordance with federal law, the operator must explain to the personal data subject the legal
            consequences of refusing to provide their personal data.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.3. </span>
            If personal data is obtained from a source other than the personal data subject, the operator must provide the personal data subject with
            the following information before starting to process such personal data:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>
              1% The name or surname, first name, patronymic, and address of the operator or their representative;
            </li>
            <li className={styles["list-item"]}>1% The purpose of processing the personal data and its legal basis;</li>
            <li className={styles["list-item"]}>1% The intended users of the personal data;</li>
            <li className={styles["list-item"]}>1% The rights of the personal data subject;</li>
            <li className={styles["list-item"]}>1% The source of the personal data.</li>
          </ul>
          <p className={styles.paragraph}>
            The operator is exempt from the obligation to provide the specified information to the personal data subject in the following cases:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>
              1% The personal data subject has been informed about the processing of their personal data by the respective operator;
            </li>
            <li className={styles["list-item"]}>
              1% The personal data is obtained by the operator based on federal law or in connection with the performance of a contract where the
              personal data subject is a party, beneficiary, or guarantor;
            </li>
            <li className={styles["list-item"]}>
              1% The personal data has been made publicly available by the personal data subject or obtained from a publicly available source;
            </li>
            <li className={styles["list-item"]}>
              1% The operator processes personal data for statistical or other research purposes, for the professional activity of a journalist, or
              for scientific, literary, or other creative activities, provided that the rights and legal interests of the personal data subject are
              not violated;
            </li>
            <li className={styles["list-item"]}>
              1% Providing the personal data subject with the specified information would violate the rights and legal interests of third parties.
            </li>
          </ul>

          <p className={styles.paragraph}>
            <span className={styles.number}>3.4. </span>
            When collecting personal data, including via the information and telecommunications network "Internet," the operator must ensure the
            recording, systematization, accumulation, storage, clarification (updating, modification), and extraction of personal data of citizens of
            the Russian Federation using databases located on the territory of the Russian Federation.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.5. </span>
            The operator must take measures necessary and sufficient to ensure the fulfillment of obligations provided by the Federal Law of July 27,
            2006 No. 152-FZ "On Personal Data" and this Policy.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.6. </span>
            In the event of unlawful processing of personal data upon the request of the personal data subject or their representative, or upon the
            request of the personal data subject or their representative or the authorized body for the protection of personal data subjects' rights,
            the operator must block the unlawfully processed personal data related to this personal data subject, or ensure its blocking (if personal
            data processing is carried out by another person acting on behalf of the operator) from the moment of such request or receipt of the
            specified request during the verification period. In the case of inaccurate personal data upon the request of the personal data subject or
            their representative, or upon their request or the request of the authorized body for the protection of personal data subjects' rights,
            the operator must block the personal data related to this personal data subject, or ensure its blocking (if personal data processing is
            carried out by another person acting on behalf of the operator) from the moment of such request or receipt of the specified request during
            the verification period, if blocking of personal data does not violate the rights and legal interests of the personal data subject or
            third parties.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.7. </span>
            In the event of confirmation of the inaccuracy of personal data, the operator, based on information provided by the personal data subject
            or their representative or the authorized body for the protection of personal data subjects' rights, or other necessary documents, is
            required to correct the personal data or ensure its correction (if personal data processing is carried out by another person acting on
            behalf of the operator) within seven working days from the day of submission of such information and remove the blocking of personal data.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.8. </span>
            In the event of unlawful processing of personal data carried out by the operator or a person acting on behalf of the operator, the
            operator must cease the unlawful processing of personal data or ensure the cessation of unlawful processing by the person acting on behalf
            of the operator within a period not exceeding three working days from the date of detection. If ensuring lawful processing of personal
            data is not possible, the operator must destroy such personal data or ensure its destruction within a period not exceeding ten working
            days from the date of detection of unlawful processing. The operator must notify the personal data subject or their representative about
            the elimination of violations or destruction of personal data, and if the request of the personal data subject or their representative or
            the request of the authorized body for the protection of personal data subjects' rights was sent by the authorized body, also the
            specified body.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.9. </span>
            In the event of the personal data subject withdrawing consent for the processing of their personal data, the operator must cease
            processing or ensure the cessation of such processing (if personal data processing is carried out by another person acting on behalf of
            the operator) and, if the retention of personal data is no longer required for processing purposes, destroy the personal data or ensure
            its destruction (if personal data processing is carried out by another person acting on behalf of the operator) within a period not
            exceeding thirty days from the date of receipt of the said withdrawal.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.10. </span>
            If it is not possible to destroy personal data within the period specified in clause 3.9 of this Policy, the operator must block such
            personal data or ensure its blocking (if personal data processing is carried out by another person acting on behalf of the operator) and
            ensure the destruction of personal data within a period not exceeding six months, unless a different period is established by federal
            laws.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>4. SECURITY OF PERSONAL DATA</h2>

          <p className={styles.paragraph}>
            <span className={styles.number}>4.1. </span>
            When processing personal data, the operator must take necessary legal, organizational, and technical measures or ensure their
            implementation to protect personal data from unauthorized or accidental access, destruction, alteration, blocking, copying, provision,
            dissemination, and other illegal actions concerning personal data.
          </p>

          <p className={`${styles.paragraph} ${styles["list-title"]}`}>
            <span className={styles.number}>4.2. </span>Security of personal data is achieved by:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>
              1% Identifying threats to the security of personal data during their processing in personal data information systems;
            </li>
            <li className={styles["list-item"]}>
              1% Implementing organizational and technical measures to ensure the security of personal data during their processing in personal data
              information systems, necessary to meet requirements for personal data protection that ensure the levels of protection established by the
              Government of the Russian Federation;
            </li>
            <li className={styles["list-item"]}>
              1% Using information protection tools that have passed the required compliance assessment procedures;
            </li>
            <li className={styles["list-item"]}>
              1% Assessing the effectiveness of measures taken to ensure the security of personal data before the commissioning of the personal data
              information system;
            </li>
            <li className={styles["list-item"]}>1% Accounting for machine carriers of personal data;</li>
            <li className={styles["list-item"]}>1% Detecting unauthorized access to personal data and taking measures;</li>
            <li className={styles["list-item"]}>1% Restoring personal data modified or destroyed due to unauthorized access;</li>
            <li className={styles["list-item"]}>
              1% Establishing rules for access to personal data processed in the personal data information system and ensuring the registration and
              accounting of all actions performed with personal data in the personal data information system;
            </li>
            <li className={styles["list-item"]}>
              1% Monitoring the measures taken to ensure the security of personal data and the level of protection of personal data information
              systems.
            </li>
          </ul>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>5. SECURITY OF PERSONAL DATA</h2>

          <p className={styles.paragraph}>
            <span className={styles.number}>5.1. </span>
            Compliance with this Policy is monitored by the relevant officials of the operator
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.2. </span>
            Persons responsible for violations of the requirements of this Policy are liable in accordance with the legislation of the Russian
            Federation.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.3. </span>
            The operator has the right to amend this Policy as necessary or due to changes in the applicable legislation. All changes are subject to
            immediate publication on the website.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.4. </span>
            The website may contain links to other Internet resources not controlled by the operator. Transition to these Internet resources is made
            solely at the discretion of the personal data subject. The operator is not responsible for the confidentiality or security of these
            Internet resources.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.5. </span>
            Receiving services on the website is carried out after the personal data subject has familiarized themselves with this Policy. By
            continuing to use the website and its services, the personal data subject confirms acceptance of this Policy in full.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.6. </span>
            Questions regarding this Policy can be asked through the contact channels specified on the website.
          </p>
        </div>
      </div>

      <Runline text="CONSENT TO THE PROCESSING /OF PERSONAL DATA/"></Runline>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          I hereby give my consent to the Joint Stock Company <b>"First-Class Solutions"</b> (hereinafter referred to as "First-Class Solutions") for
          the processing of my personal data, both with and without the use of automation tools, for the purposes of providing services, including the
          transfer (including cross-border) of personal information for these purposes to the service or product providers offered by First-Class
          Solutions, as well as receiving such information from these parties for the same purposes, and for purposes prescribed by law, including for
          the realization of the rights and legitimate interests of First-Class Solutions.
        </p>

        <p className={styles.paragraph}>
          First-Class Solutions transfers only those personal data necessary for the specified purpose. The processing of the Customer's personal data
          by the Executor is carried out in accordance with the Policy on the Processing of Personal Data available on the Internet at <span> </span>
          <a target="_blank" href="https://ilovefirstclass.com/company/privacy-policy/">
            https://ilovefirstclass.com/company/privacy-policy/.
          </a>
        </p>

        <p className={styles.paragraph}>Purpose of Processing – to implement rights and fulfill obligations under the Agreement.</p>

        <p className={`${styles.paragraph} ${styles["list-title"]}`}>
          <b>List of Personal Data:</b>
        </p>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>1% Full name</li>
          <li className={styles["list-item"]}>1% Date of birth</li>
          <li className={styles["list-item"]}>1% Citizenship</li>
          <li className={styles["list-item"]}>1% Gender</li>
          <li className={styles["list-item"]}>1% Mobile phone number</li>
          <li className={styles["list-item"]}>1% Email address</li>
          <li className={styles["list-item"]}>1% Passport series and number, foreign passport number and validity period</li>
          <li className={styles["list-item"]}>1% RZD / airline bonus card details</li>
        </ul>

        <p className={`${styles.paragraph} ${styles["list-title"]}`}>
          <b>List of Actions with Personal Data for which Consent is Given:</b>
        </p>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            1% Processing of personal data, including collection, recording, systematization, accumulation, storage, including the storage of scans
            (photos) of passport pages and other provided documents, as well as photos of the owner, clarification (updating, modification),
            extraction, use, transfer (provision, access), anonymization, blocking, deletion, destruction of personal data;
          </li>
          <li className={styles["list-item"]}>
            1% Receiving personal data from third parties and transferring personal data to third parties, including cross-border transfer, for the
            specified purposes, as well as for analytical purposes, working with non-personalized statistical data, and offering new services.
          </li>
        </ul>

        <p className={styles.paragraph}>
          Consent to the processing of personal data may be withdrawn by sending a written request to First-Class Solutions.
        </p>

        <p className={styles.paragraph}>
          This consent to the processing of personal data is valid for the period necessary to achieve the processing purposes, and for a period of 5
          (five) years after their achievement.
        </p>
      </div>
    </>
  );
}
