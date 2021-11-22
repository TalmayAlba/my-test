import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Journal.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('journal.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-j">
                    <div className="col-xl-5 t-div-img-j"></div>
                    <div className="col-xl-7 t-text-j">
                        <ul>
                            <li>{t('journal.text')}</li>
                            <li>{t('journal.text1')}</li>
                            <li>{t('journal.text2')}</li>
                            <li>{t('journal.text3')}</li>
                            <li>{t('journal.text4')}</li>
                            <li>{t('journal.text5')}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);