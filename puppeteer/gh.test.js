let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub · Build and ship software on a single, collaborative platform · GitHub"
    );
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 5000);
});

// --- New tests outside 'describe' ---

async function testPageH1(url, expectedText) {
  const newPage = await browser.newPage();
  await newPage.goto(url);
  const h1Text = await newPage.$eval("h1", (el) => el.textContent.trim());
  expect(h1Text).toContain(expectedText);
  await newPage.close();
}

test("Main page h1", async () => {
  await testPageH1(
    "https://github.com/",
    "Build and ship software on a single, collaborative platform"
  );
}, 5000);

test("Pricing page h1", async () => {
  await testPageH1(
    "https://github.com/pricing",
    "Try the Copilot-powered platform"
  );
}, 5000);

test("Enterprise page h1", async () => {
  await testPageH1(
    "https://github.com/enterprise",
    "The AI-powered developer platform"
  );
}, 5000);
