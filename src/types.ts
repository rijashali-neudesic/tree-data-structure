export interface IOperationContainer {
  operation: "&" | "|";
  nodes: (IOperationContainer | string)[];
  counts?: { aggregate: number; pass: number; fail: number; risk: number };
}

export function instanceOfIOperationContainer(
  obj: any
): obj is IOperationContainer {
  return obj && typeof obj === "object" && "operation" in obj && "nodes" in obj;
}
