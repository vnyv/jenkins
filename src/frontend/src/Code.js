import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

export const Code = () => {
  const codeString = `
  import something from 'some-thing'
  import anotherThing form 'another-thing
  `;
  return (
    <SyntaxHighlighter
      language="javascript"
      showLineNumbers={true}
      style={docco}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};
