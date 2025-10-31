
import { Wrapper } from './styled';
import { useCurrentDate } from './useCurrentDate';

const formatdate = (date) => date.toLocaleTimeString(undefined, {
     weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "long",
  });
export const Clock = () => {
  const date = useCurrentDate();
   
  return (
    <Wrapper>
        Dzisiaj jest
        {" "}
      {formatdate(date)}
    </Wrapper>
  )
};