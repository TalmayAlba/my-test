import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('teaching.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8">
                    <div>{t('teaching.text')}</div>
                    <div>{t('teaching.text1')}</div>
                    <div>{t('teaching.text2')}</div>
                    <div>{t('teaching.text3')}</div>
                    <div>{t('teaching.text4')}</div>
                </div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);