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
    jest.setTimeout(10000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  });
  test("The first link attribute", async () => {
    jest.setTimeout(15000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });
  test("The page contains Sign in button", async () => {
    jest.setTimeout(10000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});

test("The test1'", async () => {
  jest.setTimeout(10000);
  const firstLink = await page.$(".btn-block.btn-mktg");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("Join GitHub · GitHub");
});

test("The test2'", async () => {
  jest.setTimeout(10000);
  const firstLink = await page.$(".btn-muted-mktg.btn-mktg.width-full");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("Join GitHub · GitHub");
});

test("The test3'", async () => {
  jest.setTimeout(10000);
  const firstLink = await page.$(".link-mktg.text-semibold");
  await firstLink.click();
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("The AI Powered Developer Platform. · GitHub");
});
