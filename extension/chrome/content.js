// Content script that embeds an image on npmjs.com package pages

(function() {
  'use strict';

  // Wait for the DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    console.log('Aikido Safe Package extension loaded');
    
    // Get the package name from the URL
    const packageName = getPackageName();
    if (!packageName) {
      console.log('Could not determine package name');
      return;
    }

    console.log('Package name:', packageName);
    
    // Find a good location to insert the badge
    const targetElement = findTargetElement();
    if (!targetElement) {
      console.log('Could not find target element');
      return;
    }

    // Create and insert the badge
    embedBadge(targetElement, packageName);
  }

  function getPackageName() {
    // Extract package name from URL path
    const path = window.location.pathname;
    const match = path.match(/\/package\/(@?[^/]+(?:\/[^/]+)?)/);
    return match ? match[1] : null;
  }

  function findTargetElement() {
    // Try to find the package header or sidebar
    // npmjs.com structure: look for the package title area
    const selectors = [
      'div[class*="packageHeader"]',
      'header',
      'main',
      '#top'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element;
      }
    }

    return document.body;
  }

  function embedBadge(targetElement, packageName) {
    // Create a container for the badge
    const badgeContainer = document.createElement('div');
    badgeContainer.id = 'aikido-safe-package-badge';
    badgeContainer.className = 'aikido-badge-container';

    // Create the image element
    const badgeImage = document.createElement('img');
    badgeImage.src = chrome.runtime.getURL('badge.png');
    badgeImage.alt = 'Aikido Security Badge';
    badgeImage.className = 'aikido-badge-image';
    
    // Add a title/tooltip
    badgeImage.title = `Security status for ${packageName}`;

    // Optional: Make it clickable to show more info
    badgeContainer.addEventListener('click', () => {
      console.log('Badge clicked for package:', packageName);
      // You could open a popup or redirect to more detailed security info
      window.open(`https://your-security-site.com/package/${packageName}`, '_blank');
    });

    badgeContainer.appendChild(badgeImage);
    
    // Insert the badge at the beginning of the target element
    if (targetElement.firstChild) {
      targetElement.insertBefore(badgeContainer, targetElement.firstChild);
    } else {
      targetElement.appendChild(badgeContainer);
    }

    console.log('Badge embedded successfully');
  }
})();
