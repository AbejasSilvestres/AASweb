import { SectionContainer } from '../Section';

export const TwoColumnSection = ({ left, right, className }) => (
  <SectionContainer className={className}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      <div className="col-span-1 flex justify-center lg:justify-end items-center">
        {left}
      </div>
      <div className="col-span-1 flex justify-center lg:justify-start items-center">
        {right}
      </div>
    </div>
  </SectionContainer>
);
