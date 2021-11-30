import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobslist";
import LocaleEnMessages from './locales/en.json';
import LocaleEsMessages from './locales/es.json';

var localeLang = navigator.language

var localeMessages = (localeLang === 'es-ES') ? LocaleEsMessages : LocaleEnMessages 

ReactDOM.render(
    <IntlProvider locale={localeLang} messages={localeMessages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
