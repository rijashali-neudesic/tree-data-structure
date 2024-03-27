import React from "react";
import { IOperationContainer, instanceOfIOperationContainer } from "./types";
import { Expandable } from "./Expandable";

const getOperationString = (op: "&" | "|") => (op === "&" ? "AND" : "OR");

const _testContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.";

export const deriveNodeContainer = (
  state: IOperationContainer,
  parentIndex: number = 0
): React.ReactNode => (
  <Expandable title="Test" iteration={parentIndex}>
    {state.nodes.map((_, index) => (
      <>
        {instanceOfIOperationContainer(_) ? (
          deriveNodeContainer(_, parentIndex + index + 1)
        ) : (
          <Expandable iteration={parentIndex + index + 1} title={_}>{_testContent}</Expandable>
        )}
        {index === state.nodes.length - 1 ? null : (
          <>
            <br />
            <div style={{ fontWeight: 'bold' }}>{getOperationString(state.operation)}</div>
            <br />
          </>
        )}
      </>
    ))}
  </Expandable>
);
