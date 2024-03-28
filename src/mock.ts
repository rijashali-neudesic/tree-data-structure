import { IOperationContainer } from "./types";

const mockCounts = { aggregate: 10, pass: 5, fail: 5, risk: 1 };
/** A | B | C */
export const mockData1: IOperationContainer = {
  operation: "&",
  label: "disc_speci_subSpec",
  counts: mockCounts,
  nodes: [
    // { label: "ST_OR", counts: mockCounts, isPrimary: true },
    // { label: "RN_ICU", counts: mockCounts, isPrimary: true },
    { label: "A", counts: mockCounts, isPrimary: true },
    { label: "B", counts: mockCounts },
    { label: "C", counts: mockCounts },
  ],
};

const containerRegistry = {
  primary: {},
  ST_OR: {
    // requirement
  },
  RN_ICU: {
    // requirement
  },
};

/** (A & B) | C */
export const mockData2: IOperationContainer = {
  operation: "|",
  label: "(A & B) | C",
  counts: mockCounts,
  nodes: [
    {
      operation: "&",
      label: "A & B",
      counts: mockCounts,
      isPrimary: true,
      nodes: [
        { label: "A", counts: mockCounts },
        { label: "B", counts: mockCounts },
      ],
    },
    { label: "C", counts: mockCounts },
  ],
};

/** ((A & B) & (C | B)) | D ==> (AB & (C + B)) | D */
export const mockData3: IOperationContainer = {
  operation: "|",
  label: "((A & B) & (C | B)) | D",
  counts: mockCounts,
  nodes: [
    {
      operation: "&",
      label: "(A & B) & (C | B)",
      counts: mockCounts,
      isPrimary: true,
      nodes: [
        {
          operation: "&",
          label: "A & B",
          counts: mockCounts,
          nodes: [
            { label: "A", counts: mockCounts },
            { label: "B", counts: mockCounts },
          ],
        },
        {
          operation: "|",
          label: "C | B",
          counts: mockCounts,
          nodes: [
            { label: "C", counts: mockCounts },
            { label: "B", counts: mockCounts },
          ],
        },
      ],
    },
    { label: "D", counts: mockCounts },
  ],
};

const responseData = {
  treeNode: mockData1,
  containerRegistry: {
    ST_OR: {
      // requirement
    },
    RN_ICU: {
      // requirement
    },
  },
};
