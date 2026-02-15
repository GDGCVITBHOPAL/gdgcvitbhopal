import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DomainPageLayout from "@/Components/Domains/DomainPageLayout";
import {
    getNonTechDomainsList,
    getNonTechDomainById,
    getDefaultNonTechDomain,
} from "@/data/domains";

function NonTech() {
    const { teamParam } = useParams();
    const navigate = useNavigate();
    const domains = getNonTechDomainsList();

    // Get the active domain based on URL param, or default to first domain
    const activeDomain = teamParam
        ? getNonTechDomainById(teamParam)
        : getDefaultNonTechDomain();

    // Redirect to default domain if no param or invalid param
    useEffect(() => {
        if (!teamParam || !getNonTechDomainById(teamParam)) {
            navigate(`/teams/nonTech/${getDefaultNonTechDomain().id}`, {
                replace: true,
            });
        }
    }, [teamParam, navigate]);

    return (
        <DomainPageLayout
            domains={domains}
            activeDomain={activeDomain}
            basePath="/teams/nonTech"
            categoryName="Non-Tech Domains"
            categoryType="nonTech"
        />
    );
}

export default NonTech;
