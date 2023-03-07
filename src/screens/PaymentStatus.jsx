import { PaymentContainer } from "../styles/Payment/Style";
import {
  SubHeadingTitle,
  DescriptionText,
} from "../styles/globalStyles";

const PaymentStatus = () => {
  const state = false;
  return (
    <PaymentContainer>
      <div className="flex flex-col mt-40 items-center">
        <img alt="icon" src={state ? "/images/check.svg":"/images/wrongs.svg"}  />
        <SubHeadingTitle className="mt-5">
          {state ? 'Thanks For Your Payment 😊' : 'Failed To Make Payment 😔'}
        </SubHeadingTitle>
        <DescriptionText className="mt-5">Something Went wrong</DescriptionText>
        {/* <div className="grid grid-cols-2 gap-8 w-3/5 mt-4">
          <div>
            <DescriptionText>Name:</DescriptionText>
            <DescriptionText>Pruthvi Patel</DescriptionText>
          </div>
          <div>
            <DescriptionText>Phone:</DescriptionText>
            <DescriptionText>9111111111</DescriptionText>
          </div>
          <div>
            <DescriptionText>Email:</DescriptionText>
            <DescriptionText>xyz@gmail.com</DescriptionText>
          </div>
          <div>
            <DescriptionText>Amount:</DescriptionText>
            <DescriptionText>₹1000</DescriptionText>
          </div>
          <div>
            <DescriptionText>Transaction Id:</DescriptionText>
            <DescriptionText>6afd4s6df</DescriptionText>
          </div>
        </div> */}
      </div>
    </PaymentContainer>
  );
};

export default PaymentStatus;
