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
    // Get the package name from the URL
    const packageName = getPackageName();
    if (!packageName) {
      console.log('Could not determine package name');
      return;
    }
    
    // Find a good location to insert the badge
    const targetElement = findTargetElement();
    targetElement.style.position = 'relative';
    if (!targetElement) {
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
    
    return document.querySelector("#top > div.w-100.ph0-l.ph3.ph4-m") || document.body;
  }

  function embedBadge(targetElement, packageName) {
    // Create a container for the badge
    const badgeContainer = document.createElement('div');
    badgeContainer.id = 'aikido-safe-package-badge';
    badgeContainer.style.width = '200px';
    badgeContainer.style.position = 'absolute';
    badgeContainer.style.top = '50%';
    badgeContainer.style.transform = 'translateY(-50%)';
    badgeContainer.style.right = '0px';

    // Create the image element
    const badgeImage = document.createElement('img');
    badgeImage.src = `https://aikido-safe-package.vercel.app/badge/${packageName}/badge.svg`;
    badgeImage.alt = 'Aikido Security Badge';
    badgeImage.style.width = '100%';
    badgeImage.style.display = 'block';
    
    // Add a title/tooltip
    badgeImage.title = `Security status for ${packageName}`;

    // Optional: Make it clickable to show more info
    badgeContainer.addEventListener('click', () => {
      console.log('Badge clicked for package:', packageName);
      // You could open a popup or redirect to more detailed security info
      window.open(`https://aikido-safe-package.vercel.app/status/${packageName}`, '_blank');
    });

    badgeContainer.appendChild(badgeImage);
    
    // Insert the badge at the beginning of the target element
    if (targetElement.firstChild) {
      targetElement.insertBefore(badgeContainer, targetElement.firstChild);
    } else {
      targetElement.appendChild(badgeContainer);
    }
  }
})();
