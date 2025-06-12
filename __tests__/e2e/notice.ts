import "jest-puppeteer";
import "expect-puppeteer";

describe("Notice page", () => {
  const TITLE = "PAY CALCULATOR";

  test("display notices", async () => {
    await Promise.all([
      page.waitForSelector("[data-test=footer-notice-link]"),
      page.goto(`${TARGET_PAGE_URL}/info/notice`),
    ]);
    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const notices = await page.$eval("[data-test=notices]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    expect(pageTitle).toBe(TITLE);
    expect(notices).toContain("First version released!");
  });

  test("display fixed notices", async () => {
    await Promise.all([
      page.waitForSelector("[data-test=footer-notice-link]"),
      page.goto(`${TARGET_PAGE_URL}/info/notice`),
    ]);
    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const notices = await page.$eval("[data-test=notices]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    expect(pageTitle).toBe(TITLE);
    expect(notices).toContain("First version released!");
    expect(notices).toContain("Release a new feature");
  });
});
