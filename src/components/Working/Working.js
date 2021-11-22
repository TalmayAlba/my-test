import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Working.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('working.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-w">
                    <div className="col-xl-5 t-div-img-w"></div>
                    <div className="col-xl-7 t-text-w">
                        <ul>
                            <li>{t('working.text')}</li>
                            <li>{t('working.text1')}</li>
                            <li>{t('working.text2')}</li>
                            <li>{t('working.text3')}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);