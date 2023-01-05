import styled from "styled-components";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { IconClose } from "icons";

export default function Modal({ isOpen, setOpen, title, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const close = () => setOpen(false);

  if (!isOpen) {
    return null;
  }

  return mounted
    ? createPortal(
        <Container onClick={close}>
          <Content onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={close} />
            <Title>{title}</Title>
            <Children>{children}</Children>
          </Content>
        </Container>,
        document.getElementById("modal-root")
      )
    : null;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50%;
  max-width: 75%;
  background: #333333;
  border-radius: 8px;
  padding: 32px;
`;

const CloseIcon = styled(IconClose)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 22px;
`;

const Children = styled.div`
  margin-top: 32px;
`;
