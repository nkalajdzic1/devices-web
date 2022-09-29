import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Button, If, Page } from "lib/components";
import { H2, H5 } from "lib/components/typography";

import { useDevice } from "./useDevice";

const Table = styled.table`
  width: 100%;
  margin-top: 10%;
  border-collapse: collapse;

  table,
  th,
  td {
    border: 1px solid;
  }

  tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.hoverGray};
  }

  td {
    padding: 5px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const DeviceInfo = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data: device, isLoading, isSuccess } = useDevice(params?.id);

  const navigateBack = () => navigate(-1);

  return (
    <Page>
      <If predicate={isLoading}>Wird geladen...</If>
      <If predicate={isSuccess && device}>
        <HeaderWrapper>
          <TitleWrapper>
            <H2>{device?.name}</H2>
            <H5>{device?.deviceTypeId}</H5>
          </TitleWrapper>
          <Button onClick={navigateBack}>{"<<"} Zurück</Button>
        </HeaderWrapper>
        <Table>
          <thead>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Failsafe</td>
              <td>{device?.failsafe.toString()}</td>
            </tr>
            <tr>
              <td>Temperatur</td>
              <td>
                {device?.tempMin} - {device?.tempMax} °C
              </td>
            </tr>
            <tr>
              <td>Einbauposition</td>
              <td>{device?.installationPosition}</td>
            </tr>
            <tr>
              <td>Geeignet für 19'' Schrank</td>
              <td>{device?.insertInto19InchCabinet?.toString() || "/"}</td>
            </tr>
            <tr>
              <td>Teminal vorhanden</td>
              <td>{device?.terminalElement?.toString() || "/"}</td>
            </tr>
            <tr>
              <td>Erweiterte Umgebungsbedingungen</td>
              <td>
                {device?.advancedEnvironmentalConditions?.toString() || "/"}
              </td>
            </tr>
          </tbody>
        </Table>
      </If>
      <If predicate={!isLoading && !device}>
        <H5>Keine daten</H5>
      </If>
    </Page>
  );
};

export default DeviceInfo;
