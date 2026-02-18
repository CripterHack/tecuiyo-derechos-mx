import React from 'react';
import DOMPurify from 'dompurify';

/**
 * Safely sanitizes HTML content to prevent XSS attacks
 * @param html - Raw HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    // Allow only safe HTML elements and attributes
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote', 'a', 'span', 'div', 'pre', 'code',
      'table', 'thead', 'tbody', 'tr', 'th', 'td'
    ],
    ALLOWED_ATTR: [
      'href', 'title', 'class', 'id', 'target', 'rel'
    ],
    // Ensure links open safely
    ADD_ATTR: ['target', 'rel'],
    // Remove any potentially dangerous protocols
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i
  });
};

/**
 * React component for safely rendering HTML content
 */

export interface SafeHtmlProps {
  html: string;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const SafeHtml: React.FC<SafeHtmlProps> = ({ 
  html, 
  className = "", 
  tag: Tag = "div" 
}) => {
  const sanitizedHtml = sanitizeHtml(html);
  
  return React.createElement(Tag, {
    className,
    dangerouslySetInnerHTML: { __html: sanitizedHtml }
  });
};