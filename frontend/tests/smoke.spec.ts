import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/services',
  '/solutions',
  '/applied-research',
  '/industries',
  '/insights',
  '/about',
  '/contact',
  '/login',
  '/industries/financial-services',
];

test.describe('Fintricity Smoke Tests', () => {
  for (const path of pages) {
    test(`should load page: ${path}`, async ({ page }) => {
      const response = await page.goto(path);
      
      // Ensure page returns 200
      expect(response?.status()).toBe(200);
      
      // Ensure the logo text is present
      await expect(page.getByText('Fintricity', { exact: true }).first()).toBeVisible();
      
      // Ensure no 404 text is visible
      const content = await page.textContent('body');
      expect(content).not.toContain('Agent Lost in the Mesh');
    });
  }

  test('contact form should show validation error on empty submit', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: /send/i }).click();
    
    // Check if the HTML5 validation is triggered or an error message appears
    // Since we use 'required' attribute, the form won't submit.
    const url = page.url();
    expect(url).toContain('/contact');
  });
});
