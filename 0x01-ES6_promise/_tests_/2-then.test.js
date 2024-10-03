import handleResponseFromAPI from "../2-then.js"; // Adjust the path as necessary

describe("handleResponseFromAPI", () => {
  it("should return an object with status 200 and body 'success' when the promise resolves", async () => {
    const promise = Promise.resolve();
    const response = await handleResponseFromAPI(promise);
    expect(response).toEqual({ status: 200, body: 'success' });
  });

  it("should return an empty Error object when the promise rejects", async () => {
    const promise = Promise.reject();
    const response = await handleResponseFromAPI(promise);
    expect(response).toBeInstanceOf(Error);
  });
});

