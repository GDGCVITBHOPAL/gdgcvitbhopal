import webDevDomain from "./webDev";
import androidDomain from "./android";
import mlDomain from "./ml";
import blockchainDomain from "./blockchain";
import wtmDomain from "./wtm";

export const techDomains = {
    webDTeam: webDevDomain,
    androidTeam: androidDomain,
    mlTeam: mlDomain,
    blockChainTeam: blockchainDomain,
    womenTechmakers: wtmDomain,
};

export const getTechDomainsList = () => Object.values(techDomains);
export const getTechDomainById = (id) => techDomains[id];
export const getDefaultTechDomain = () => techDomains.webDTeam;

export { webDevDomain, androidDomain, mlDomain, blockchainDomain, wtmDomain };
