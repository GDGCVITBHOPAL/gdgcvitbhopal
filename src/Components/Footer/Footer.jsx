import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
    return (
        <>
            {/* Desktop Footer - visible on lg screens and above */}
            <DesktopFooter />

            {/* Mobile Footer - visible on screens smaller than lg */}
            <MobileFooter />
        </>
    );
}
