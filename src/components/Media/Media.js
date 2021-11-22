import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Media.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('media.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-m">
                    <div className="col-xl-5 t-div-img-m"></div>
                    <div className="col-xl-7 t-text-m">
                        <ul>
                            <li>{t('media.text')}</li>
                            <li>{t('media.text1')} <a href="https://www.sapea.info/interview-leire-rincon-on-evidence-ideas-and-the-race-for-political-attention/">https://www.sapea.info/interview-leire-rincon-on-evidence-ideas-and-the-race-for-political-attention/</a></li>
                            <li>{t('media.text2')} <a href="https://evidenceandpolicyblog.co.uk/2021/05/12/does-scientific-evidence-capture-the-attention-of-policymakers/">https://evidenceandpolicyblog.co.uk/2021/05/12/does-scientific-evidence-capture-the-attention-of-policymakers/ </a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);