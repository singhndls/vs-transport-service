import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';
const NotFoundPage = ProdNotFoundPage;
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ChotaHathiPage = lazy(() => import('./pages/services/ChotaHathi'));
const BoleroPickupPage = lazy(() => import('./pages/services/BoleroPickup'));
const WarehousePage = lazy(() => import('./pages/services/Warehouse'));
const FleetTransportPage = lazy(() => import('./pages/services/FleetTransport'));
const DelhiNCRPage = lazy(() => import('./pages/services/DelhiNCR'));
const OkhlaPage = lazy(() => import('./pages/services/Okhla'));
const NoidaPage = lazy(() => import('./pages/services/Noida'));
const GurgaonPage = lazy(() => import('./pages/services/Gurgaon'));
const LoadingUnloadingPage = lazy(() => import('./pages/services/LoadingUnloading'));
const TaxiServicePage = lazy(() => import('./pages/services/TaxiService'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditions'));
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/blog',
  element: <BlogPage />
}, {
  path: '/blog/:slug',
  element: <BlogPostPage />
}, {
  path: '/services/chota-hathi',
  element: <ChotaHathiPage />
}, {
  path: '/services/bolero-pickup',
  element: <BoleroPickupPage />
}, {
  path: '/services/warehouse',
  element: <WarehousePage />
}, {
  path: '/services/fleet-transport',
  element: <FleetTransportPage />
}, {
  path: '/services/delhi-ncr',
  element: <DelhiNCRPage />
}, {
  path: '/services/okhla',
  element: <OkhlaPage />
}, {
  path: '/services/noida',
  element: <NoidaPage />
}, {
  path: '/services/gurgaon',
  element: <GurgaonPage />
}, {
  path: '/services/loading-unloading',
  element: <LoadingUnloadingPage />
 }, {
  path: '/services/corporate-taxi',
  element: <TaxiServicePage />
}, {
  path: '/privacy-policy',
  element: <PrivacyPolicyPage />
}, {
  path: '/terms',
  element: <TermsConditionsPage />
}, {
  path: '*',
  element: <NotFoundPage />
}];
export type Path = '/' | '/blog' | `/blog/${string}` | '/services/chota-hathi' | '/services/bolero-pickup' | '/services/warehouse' | '/services/fleet-transport' | '/services/delhi-ncr' | '/services/okhla' | '/services/noida' | '/services/gurgaon' | '/services/loading-unloading' | '/services/corporate-taxi' | '/privacy-policy' | '/terms';
export type Params = Record<string, string | undefined>;
