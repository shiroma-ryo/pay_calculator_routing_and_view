import "jest-puppeteer";
import "expect-puppeteer";

describe("About page", () => {
  const TITLE = "PAY CALCULATOR";

  test("display about this service", async () => {
    await Promise.all([
      page.waitForSelector("[data-test=footer-about-link]"),
      page.goto(`${TARGET_PAGE_URL}/info/about`),
    ]);
    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const contentBody = await page.$eval("[data-test=content-body]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    expect(pageTitle).toBe(TITLE);
    expect(contentBody).toContain("About the service called PayCalculator");
  });
});
