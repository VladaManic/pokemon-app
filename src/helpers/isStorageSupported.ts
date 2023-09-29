/**
 * Determines whether an error is a QuotaExceededError.
 *
 * Browsers love throwing slightly different variations of QuotaExceededError
 * (this is especially true for old browsers/versions), so we need to check
 * different fields and values to ensure we cover every edge-case.
 *
 * @param err - The error to check
 * @return Is the error a QuotaExceededError?
 */
function isQuotaExceededError(err: unknown): boolean {
  return (
    err instanceof DOMException &&
    // everything except Firefox
    (err.code === 22 ||
      // Firefox
      err.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      err.name === "QuotaExceededError" ||
      // Firefox
      err.name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}
 
/**
 * Determines whether a storage implementing the Web Storage API (localStorage
 * or sessionStorage) is supported.
 *
 * Browsers can make the storage not accessible in different ways, such as
 * not exposing it at all on the global object or throwing errors as soon as
 * you access/store an item.
 * To account for all these cases, we try to store a dummy item using a
 * try & catch to analyze the thrown error.
 *
 * @param webStorageType - The Web Storage API to check
 * @return Is the storage supported?
 */
function isStorageSupported(
  webStorageType: "localStorage" | "sessionStorage" = "localStorage"
): boolean {
  let storage: Storage | undefined;
  try {
    storage = window[webStorageType];
    if (!storage) {
      return false;
    }
    const x = `__storage_test__`;
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (err) {
    // We acknowledge a QuotaExceededError only if there's something
    // already stored.
    const isValidQuotaExceededError =
      isQuotaExceededError(err) && storage!.length > 0;
    return isValidQuotaExceededError;
  }
}

export default isStorageSupported