/**
 * Google Analytics 4 (GA4) Utility
 *
 * This module provides type-safe GA4 tracking for Next.js App Router.
 * Analytics are disabled in development mode for privacy and accurate metrics.
 */

// GA4 Config types
type GtagConfigValue = string | number | boolean | null | undefined;
type GtagConfigObject = Record<string, GtagConfigValue>;
type GtagConfig = Record<string, GtagConfigValue | GtagConfigValue[] | GtagConfigObject>;

// Extend the Window interface to include gtag
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js' | 'set',
            targetId: string,
            config?: GtagConfig
        ) => void;
        dataLayer: Array<unknown>;
    }
}

/**
 * Google Analytics Measurement ID
 * Set this in your environment variables
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Check if analytics should be enabled
 * Only enabled in production with valid measurement ID
 */
export const isAnalyticsEnabled = (): boolean => {
    return (
        process.env.NODE_ENV === 'production' &&
        GA_MEASUREMENT_ID !== '' &&
        typeof window !== 'undefined' &&
        typeof window.gtag === 'function'
    );
};

/**
 * Track page views
 * This is called automatically by the pageview component
 */
export const pageview = (url: string): void => {
    if (!isAnalyticsEnabled()) {
        console.log('[Analytics - Dev Mode] Page view:', url);
        return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

/**
 * Event parameters interface for type safety
 * Uses the same type structure as GtagConfig for compatibility
 */
type EventParams = GtagConfig;

/**
 * Track custom events
 *
 * @param eventName - Name of the event (e.g., 'contact_form_submit')
 * @param params - Additional event parameters
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
    if (!isAnalyticsEnabled()) {
        console.log('[Analytics - Dev Mode] Event:', eventName, params);
        return;
    }

    window.gtag('event', eventName, params);
};

/**
 * Predefined events for type safety and consistency
 */
export const events = {
    // Form Events
    formSubmit: (formName: string, success: boolean = true) => {
        trackEvent('form_submit', {
            form_name: formName,
            success: success,
        });
    },

    formError: (formName: string, errorMessage: string) => {
        trackEvent('form_error', {
            form_name: formName,
            error_message: errorMessage,
        });
    },

    // Visits a course page
    courseClick: (courseName: string) => {
        trackEvent('course_click', {
            course_name: courseName,
        });
    },

    buttonClick: (buttonName: string, location: string) => {
        trackEvent('button_click', {
            button_name: buttonName,
            location: location,
        });
    },

    // Navigation
    navigationClick: (linkText: string, destination: string) => {
        trackEvent('navigation_click', {
            link_text: linkText,
            destination: destination,
        });
    },

    // Navigation Events
    ctaClick: (ctaName: string, ctaLocation: string, destination?: string) => {
        trackEvent('cta_click', {
            cta_name: ctaName,
            cta_location: ctaLocation,
            destination: destination,
        });
    },

    // File Operations
    fileUpload: (fileType: string, location: string) => {
        trackEvent('file_upload', {
            file_type: fileType,
            location: location,
        });
    },

    // Page Visits
    pageVisit: (pageName: string) => {
        trackEvent('page_visit', {
            page_name: pageName,
        });
    },

    // Auth Events
    loginClick: (location: string) => {
        trackEvent('login_click', {
            location: location,
        });
    },

    signupClick: (location: string) => {
        trackEvent('signup_click', {
            location: location,
        });
    },
};

/**
 * React Hook for Analytics
 * Use this in client components for easy event tracking
 */
export const useAnalytics = () => {
    return {
        trackEvent,
        events,
        isEnabled: isAnalyticsEnabled(),
    };
};
