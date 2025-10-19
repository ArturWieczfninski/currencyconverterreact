import { Wrapper } from "/styled";

export const Result = ({ result}) => {
    <Wrapper>
        {!!result && (
        <>
        {result.sorceAmount.tofixed(2)}&nbsp;PLN&nbsp;=
        {" "}
        <strong>
        {result.targetAmount.tofixed(2)}&nbsp;{result.currency}
        </strong>
        </>
        )}
    </Wrapper>
};