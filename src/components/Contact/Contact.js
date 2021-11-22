import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Contact.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('contact.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8 t-text-con">
                    <div>
                        {t('contact.text')}
                        <a href="mailto:leire.rincon.garcia@hu-berlin.de">leire.rincon.garcia@hu-berlin.de</a>
                        {t('contact.text1')}
                        <a href="lrincon@ibei.org.">lrincon@ibei.org.</a>.
                    </div>
                    <div>{t('contact.text2')}</div>
                    <div>{t('contact.text3')}</div>
                    <div>{t('contact.text4')}</div>
                    <div>{t('contact.text5')}</div>
                    <div>{t('contact.text6')}</div>
                </div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);