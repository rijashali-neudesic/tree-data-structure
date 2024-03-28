
/** Leaf container/nodes  */
interface IFundamentalContainer {
  label: string;
  counts: { aggregate: number; pass: number; fail: number; risk: number };
  isPrimary?: boolean;
}

/** Parent/Brach container/nodes  */
export interface IOperationContainer extends IFundamentalContainer {
  operation: "&" | "|";
  nodes: (IOperationContainer | IFundamentalContainer)[];
}

export function instanceOfIOperationContainer(
  obj: any
): obj is IOperationContainer {
  return obj && typeof obj === "object" && "operation" in obj && "nodes" in obj;
}
