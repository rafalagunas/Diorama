import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import {
  DragContainer,
  MainContainer,
  ButtonContainer,
  RedButton,
  Text
} from "../../Styles/FourthSection";

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
class FourthSection extends Component {
  render() {
    return (
      <MainContainer>
        <Text className="lead">Ejemplos</Text>
      </MainContainer>
    );
  }
}

export default FourthSection;
