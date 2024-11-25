import React, { useState, useEffect } from "react";
import styles from "../privacyPolicy/privacyPolicy.module.css";
import Runline from "../../components/runline/Runline";
import Header from "../../components/header/Header";

export default function PublicOffer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
      <Header full={false} transparent={true} width={width}></Header>
      <Runline text="public /offer/"></Runline>

      <div className={styles.container}>
        <div className={styles.chapter}>
          <p className={styles.header}>
            <span>Moscow</span>
            <span>February 13, 2024</span>
          </p>
          <p className={styles.paragraph}>
            The text of the Offer below is posted on the website:{" "}
            <a href="" target="_blank">
              {" "}
              <b>https://ilovefirstclass.com</b>{" "}
            </a>{" "}
            and is addressed to any individual as a public offer from AO "First-Class Solutions" (hereinafter referred to as the Contractor) to
            conclude an agreement in accordance with Articles 435 and 437 of the Civil Code of the Russian Federation.
          </p>
          <p className={styles.paragraph}>
            Submitting an application to the Contractor for services, as well as making any payment for the Contractor's services, constitutes
            confirmation of the individual's agreement to enter into a contract (hereinafter referred to as Acceptance) on the terms, in the manner,
            and to the extent specified in this Offer (hereinafter referred to as the Agreement).
          </p>
          <p className={styles.paragraph}>
            The terms of this Offer may be modified by the Contractor at any time; the new version of the Offer comes into effect upon its posting on
            the Internet. Once a new version of the Offer is published on the website, the previous version of the Offer ceases to be valid. Continued
            use of the Contractor's services after changes and/or additions to the Offer indicates the Customer's acceptance and agreement to such
            changes and/or additions. If the Customer disagrees with any of the provisions of the Offer, the Customer may refuse to enter into the
            Agreement in the manner specified in Section 6 of the Offer.
          </p>

          <h2 className={styles.title}>1. SUBJECT OF THE AGREEMENT</h2>

          <p className={`${styles.paragraph} ${styles["list-title"]}`}>
            <span className={styles.number}>1.1. </span>
            The Contractor agrees to provide comprehensive services for organizing personal trips based on the Customer's requests, and the Customer
            agrees to accept and pay for these services according to the terms and deadlines specified in this Agreement. The trip organization
            services include:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Booking and issuing airline and train tickets;</li>
            <li className={styles["list-item"]}>Booking hotels, apartments, apartments, hostels, etc.;</li>
            <li className={styles["list-item"]}>Booking transportation and sightseeing services;</li>
            <li className={styles["list-item"]}>And other services specified in the Customer's requests.</li>
          </ul>

          <p className={styles.paragraph}>
            <span className={styles.number}>1.2. </span>
            The parties recognize any request for service sent to the Contractor by any available means from the Customer with the Contractor's
            confirmation of acceptance of the request as a Customer's request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.3. </span>
            The parties agree that the Contractor acts as an intermediary in providing services under this agreement. The owners of services and/or
            products under this agreement are airlines, railways, hotels, and other accommodation providers, transportation companies, guides, tour
            guides, translators, and other individuals, companies, and organizations that directly create the product or provide the service the
            Customer intends to use.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.4. </span>
            The parties agree that to fulfill the Customer's requests, the Contractor may involve third parties and other companies at its discretion.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>1.5. </span>
            The parties agree that information exchange may occur in verbal and written forms, through electronic and paper media, using computer
            technology, internet channels, public and specialized websites, professional booking systems, as well as through the provision of audio
            and video information.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2>2. OBLIGATIONS AND RESPONSIBILITIES OF THE PARTIES</h2>

          <p className={styles.paragraph}>
            <span className={styles.number}>2.1. </span>
            Obligations and Responsibilities of the Contractor:
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.1. </span>
            The Contractor is obliged to accept the Customer's request and provide a response within no more than 24 hours after receiving the
            request. The Contractor only accepts requests for the issuance of transportation documents from the Customer in writing. Discussions
            regarding order parameters may occur both in writing and orally. Any decisions and amendments within the request must be reflected in
            writing.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.2. </span>
            The Contractor undertakes to provide complete and exhaustive information about the services and products requested in the Customer's
            application, their cost, and tariff rules, indicating possible deadlines and penalties related to the exchange and/or refusal of the
            service or its part.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.3. </span>
            The Contractor undertakes to inform the Customer about the occurrence of circumstances that prevent the fulfillment of individual
            requested services. With the Customer's consent, the Contractor may offer services analogous to those requested whenever possible.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.4. </span>
            The Contractor undertakes to maintain the agreed-upon conditions regarding the form and timing of information provision, the order of
            booking services based on Customer's requests, the composition of accounting documents, methods of correspondence delivery, and other
            arrangements.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.5. </span>
            The Contractor undertakes to independently interact with the owners of services and/or tourist products, as well as with third parties
            (companies, contractors, etc.) involved by him to fulfill his obligations under this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.6. </span>
            The Contractor undertakes to comply with the legislation of the Russian Federation, within the territory where he conducts his economic
            and commercial activities.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.7. </span>
            The Contractor undertakes to consider a claim and send a response to the Customer within fourteen (14) calendar days from the date of
            receipt.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.8. </span>
            The Contractor is not responsible to the Customer for the impossibility/delays in providing services that arose due to the failure and/or
            untimely provision of necessary documents or other information by the Customer, as well as the provision of documents not meeting legal
            requirements or unreliable documents/information.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.9. </span>
            The Contractor is not responsible to the Customer for possible violations and actions that do not fall within his competence, namely:
            actions of carriers (changes, cancellations, rescheduling, delays of flights, trains, buses, etc.), actions of tourist product owners
            (cancellation, changes in the quality/composition of the service and/or tourist product), loss or damage of luggage and personal
            belongings. However,
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.10. </span>
            The Contractor undertakes to provide the Customer with maximum assistance and prompt help in resolving disputes and urgent situations
            arising before, during, or after the consumption of the product or service, and also acts as a third party in disputes between the
            Customer and the service owner.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.11. </span>
            The Contractor is not responsible for the safety of personal luggage, valuables, and documents of the Customer's representatives
            throughout their trip.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.12. </span>
            The Contractor is not responsible if the Customer's representative is denied entry or exit from a country, or the ability to
            fly/travel/stay due to the absence of necessary documents, violation of public order, and other reasons beyond the Contractor's control.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.13. </span>
            The Contractor has the right to change the execution period and the composition of the request, having preliminarily agreed on new
            deadlines and conditions with the Customer.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.14. </span>
            2.1.14. The Contractor undertakes to timely form accounting documents for the Customer to receive payment for booked services.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.15. </span>
            The Contractor has the right to cancel the booking of requested services in case of violation by the Customer of the payment terms agreed
            upon in this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.1.16. </span>
            The Contractor has the right, at his discretion, to provide the services specified in this Agreement personally, involve third parties for
            their provision, or act as the Customer's agent under this Agreement, performing legal and other actions in his own name but at the
            Customer's expense, necessary for third parties to provide the services specified in this Agreement. If the Contractor decides to act as
            an agent for some or all of the services specified in this Agreement, the choice of the direct service provider, as well as the
            determination of the terms of the contract concluded with him and the amount of remuneration, is determined by the Contractor. The amount
            of the Contractor's remuneration acting as an agent, as well as the cost of third-party services, is indicated in the invoice issued to
            the Customer, the payment of which confirms the Customer's acceptance of the terms contained therein.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.2. </span>
            Obligations and Responsibilities of the Customer
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.2.1. </span>
            The Customer undertakes to provide the Contractor with all necessary data requested by the Contractor to fulfill the Customer's request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.2.2. </span>
            The Customer undertakes to promptly inform the Contractor in case of cancellation or change of the request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.3. </span>
            Confirmation of the request by the Customer implies his acceptance of all conditions for the provision of services under the request.
            Confirmation of the request is the acceptance by the Customer of the conditions offered by the Contractor, expressed in any form (in the
            form of an email / written response or silence, provided that the services received are used).
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.4. </span>
            If there are circumstances where the services do not meet the requirements and expectations of the Customer's representative receiving the
            services, he must promptly inform the Contractor about such a mismatch to take appropriate measures to rectify the situation. If it is
            impossible to change the situation at the time of its occurrence, further claims by the Customer regarding the quality of the provided
            services are accepted by the Contractor within 14 (fourteen) calendar days from the end of the service provision only in writing to the
            Contractor's email address hello@ilovefirstclass.com. Claims sent by the Customer after the specified period are not considered by the
            Contractor.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.5. </span>
            The Customer is responsible for the completeness and accuracy of the information provided to the Contractor, necessary for booking and
            providing the services requested in the application.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.6. </span>
            In case of deportation of the Customer, who violated the law or visa regime, the Customer is responsible for the actions committed and the
            consequences of such actions, including to the Contractor.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.7. </span>
            The Customer undertakes to timely and fully pay the invoices issued by the Contractor in accordance with the terms specified in section 3
            of this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.8. </span>
            Any information received by the Parties in the course of fulfilling the terms of this Agreement, or related to it, is confidential and
            cannot be disclosed without the written consent of the other Party, except in cases provided by the current legislation of the Russian
            Federation and the receipt of written consent from the Customer.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>2.9. </span>
            For non-performance or improper performance of obligations under this Agreement, the Parties are responsible in accordance with the
            current legislation of the Russian Federation.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>3. COST OF SERVICES AND PAYMENT PROCEDURE</h2>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.1. </span>
            Payment of the Contractor's invoices shall be made by the Customer via cashless payment, by transferring funds from the Customer's bank
            account to the Contractor's bank account.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.2. </span>
            The date of payment of the Contractor's invoice is considered the date of receipt of funds into the Contractor's bank account.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.3. </span>
            The Customer shall pay the Contractor's invoices with advance payments no later than 3 (Three) business days before the start date of the
            services provided by the Owners of the services/products, but in any case, within 3 (Three) business days from the date the Contractor
            issues the invoice.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.4. </span>
            The bank fees for transferring funds by the Customer are borne by the Customer.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.5. </span>
            In the case of booking airline and railway tickets at a group fare, the Customer makes a 100% prepayment for the group. The Parties agree
            that some Customer requests may require special payment terms, including full prepayment before the start date of the services. In such a
            case, the Contractor and the Customer will agree on payment terms different from clause 3.3., which will be followed until the Contractor
            fully completes the request.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.6. </span>
            The cost of the Contractor's services includes the tariffs and fees of the service/product owners, tax amounts, and the Contractor's
            remuneration (fees). The Contractor's fees are indicated in the response to the Customer's request via a notification sent to the
            Customer's email address.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.7. </span>
            Refunds to the Customer for unused services and products are made by the Contractor in accordance with the tariffs and refund policies
            established by the service and product owners, in cashless form to the Customer's bank account.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.8. </span>
            In the event of the Customer's refusal of booked and issued services or products as specified in the request, the Contractor's fees are
            non-refundable.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.9. </span>
            Upon the provision of the service, the Contractor shall prepare an act of rendered services and/or a Universal Transfer Document
            (hereinafter referred to as UTD), an invoice, and deliver these documents to the Customer. The Customer shall sign and send the act of
            rendered services to the Contractor within 7 (seven) business days from the receipt of the act or send a reasoned refusal to sign within
            the same period. If the act or a reasoned refusal to sign is not provided or is provided late, the act is considered signed by the
            Customer, the services are deemed properly rendered, and payment is due in the order and terms specified in section 3 of this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.10. </span>
            The cost of the Contractor's services is not subject to VAT, if applicable, in accordance with the current tax legislation of the Russian
            Federation.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>3.11. </span>
            In case of a delay in payment of the invoice issued by the Contractor, the Contractor has the right to decide to charge the Customer a
            penalty of 0.1 (zero point one tenth) percent of the unpaid amount for each day of delay beyond the term established by this Agreement.
            However, the total amount of the penalty may not exceed 10 (ten) percent of the overdue payment amount.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>4. FORCE MAJEURE</h2>
          <p className={styles.paragraph}>
            <span className={styles.number}>4.1. </span>
            The Parties shall be released from liability for non-performance or improper performance of their obligations under this Agreement if such
            non-performance is a result of force majeure circumstances arising after the conclusion of this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>4.2. </span>
            Force majeure circumstances include: fire, natural disasters, military operations of any kind, epidemics, acts of legislative and
            executive authorities, changes in immigration policy, and other similar circumstances that prevent the Parties from fulfilling their
            obligations under this Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>4.3. </span>
            The term for fulfilling obligations shall be extended in proportion to the time during which such circumstances are in effect. In this
            case, the Customer has the right to unilaterally terminate the services of the Contractor. If these circumstances last more than 14 days,
            each Party shall have the right to refuse to fulfill obligations under this Agreement, and in this case, neither Party shall be entitled
            to claim compensation for possible losses from the other Party.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>4.4. </span>
            The Party for which it has become impossible to fulfill obligations under this Agreement must notify the other Party of the occurrence of
            such circumstances within 48 hours. Late notification deprives the Party of the possibility to refer to the occurrence of force majeure
            circumstances in the future.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>4.5. </span>
            Proper proof of the existence and duration of the above circumstances shall be certificates issued by competent authorities.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>5. PERSONAL DATA</h2>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.1. </span>
            By accepting this Offer, the Customer consents to the Contractor's processing of personal data for the purpose of providing services,
            including the transfer (including cross-border) of personal information for the specified purposes to the owners of the services or
            products mentioned in clause 1.3. of the Agreement, as well as the receipt of such information from these entities for the same purposes,
            and for purposes provided by law, including the exercise of the rights and legitimate interests of the Contractor. The Contractor
            transfers only those personal data of the Customer that are necessary for the specified purpose. The processing of the Customer's personal
            data by the Contractor is carried out under the terms of the Personal Data Processing Policy posted on the Internet at
            <a href="https://ilovefirstclass.com/company/privacy-policy/." target="_blank">
              {" "}
              https://ilovefirstclass.com/company/privacy-policy/.{" "}
            </a>
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.2. </span>
            The purpose of processing is the realization of rights and fulfillment of obligations under the Agreement.
          </p>
          <p className={`${styles.paragraph} ${styles["list-title"]}`}>
            <span className={styles.number}>5.3. </span>
            The list of personal data:
          </p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Surname, first name, middle name;</li>
            <li className={styles["list-item"]}>Date of birth;</li>
            <li className={styles["list-item"]}>Nationality;</li>
            <li className={styles["list-item"]}>Gender;</li>
            <li className={styles["list-item"]}>Mobile phone number;</li>
            <li className={styles["list-item"]}>Email address;</li>
            <li className={styles["list-item"]}>Passport series and number, passport validity period;</li>
            <li className={styles["list-item"]}>Bonus card details of Russian Railways/airlines.</li>
          </ul>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.4. </span>
            The Contractor undertakes to maintain the confidentiality of personal data and to comply with the requirements provided for in part 5 of
            article 18 and article 18.1 of the Federal Law "On Personal Data." At the Customer's request, during the term of the assignment, including
            before processing personal data, the Contractor shall provide documents and other information confirming the implementation of measures
            and compliance with the requirements stated in this clause for the purpose of fulfilling the assignment.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.5. </span>
            The Contractor has the right to perform the following actions (operations) with the Customer's personal data, performed both using
            automation tools (automated processing) and without using such tools (non-automated processing): collection, recording, systematization,
            accumulation, storage, clarification (updating, changing), extraction, use, transfer (provision, access), depersonalization, blocking,
            deletion, destruction, and other actions necessary for fulfilling obligations under the Agreement.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.6. </span>
            The Contractor undertakes to take necessary legal, organizational, and technical measures (or ensure their implementation) to protect
            personal data from unauthorized or accidental access, destruction, alteration, blocking, copying, provision, dissemination, and other
            unlawful actions concerning the personal data provided by the Customer, in accordance with article 19 of the Federal Law "On Personal
            Data."
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.7. </span>
            The Parties acknowledge that, to improve the quality of services and promptly resolve arising issues, the Contractor records
            correspondence when contacting the support service.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>5.8. </span>
            If the legal grounds for processing personal data cease or if the individual revokes their consent to the processing of their personal
            data, the Contractor undertakes to promptly delete these personal data.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>6. TERMINATION OF THE AGREEMENT</h2>
          <p className={styles.paragraph}>
            <span className={styles.number}>6.1. </span>
            All disputes and disagreements arising from this Agreement or in connection with it shall be resolved by the Parties through negotiations.
            If no agreement is reached, the dispute shall be referred to the competent court at the location of the plaintiff.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>6.2. </span>
            The validity of this Agreement may be terminated by mutual agreement of the Contractor and the Customer, which is confirmed by a protocol
            of termination of the agreement signed by the authorized representatives of the parties.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>6.3. </span>
            Either Party has the right to unilaterally refuse to fulfill the Agreement, provided that full settlements for already fulfilled
            obligations have been made. The Party initiating the termination of this Agreement undertakes to notify the other Party in writing 30 days
            before the proposed termination date.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.number}>6.4. </span>
            All settlements under the Agreement must be completed before the termination of the Agreement.
          </p>
        </div>

        <div className={styles.chapter}>
          <h2 className={styles.title}>7. GCONTRACTOR DETAILS</h2>
          <p className={styles.paragraph}>
            Name: Joint Stock Company "First-Class Solutions";
            <br />
            OGRN 1247700148959;
            <br />
            INN 9707025574, KPP 770701001;
            <br />
            OKVED 79.90.1;
            <br />
            Legal and actual addresses: 127055, Moscow, 1st Tikhvinsky Lane, 5-7, premises 1p;
            <br />
            General Director: Anton Viktorovich Selyanin;
            <br />
            Phone: +7 903 384-48-42;
            <br />
            Email: hello@ilovefirstclass.com
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
