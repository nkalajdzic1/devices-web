import styled from "styled-components";

import { Button, If, Page } from "lib/components";
import { H2, H5 } from "lib/components/typography";
import { useQueryParams } from "lib/hooks";

import { useDevices } from "./useDevices";
import { DeviceCard } from "./DeviceCard";
import { useDeleteDevice } from "./useDeleteDevice";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  width: 100%;
`;

const DeviceList = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1000px;
`;

const DevicesGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PageButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SiteNumber = styled(H5)`
  margin-inline: 20px;
`;

const Devices = () => {
  const [{ pageNumber, pageSize, setPageNumber }, { order, orderBy }] =
    useQueryParams({
      orderBy: "modifiedAt",
      pageSize: 16,
    });

  const { data: devices, isLoading } = useDevices({
    pageNumber,
    pageSize,
    order,
    orderBy,
  });

  const { deleteDeviceAsync } = useDeleteDevice();

  const nexPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };

  const onDelete = async (id) => {
    await deleteDeviceAsync(id);
    toast.success("Gerät erfolgreich gelöscht");
  };

  return (
    <Page>
      <H2>Probeaufgabe - Nadir Kalajdzic - 26.9.2022</H2>
      <Wrapper>
        <DeviceList>
          <If predicate={isLoading}>"Wird geladen..."</If>
          <If predicate={!isLoading && !devices?.total}>
            Keine Geräte vorhanden
          </If>
          <If predicate={!isLoading && devices?.total}>
            <DevicesGrid>
              {devices?.data?.map((d, i) => (
                <DeviceCard
                  key={`device-${i}`}
                  device={d}
                  onDelete={() => onDelete(d.id)}
                />
              ))}
            </DevicesGrid>
          </If>
        </DeviceList>
        <Button>Geräte hinzufügen</Button>
      </Wrapper>
      <PageButtons>
        <Button onClick={previousPage} disabled={pageNumber === 1}>
          Vorherige Seite
        </Button>
        <SiteNumber>{pageNumber}</SiteNumber>
        <Button
          onClick={nexPage}
          disabled={pageNumber * pageSize > devices?.total}
        >
          Nächste Seite
        </Button>
      </PageButtons>
    </Page>
  );
};

export default Devices;
