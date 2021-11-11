import React from "react";
import { withNamespaces } from "react-i18next";

function Aboutme({ t }) {
    return (
        <div>{t('aboutme')}</div>
    );
}

export default withNamespaces() (Aboutme);