import SectionLayout from '../layouts/section-layout';
import ContainerLayout from '../layouts/container-layout';
import DonationGoalTracker from './donation-goal-tracker';
import DonationCause from './donation-cause';

export default function DonateSection() {
  return (
    <SectionLayout>
      <ContainerLayout>
        <DonationGoalTracker goalAmount={10000} raisedAmount={6500} />
        <DonationCause />
      </ContainerLayout>
    </SectionLayout>
  );
}
