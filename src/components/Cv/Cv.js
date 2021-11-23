import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import FileSaver from 'file-saver';
import './Cv.css';

function Cv({ t }) {
    const saveFile = () => {
        FileSaver.saveAs(
        process.env.PUBLIC_URL + "/resources/rincon-garcia-cv.pdf",
        "rincon-garcia-cv.pdf");
    };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('cv.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10">
                    <div className="cv-div-img col-xl-12"></div>
                    <div className="cv-text">{t('cv.text')} <a href={() => false} onClick={saveFile} class="link">{t('cv.text1')}</a></div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Cv);