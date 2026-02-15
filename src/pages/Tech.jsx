import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DomainPageLayout from "@/Components/Domains/DomainPageLayout.jsx";
import {
    getTechDomainsList,
    getTechDomainById,
    getDefaultTechDomain,
} from "@/data/domains";

function Tech() {
    const { teamParam } = useParams();
    const navigate = useNavigate();
    const domains = getTechDomainsList();

    // Get the active domain based on URL param, or default to first domain
    const activeDomain = teamParam
        ? getTechDomainById(teamParam)
        : getDefaultTechDomain();

    // Redirect to default domain if no param or invalid param
    useEffect(() => {
        if (!teamParam || !getTechDomainById(teamParam)) {
            navigate(`/teams/tech/${getDefaultTechDomain().id}`, {
                replace: true,
            });
        }
    }, [teamParam, navigate]);

    return (
        <DomainPageLayout
            domains={domains}
            activeDomain={activeDomain}
            basePath="/teams/tech"
            categoryName="Tech Domains"
            categoryType="tech"
        />
    );
}

export default Tech;
