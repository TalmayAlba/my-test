import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('working.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8">
                    <div>{t('working.text')}</div>
                    <div>{t('working.text1')}</div>
                    <div>{t('working.text2')}</div>
                    <div>{t('working.text3')}</div>
                </div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);