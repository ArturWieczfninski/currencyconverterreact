import { Wrapper } from "./styled";

export const Result = ({ result}) => {
    <Wrapper>
        {!!result && (
        <>
        {result.soruceAmount.toFixed()}&nbsp;PLN&nbsp;=
        {" "}
        <strong>
        {result.targetAmount.toFixed()}&nbsp;{result.currency}
        </strong>
        </>
        )}
    </Wrapper>
};