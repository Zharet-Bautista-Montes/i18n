import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 43052,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 1250,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 134,
    },
  ]);

  const tcolor = useIntl().formatMessage({id:'tableColor'})

  return (
    <div>
      <table className={tcolor}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="position"/></th>
            <th scope="col"><FormattedMessage id="company"/></th>
            <th scope="col"><FormattedMessage id="salary"/></th>
            <th scope="col"><FormattedMessage id="city"/></th>
            <th scope="col"><FormattedMessage id="publicationDate"/></th>
            <th scope="col"><FormattedMessage id="views"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
