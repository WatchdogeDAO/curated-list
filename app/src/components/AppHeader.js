import React from "react";
import { Button, GU, Header, IconPlus, textStyle, Tag } from "@aragon/ui";

const AppHeader = ({ onMainClick }) => (
  <Header
    css={`
      ${textStyle("title2")};
    `}
    primary={
      <>
        <div>Curated List</div>
        <div>
          <Tag
            css={`
              margin-left: ${1 * GU}px;
            `}
            mode="identifier"
          >
            Archivers
          </Tag>
        </div>
      </>
    }
    secondary={
      <Button mode="strong" label="Add Member" icon={<IconPlus />} onClick={onMainClick} />
    }
  />
);

export default AppHeader;
