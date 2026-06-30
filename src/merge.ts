export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // collection_1 already sorted from max to min
    // collection_2, collection_3 already sorted from min(0) to max

    const result: number[] = [];

    // pointer
    let i = collection_1.length - 1; // from last
    let j = 0;
    let k = 0;

    while (i >= 0 || j < collection_2.length || k < collection_3.length) {
        const c1_value = collection_1[i] ?? null;
        const c2_value = collection_2[j] ?? null;
        const c3_value = collection_3[k] ?? null;

        let min: number | null = null;
        let minIsCollection: number | null = null;

        if (c1_value !== null) {
            min = c1_value;
            minIsCollection = 1;
        }

        if (c2_value !== null && (min === null || c2_value < min)) {
            min = c2_value;
            minIsCollection = 2;
        }

        if (c3_value !== null && (min === null || c3_value < min)) {
            min = c3_value;
            minIsCollection = 3;
        }

        if (min === null) break;

        result.push(min);

        if (minIsCollection == 1) i--;
        if (minIsCollection == 2) j++;
        if (minIsCollection == 3) k++;

    }

    return result;
}