import React, { useCallback, useRef } from "react";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundButton } from "global_styles";

function Upload({ onUpload, accept, ...rest }) {
  const fileInput = useRef()
  const OpenFileDialog = useCallback(() => fileInput.current.click(), [fileInput])
  const onSelected = useCallback(event => {
    event.stopPropagation();
    event.preventDefault();
    onUpload && onUpload(event.target.files)
  }, [onUpload])
  return (
    <RoundButton {...rest}>
      <input ref={fileInput} accept={accept} type="file" onChange={onSelected} style={{ display: "none" }} />
      <FontAwesomeIcon onClick={OpenFileDialog} color="#0ec1a1" size="lg" icon={faFileUpload} />
    </RoundButton>
  )
}

export default Upload;
