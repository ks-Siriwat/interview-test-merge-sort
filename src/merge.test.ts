import { merge } from "./merge";

describe("merge()", () => {

    test("handles empty arrays", () => {
        expect(merge([], [1, 2], [3])).toEqual([1, 2, 3]);
    });

    test("all empty", () => {
        expect(merge([], [], [])).toEqual([]);
    });

    test("single element each", () => {
        expect(merge([5], [2], [8])).toEqual([2, 5, 8]);
    });

    test("already sorted inputs", () => {
        expect(merge([3, 1], [2, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("duplicates", () => {
        expect(merge([3, 2], [2, 4], [4])).toEqual([2, 2, 3, 4, 4]);
    });
});