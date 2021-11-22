import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Aboutme.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('aboutme.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 a-div-sty">
                    <div className="col-xl-4 a-div-img"></div>
                    <div className="col-xl-8 a-text">
                        <div className="a-text-big">{t('aboutme.text')}</div>
                        <div>
                            {t('aboutme.text1')} 
                            <a href="https://q-dem.com/">https://q-dem.com/</a>
                            {t('aboutme.text2')}
                        </div>
                        <div>
                            {t('aboutme.text3')}
                            <a href="/research">research</a>.
                        </div>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);