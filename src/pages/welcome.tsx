import { Helmet } from 'react-helmet-async';
import { PageHeader } from '@/reusables/page-header';
import { PageFooter } from '@/reusables/page-footer';
import { HeroSection } from '@/pages/hero-section';
import { SponsorsSection} from '@/pages/sponsors-section';
import { DetailsSection } from '@/pages/details-section';
import { RsvpSection } from '@/pages/rsvp-section';
    
export default function Welcome(

    ) {
    return (
        <>
            <Helmet title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Helmet>

            <PageHeader />
            <HeroSection />
            <DetailsSection />
            <SponsorsSection />
            <RsvpSection />
            <PageFooter />
        </>
    );
}