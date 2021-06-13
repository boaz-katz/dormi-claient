import styled from "styled-components";

export const Contener = styled.div`
  p {
    margin-inline-start: 10%;
    text-align: start;
  }
  .ant-form {
    width: 100%;
    /* text-align: center; */
    padding-left: 7%;
    padding-right: 7%;
  }
  .ant-form-item-label > label {
    position: static;
    width: 150px;
    height: 33px;
    text-align: start;
  }
  @media only screen and (min-width: 600px) {
    .ant-form-item .ant-select,
    .ant-form-item .ant-cascader-picker {
      width: 31%;
      margin-inline-start: -60%;
    }
  }
`;
