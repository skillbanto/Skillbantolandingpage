import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FacebookPixel from "./components/FacebookPixel";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";

import PricingPage from "./pages/PricingPage";
import ProductsPage from "./pages/ProductsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ScrollCardsDemo from "./pages/ScrollCardsDemo";
import CourseCreationPage from "./pages/CourseCreationPage";
import MarketingToolsPage from "./pages/MarketingToolsPage";
import SalesPaymentsPage from "./pages/SalesPaymentsPage";
import StudentManagementPage from "./pages/StudentManagementPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import CommunityPage from "./pages/CommunityPage";
import CoachingPage from "./pages/CoachingPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import NewslettersPage from "./pages/NewslettersPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

import { suppressViteErrors } from "./errorSuppression";

function App() {
  useEffect(() => {
    // Initialize error suppression to prevent blocking overlays
    suppressViteErrors();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white text-gray-900">
          {/* Facebook Pixel */}
          <FacebookPixel pixelId="1287437309222426" />
          
          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/course-creation" element={<CourseCreationPage />} />
              <Route path="/products/marketing-tools" element={<MarketingToolsPage />} />
              <Route path="/products/sales-payments" element={<SalesPaymentsPage />} />
              <Route path="/products/student-management" element={<StudentManagementPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/help-center" element={<HelpCenterPage />} />
              <Route path="/resources/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-study/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/resources/community" element={<CommunityPage />} />
              <Route path="/coaching" element={<CoachingPage />} />
              <Route path="/communities" element={<CommunitiesPage />} />
              <Route path="/newsletters" element={<NewslettersPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/scroll-cards" element={<ScrollCardsDemo />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;