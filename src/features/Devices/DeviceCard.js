import styled from "styled-components";
import { BsFillTrashFill as TrashIcon } from "react-icons/bs";
import { TiTick as TickIcon } from "react-icons/ti";
import { IoMdClose as CloseIcon } from "react-icons/io";

import { H5, Label } from "lib/components/typography";

const Wrapper = styled.div`
  position: relative;
  padding-block: 15px;
  padding-inline: 10px;
  border: 2px solid ${({ theme }) => theme.black};
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
`;

const StyledTrashIcon = styled(TrashIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Tick = styled(TickIcon)`
  width: 20px;
  height: 20px;
`;

const Close = styled(CloseIcon)`
  width: 20px;
  height: 20px;
`;

const FailSafeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DeviceCard = ({ device, onDelete }) => {
  const FailSafeIcon = device?.failSafe ? Tick : Close;

  return (
    <Wrapper>
      <StyledTrashIcon onClick={onDelete} />
      <H5>{device?.name}</H5>
      <Label>{device?.deviceTypeId}</Label>
      <FailSafeWrapper>
        <Label>Failsafe:</Label> <FailSafeIcon />
      </FailSafeWrapper>
    </Wrapper>
  );
};
