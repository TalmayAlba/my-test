import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Gender.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('gender.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-g">
                    <div className="col-xl-5 t-div-img-g"></div>
                    <div className="col-xl-7 t-text-g">
                        {t('gender.text')}
                        <a href="https://www.quesesepa.org/">https://www.quesesepa.org/</a>
                        {t('gender.text1')}
                        <a href="https://irla.cat/premis-i-beques/leire-rincon/">https://irla.cat/premis-i-beques/leire-rincon/</a>
                        {t('gender.text2')}
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);