import { SectionContainer } from '../Section';

export const TwoColumnSection = ({ left, right }) => (
  <SectionContainer>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
      <div className="col-span-1 flex justify-center md:justify-end items-center">
        {left}
      </div>
      <div className="col-span-1 flex justify-center md:justify-start items-center">
        {right}
      </div>
    </div>
  </SectionContainer>
);
