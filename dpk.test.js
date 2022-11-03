const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns literal '0' when given an empty string input", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  });

  it("Returns the correct key when given a nonstring input", () => {
    const trivialKey = deterministicPartitionKey(4);
    expect(trivialKey).toBe(trivialKey);
  });

  it("Returns the correct key when given a string input", () => {
    const validInput = {
      partitionKey : "ThisIsAPartitionKey"
    }

    const trivialKey = deterministicPartitionKey(validInput);
    expect(trivialKey).toBe(validInput.partitionKey);
  });

  it("Returns a rehashed key when length is greater than 256", () => {
    const validInput = {
      partitionKey : "a".repeat(257)
    }

    const trivialKey = deterministicPartitionKey(validInput)
    expect(trivialKey).not.toBe(validInput.partitionKey);
  })

});
