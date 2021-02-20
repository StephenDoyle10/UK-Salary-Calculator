const assert = require("assert");
const { thous, earnings } = require("../public/logic.js");

describe("thous", () => {
  it("to make sure numbers display with commas in the right place so they look more like money values, ie 100000 displays as 100,000, and 67222 displays as 67,222", () => {
    const result = thous(1000);
    const expected = "1,000";

    assert.strictEqual(result, expected);
  });
});

describe("earnings", () => {
  it("convert an annual salary of -1000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(-1000);
    const expected = "Error. Illegible amount entered.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £0 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(0);
    const expected = "Error. Illegible amount entered.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £10,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(10000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£10,000.00</strong>.<br>Your take home pay for the year is <strong>£9,940.00</strong>, which works out at <strong>£828.33</strong> per month. <br>This means that over the year you will pay <strong>£0</strong> in income tax, and <strong>£60</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £25,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(25000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£25,000.00</strong>.<br>Your take home pay for the year is <strong>£20,640.00</strong>, which works out at <strong>£1,720.00</strong> per month. <br>This means that over the year you will pay <strong>£2,500</strong> in income tax, and <strong>£1,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £50,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(50000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£50,000.00</strong>.<br>Your take home pay for the year is <strong>£37,640.00</strong>, which works out at <strong>£3,136.67</strong> per month. <br>This means that over the year you will pay <strong>£7,500</strong> in income tax, and <strong>£4,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £75,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(75000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£75,000.00</strong>.<br>Your take home pay for the year is <strong>£52,140.00</strong>, which works out at <strong>£4,345.00</strong> per month. <br>This means that over the year you will pay <strong>£17,500</strong> in income tax, and <strong>£5,360</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £100,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(100000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£100,000.00</strong>.<br>Your take home pay for the year is <strong>£66,640.00</strong>, which works out at <strong>£5,553.33</strong> per month. <br>This means that over the year you will pay <strong>£27,500</strong> in income tax, and <strong>£5,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £150,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(150000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£150,000.00</strong>.<br>Your take home pay for the year is <strong>£90,640.00</strong>, which works out at <strong>£7,553.33</strong> per month. <br>This means that over the year you will pay <strong>£52,500</strong> in income tax, and <strong>£6,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });

  it("convert an annual salary of £200,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(200000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£200,000.00</strong>.<br>Your take home pay for the year is <strong>£117,140.00</strong>, which works out at <strong>£9,761.67</strong> per month. <br>This means that over the year you will pay <strong>£75,000</strong> in income tax, and <strong>£7,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });
  
  it("convert an annual salary of £500,000 into a string that shows how such a salary is broken into different taxes", () => {
    const result = earnings(500000);
    const expected =
      "Your gross annual pay (in other words, pay before tax) is <strong>£500,000.00</strong>.<br>Your take home pay for the year is <strong>£276,140.00</strong>, which works out at <strong>£23,011.67</strong> per month. <br>This means that over the year you will pay <strong>£210,000</strong> in income tax, and <strong>£13,860</strong> in National Insurance.";

    assert.ok(result === expected);
  });
});

