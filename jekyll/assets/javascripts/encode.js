function make2DigitsLong(value) {
  return value.length === 1 ? "0" + value : value;
}

function encodeString(nonEncodedString, key) {
  var encodedString = make2DigitsLong(key.toString(16));

  for (var n = 0; n < nonEncodedString.length; n++) {
    encodedString += make2DigitsLong(
      (nonEncodedString.charCodeAt(n) ^ key).toString(16),
    );
  }

  return encodedString;
}
