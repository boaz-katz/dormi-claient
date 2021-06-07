import styled from "styled-components";
import { Form, Select, Checkbox, Input, Modal, Button, Tag } from "antd";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-card {
    margin: 3px;
  }
  .top_icon {
    margin-top: 4%;
    display: flex;

    flex-direction: row;
    align-items: center;
    margin-bottom: 3%;
  }
  .ant-card-head {
    /* background: ${(props) => (props.primary ? "red" : "green")}; */
  }
  .export_exel {
    background-color: #00c851;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    border-radius: 100px;
    color: white;
  }
  .filter {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    border-radius: 100px;
    color: blue;
  }

  .ant-card.ant-card-bordered {
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    .ant-card.ant-card-bordered {
      width: 550px !important;
    }
  }
  .dropdownClassName {
    color: red;
  }
`;
export const StyeldSelect = styled(Select)`
  width: 110px;
  .ant-select-selector {
    background-color: ${(props) => props.primary.backgroundcoler}!important;
    color: ${(props) => props.primary.color}!important;
    border-color: ${(props) => props.primary.border}!important;
  }
  .ant-select-arrow {
    color: ${(props) => props.primary.color}!important;
  }
`;
export const StyeldTag = styled(Tag)`
  .ant-tag-success {
    width: 100% !important;
    text-align: center;
    height: 100%;
  }
  .ant-tag-red {
    width: 100%;
    text-align: center;
    height: 100%;
  }
  .span.ant-tag.ant-tag-warning {
    width: 100%;
    text-align: center;
    height: 100%;
  }
`;
