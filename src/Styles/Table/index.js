import styled from "styled-components";
import Modal from "react-responsive-modal";
export const Container = styled.div`
  padding-top: 30px;
  .react-bs-table-container {
    .react-bs-table table th {
      white-space: pre-line;
      text-overflow: unset;
      font-size: 15px;
    }
    .react-bs-table table td {
      white-space: pre-line;
      overflow-wrap: break-word;
      overflow-x: hidden;
    }
    overflow-x: hidden;
  }
  .styles_modal__gNwvD {
    width: 90%;
    max-width: 100%;
  }
  .recharts-default-legend {
    padding-top: 40px;
  }
`;

export const APContainer = styled.div`
  .recharts-default-legend {
    padding-top: 40px;
  }
`;

export const Sub = styled.div``;
export const ChartModal = styled(Modal)`
  display: block;
  width: 1200px;
  padding-left: 0px;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: bold;
`;

export const HorizontalTimeLine = styled.div`
  border-bottom: 3px solid #4588ba;
  width: 250px;
  margin-left: 120px;
`;
export const HorizontalText = styled.p`
  margin-left: 120px;
`;
