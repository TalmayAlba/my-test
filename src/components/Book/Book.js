import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Book.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('book.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-b">
                    <div className="col-xl-5 t-div-img-b"></div>
                    <div className="col-xl-7 t-text-b">
                        <ul>
                            <li>{t('book.text')}</li>
                            <li>{t('book.text1')}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);