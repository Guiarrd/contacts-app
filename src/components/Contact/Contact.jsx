import React from 'react';

import './Contact.scss';

const Contact = ({ data, sortBy }) => {
  const propertyIndex = Object.keys(data).indexOf(sortBy);
  const formatDate = (date, locale) => new Date(date).toLocaleDateString(locale);

  return (
    <article className="contact card-contact" data-testid="contact" key={data.id}>
      <a href="##" className="card-contact__avatar"><img className="card-contact__img" src={data.avatar} alt="avatar" /></a>
      <span className={`card-contact__info ${propertyIndex === 1 && "sorted-by"}`} data-testid="contact-name">{data.name}</span>
      <span className={`card-contact__info ${propertyIndex === 6 && "sorted-by"}`} data-testid="contact-phone">{data.phone}</span>
      <span className={`card-contact__info ${propertyIndex === 7 && "sorted-by"}`} data-testid="contact-country">{data.country}</span>
      <span className={`card-contact__info ${propertyIndex === 5 && "sorted-by"}`} data-testid="contact-date">{formatDate(data.admissionDate, 'pt-BR')}</span>
      <span className={`card-contact__info ${propertyIndex === 3 && "sorted-by"}`} data-testid="contact-company">{data.company}</span>
      <span className={`card-contact__info ${propertyIndex === 4 && "sorted-by"}`} data-testid="contact-department">{data.department}</span>
    </article>
  );
}

export default Contact;