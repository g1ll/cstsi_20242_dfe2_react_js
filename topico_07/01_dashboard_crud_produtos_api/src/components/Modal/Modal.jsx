import { useRef } from "react"
import { ModalContainer, ModalStyled } from "./modal.styled"
import { createPortal } from "react-dom";

const Modal = ({ title, close, children }) => {
  const outClicked = useRef(null);
  return createPortal(
    <ModalContainer
      onClick={e => e.target == outClicked.current && close()}
      ref={outClicked}>
      <ModalStyled>
        <h1>{title}</h1>
        <div>
          {children}
        </div>
      </ModalStyled>
    </ModalContainer>
    , document.body
  )
}

export default Modal
