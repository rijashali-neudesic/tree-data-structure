import { IOperationContainer } from "./types";

/** A | B | C */
export const mockData1: IOperationContainer = {
  operation: "&",
  nodes: ["A", "B", "C"],
};

/** (A & B) | C */
export const mockData2: IOperationContainer = {
  operation: "|",
  nodes: [
    {
      operation: "&",
      nodes: ["A", "B"],
    },
    "C",
  ],
};

/** ((A & B) & (C | B)) | D */
export const mockData3: IOperationContainer = {
  operation: "|",
  nodes: [
    {
      operation: "&",
      nodes: [
        {
          operation: "&",
          nodes: ["A", "B"],
        },
        {
          operation: "|",
          nodes: ["C", "B"],
        },
      ],
    },
    "D",
  ],
};
