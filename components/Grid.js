import styled, { css } from "styled-components";
import RecordModal from "./modal/RecordModal";
import { useState } from "react";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export default function Grid() {
  const [modalOpen, setModalOpen] = useState(false);
  const dayOfYear = getDayOfYear();
  return (
    <Container>
      {Array(365)
        .fill("")
        .map((_, i) => (
          <Item
            key={i}
            type={i > dayOfYear ? "future" : i === dayOfYear ? "today" : "past"}
            onClick={() => setModalOpen(true)}
          >
            {i + 1}
          </Item>
        ))}
      <RecordModal isOpen={modalOpen} setOpen={setModalOpen}>
        hellooo
      </RecordModal>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 32px;
  max-width: 750px;
  margin: 0 auto;
`;

const Item = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${({ type }) =>
    type === "future" ? "#222222" : type === "today" ? "none" : "#3fd467"};
  ${({ type }) =>
    type === "today" &&
    css`
      border: 2px solid grey;
    `};
  ${({ type }) =>
    (type === "today" || type === "past") &&
    css`
      cursor: pointer;
      &:hover {
        filter: brightness(70%);
      }
    `};
  line-height: 60px;
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  color: #dddddd;
  user-select: none;
`;
