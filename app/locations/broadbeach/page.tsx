import CollectionLandingPage, { collectionMetadata } from '../../../components/CollectionLandingPage';
import { landingPages } from '../../../lib/landing-pages';
const page = landingPages.find(page => page.key === 'broadbeach')!;
export const metadata = collectionMetadata(page);
export default function Page() { return <CollectionLandingPage page={page} />; }
