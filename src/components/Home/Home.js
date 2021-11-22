import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Home.css';

function Home({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('home.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div className="col-xl-10 div-sty">
                    <div className="col-xl-6 div-img"></div>
                    <div className="col-xl-6 div-text">
                        <div class="title">LEIRE RINCON</div>
                        <div class="text">{t('home.text')}</div>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Home);