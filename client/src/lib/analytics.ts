
import { trackFacebookEvent, trackFacebookCustomEvent } from '../components/FacebookPixel';

// Track page views
export const trackPageView = (pageName: string) => {
  // You can extend this with Google Analytics or other analytics services
  trackFacebookEvent('PageView', { page: pageName });
};

// Track user registration
export const trackSignUp = (method: string) => {
  trackFacebookEvent('CompleteRegistration', { method });
};

// Track course views
export const trackCourseView = (courseId: string, courseName: string) => {
  trackFacebookEvent('ViewContent', {
    content_type: 'course',
    content_ids: [courseId],
    content_name: courseName
  });
};

// Track course enrollment
export const trackCourseEnrollment = (courseId: string, courseName: string, price: number) => {
  trackFacebookEvent('Purchase', {
    content_type: 'course',
    content_ids: [courseId],
    content_name: courseName,
    value: price,
    currency: 'PKR'
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackFacebookEvent('Lead', { form_name: formName });
};

// Track custom events
export const trackCustomEvent = (eventName: string, params?: object) => {
  trackFacebookCustomEvent(eventName, params);
};
