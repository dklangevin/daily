import Modal from "components/modal";
import Button from "components/Button";
import styled, { css } from "styled-components";
import { useState } from "react";

export default function RecordModal({ isOpen = false, setOpen = () => {} }) {
  const [state, setState] = useState();

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title="Log Your Completion">
      <Content>
        <Buttons>
          <NotCompleteButton
            onClick={() => setState("not-completed")}
            selected={state === "not-completed"}
          >
            Not Completed
          </NotCompleteButton>
          <CompleteButton
            onClick={() => setState("completed")}
            selected={state === "completed"}
          >
            Completed!
          </CompleteButton>
        </Buttons>
        <CommentHeader>Comments</CommentHeader>
        <TextArea />
        <Buttons>
          <Button appearance="secondary">Cancel</Button>
          <Button>Log</Button>
        </Buttons>
      </Content>
    </Modal>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const NotCompleteButton = styled(Button)`
  border: 2px solid #b77a7a;
  background: ${({ selected }) => (selected ? "#b77a7a" : "none")};
`;

const CompleteButton = styled(Button)`
  border: 2px solid #7ab77a;
  background: ${({ selected }) => (selected ? "#7ab77a" : "none")};
`;

const CommentHeader = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  border: 1px solid grey;
  font-family: inherit;
  resize: none;
  min-height: 140px;
  appearance: none;
  background: #1c1c1c;
`;
