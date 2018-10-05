import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import {
  DragContainer,
  MainContainer,
  ButtonContainer,
  RedButton
} from "../../Styles/ThirdSection";

const Dragger = Upload.Dragger;

const props = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
class ThirdSection extends Component {
  render() {
    return (
      <MainContainer>
        <DragContainer>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Arrastra aquí o selecciona tu CSV</p>
          </Dragger>
        </DragContainer>
        <ButtonContainer>
          <RedButton>Generar</RedButton>
        </ButtonContainer>
      </MainContainer>
    );
  }
}

export default ThirdSection;
