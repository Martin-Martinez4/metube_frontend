import { describe, it, expect } from 'vitest';
import { formatdate } from './dateFormaters';
import dayjs from 'dayjs';

describe('sanity check', () => {
  
  
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
  
describe('formatdate test', () => {
  it("It should return 0 mins", () => {

    const currentTime = formatdate(new Date().toString())

    expect(currentTime).toBe("a few seconds")

  })
  it("It should return 1 week ago", () => {

    const dateTotest = dayjs().subtract(2, 'week');

    const currentTime = formatdate(dateTotest.toString())

    expect(currentTime).toBe("14 days")

  })
  it("It should return 1 month ago", () => {

    const fiveWeeksAgo = dayjs().subtract(5, 'weeks');

    const currentTime = formatdate(fiveWeeksAgo.toString())

    expect(currentTime).toBe("a month")

  })
  it("It should return a year", () => {

    const fiveWeeksAgo = dayjs().subtract(1, 'year');

    const currentTime = formatdate(fiveWeeksAgo.toString())

    expect(currentTime).toBe("a year")

  })

});