import eventsDomain from "./events";
import socialMediaDomain from "./socialMedia";
import designDomain from "./design";
import mediaDomain from "./media";

export const nonTechDomains = {
    eventManagementTeam: eventsDomain,
    socialMediaMarketingTeam: socialMediaDomain,
    designContentTeam: designDomain,
    videoPhotographyTeam: mediaDomain,
};

export const getNonTechDomainsList = () => Object.values(nonTechDomains);
export const getNonTechDomainById = (id) => nonTechDomains[id];
export const getDefaultNonTechDomain = () => nonTechDomains.eventManagementTeam;

export { eventsDomain, socialMediaDomain, designDomain, mediaDomain };
