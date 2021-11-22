import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Cv.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('cv.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10">
                    <div className="cv-div-img col-xl-12"></div>
                    <div className="cv-text">{t('cv.text')}</div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);