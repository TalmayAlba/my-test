import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Research.css';

function Research({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('research.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 t-div-sty-r">
                    <div className="col-xl-7 t-text-r">
                        <h2>{t('preferences.title')}</h2>
                        {t('preferences.text')}
                        <br/><br/>
                        <h2>{t('interest.title')}</h2>
                        {t('interest.text')}
                        <a href="www.d-dem.com">www.d-dem.com</a>
                        {t('interest.text1')}
                        <a href="https://q-dem.com/en/linies-investigacio/grups-d-interes-i-qualitat-de-la-democracia/">https://q-dem.com/en/linies-investigacio/grups-d-interes-i-qualitat-de-la-democracia/</a>
                        {t('interest.text2')}
                        <a href="https://www.cambridge.org/core/journals/journal-of-public-policy/article/abs/contingent-character-of-interest-groupspolitical-parties-interaction/0135D07900C02A739E441490EFDF9940">https://www.cambridge.org/core/journals/journal-of-public-policy/article/abs/contingent-character-of-interest-groupspolitical-parties-interaction/0135D07900C02A739E441490EFDF9940</a>
                        {t('interest.text3')}
                        <br/><br/>
                        <h2>{t('information.title')}</h2>
                        {t('information.text')}
                        <br/><br/>
                        <h2>{t('gender.title')}</h2>
                        {t('gender.text')}
                        <a href="https://www.quesesepa.org/">https://www.quesesepa.org/</a>
                        {t('gender.text1')}
                        <a href="https://irla.cat/premis-i-beques/leire-rincon/">https://irla.cat/premis-i-beques/leire-rincon/</a>
                        {t('gender.text2')}
                    </div>
                    <div className="col-xl-5 t-div-img-r"></div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Research);