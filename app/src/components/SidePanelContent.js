import React from "react";
import { Field, TextInput, Button, GU, Info } from "@aragon/ui";

const SidePanelContent = ({ onMainClick }) => {
  return (
    <div
      css={`
        padding-top: ${3 * GU}px;
      `}
    >
      <Field label="Twitter Id" required>
        <TextInput wide />
      </Field>
      <Field label="Justification" required>
        <TextInput wide />
      </Field>
      <Info
        css={`
          margin-bottom: ${3 * GU}px;
        `}
      >
        The justification should be an IPFS hash to some reasons for the DAO to accept this twitter
        account as an archiver.
      </Info>
      <Button label="Send Proposal" wide mode="strong" disabled />
    </div>
  );
};

export default SidePanelContent;
