const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  // const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = "0";

  // Check for event, check for partitionKey, if no partitionKey, stringify event, candidate = hash
  // if (event) {
  //   if (event.partitionKey) {
  //     candidate = event.partitionKey;
  //   } else {
  //     const data = JSON.stringify(event);
  //     candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //   }
  // }

//  Check if we do have a candidate, then check if the type of candidate is not a string, if it is not, then we stringify it. Else candidate is = "0"
// If candidate isn't a string, stringify it.
  // if (candidate) {
  //   if (typeof candidate !== "string") {
  //     candidate = JSON.stringify(candidate);
  //   }
  // } else {
  //   candidate = TRIVIAL_PARTITION_KEY;
  // }

  // Initial thoughts, there's redundancies in the if-else statements. While it is readable, we can consolidate the two checks of if (event) and if(candidate)
  // Maintain the event and partitionKey check, consolidate the candidate type check within.
  if(event) {
    if(event.partitionKey) {
      candidate = typeof event.partitionKey == "string" ? event.partitionKey : JSON.stringify(event.partitionKey)
    } else {
      const data = JSON.stringify(event)
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }


//  Check length of candidate, if it exceeds 256 then we rehash
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }


  return candidate;
};