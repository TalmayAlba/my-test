import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('media.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-8">
                    <div>{t('media.text')} <a href="https://www.sapea.info/interview-leire-rincon-on-evidence-ideas-and-the-race-for-political-attention/">https://www.sapea.info/interview-leire-rincon-on-evidence-ideas-and-the-race-for-political-attention/</a></div>
                    <div>{t('media.text1')} <a href="https://evidenceandpolicyblog.co.uk/2021/05/12/does-scientific-evidence-capture-the-attention-of-policymakers/">https://evidenceandpolicyblog.co.uk/2021/05/12/does-scientific-evidence-capture-the-attention-of-policymakers/ </a></div>
                </div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);