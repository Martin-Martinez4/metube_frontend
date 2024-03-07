import { formatNumber } from "./numberFormater";

describe('formatNumber test', () => {
    it("It should return 100", () => {
  
      const formatedNumber = formatNumber(100);
  
      expect(formatedNumber).toBe("100");
  
    })
    it("It should return 1K", () => {
  
  
      const formatedNumber = formatNumber(1000);
  
      expect(formatedNumber).toBe("1K")
  
    })
    it("It should return 1M", () => {
  
  
      const formatedNumber = formatNumber(1000000)
  
      expect(formatedNumber).toBe("1M")
  
    })
    it("It should return 999", () => {
  
  
      const formatedNumber = formatNumber(999)
  
      expect(formatedNumber).toBe("999")
  
    })
    it("It should return 1.1k", () => {
  
  
      const formatedNumber = formatNumber(1100)
  
      expect(formatedNumber).toBe("1.1K")
  
    })
    it("It should return 1120", () => {
  
  
      const formatedNumber = formatNumber(1120)
  
      expect(formatedNumber).toBe("1.12K")
  
    })
    it("It should return 1.1M", () => {
  
  
      const formatedNumber = formatNumber(1100001)
  
      expect(formatedNumber).toBe("1.1M")
  
    })
    it("It should return 1.19M", () => {
  
  
      const formatedNumber = formatNumber(1190001)
  
      expect(formatedNumber).toBe("1.19M")
  
    })
    it("It should return 999.99K", () => {
  
  
      const formatedNumber = formatNumber(999999)
  
      expect(formatedNumber).toBe("999.99K")
  
    })
    it("It should return 599.5K", () => {
  
  
      const formatedNumber = formatNumber(599509)
  
      expect(formatedNumber).toBe("599.5K")
  
    })
    it("It should return 5.99M", () => {
  
  
      const formatedNumber = formatNumber(5995090)
  
      expect(formatedNumber).toBe("5.99M")
  
    })
    it("It should return 599.5M", () => {
  
  
      const formatedNumber = formatNumber(599509000)
  
      expect(formatedNumber).toBe("599.5M")
  
    })
  
  });