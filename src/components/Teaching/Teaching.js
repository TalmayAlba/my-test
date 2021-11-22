import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Teaching.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('teaching.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-t">
                    <div className="col-xl-5 t-div-img-t"></div>
                    <div className="col-xl-7 t-text-t">
                        <ul>
                            <li>{t('teaching.text')}</li>
                            <li>{t('teaching.text1')}</li>
                            <li>{t('teaching.text2')}</li>
                            <li>{t('teaching.text3')}</li>
                            <li>{t('teaching.text4')}</li>
                            <li>{t('teaching.text5')}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);