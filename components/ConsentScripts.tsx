"use client";
import { useEffect, useState } from "react";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from "vanilla-cookieconsent";

export default function ConsentScripts() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        analytics: {}
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description: 'We use cookies to enhance your experience, gather analytics, and support marketing efforts.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage Individual preferences'
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              sections: [
                {
                  title: 'Somebody said ... cookies?',
                  description: 'I want one!'
                },
                {
                  title: 'Strictly Necessary cookies',
                  description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Performance and Analytics',
                  description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'analytics'
                },
                {
                  title: 'More information',
                  description: 'For any queries in relation to my policy on cookies and your choices, please <a href="/privacy-policy">contact us</a>'
                }
              ]
            }
          }
        }
      },
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          flipButtons: false,
          equalWeightButtons: true
        },
        preferencesModal: {
          layout: 'box',
          flipButtons: false,
          equalWeightButtons: true
        }
      },
      onConsent: () => {
        if (CookieConsent.acceptedCategory('analytics')) {
          setAnalyticsAllowed(true);
        }
      },
      onChange: () => {
        setAnalyticsAllowed(CookieConsent.acceptedCategory('analytics'));
      }
    });
  }, []);

  return (
    <>
      {analyticsAllowed && <GoogleTagManager gtmId="GTM-TKM34NF5" />}
      {analyticsAllowed && <GoogleAnalytics gaId="G-B23C6G8HSD" />}
    </>
  );
}
