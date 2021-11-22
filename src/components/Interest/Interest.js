import React from "react";
import {Helmet} from "react-helmet";
import { withNamespaces } from "react-i18next";
import './Interest.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('interest.title')}</title>
            </Helmet>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-10 t-div-sty-in">
                    <div className="col-xl-5 t-div-img-in"></div>
                    <div className="col-xl-7 t-text-in">
                        {t('interest.text')}
                        <a href="www.d-dem.com">www.d-dem.com</a>
                        {t('interest.text1')}
                        <a href="https://q-dem.com/en/linies-investigacio/grups-d-interes-i-qualitat-de-la-democracia/">https://q-dem.com/en/linies-investigacio/grups-d-interes-i-qualitat-de-la-democracia/</a>
                        {t('interest.text2')}
                        <a href="https://www.cambridge.org/core/journals/journal-of-public-policy/article/abs/contingent-character-of-interest-groupspolitical-parties-interaction/0135D07900C02A739E441490EFDF9940">https://www.cambridge.org/core/journals/journal-of-public-policy/article/abs/contingent-character-of-interest-groupspolitical-parties-interaction/0135D07900C02A739E441490EFDF9940</a>
                        {t('interest.text3')}
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);