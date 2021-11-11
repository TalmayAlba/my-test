import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('aboutme.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8">
                    <div>{t('aboutme.text')}</div>
                    <div>{t('aboutme.text1')}</div>
                    <div>{t('aboutme.text2')}</div>
                    <div>{t('aboutme.text3')}</div>
                    <div>{t('aboutme.text4')}</div>
                </div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);