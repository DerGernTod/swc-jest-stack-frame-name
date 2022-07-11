import { callFnWithError } from "./test";

describe("test", () => {
    it("tests error stacks", () => {
        jest.useFakeTimers();
        callFnWithError(() => {
            throw new Error("irrelevant");
        });
        try {
            jest.advanceTimersByTime(1);
            fail("should never come here");
        } catch (e) {
            expect(e.stack).toContain("namedHandlerFn");
        }
    });
});