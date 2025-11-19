import { useState } from 'react';
import ContainerLayout from '../layouts/container-layout';
import { Button } from '../ui/buttons';
import Modal from '../modal';
import DonationForm from '@/features/donate/components/donate-form';

type Props = {
  goalAmount: number;
  raisedAmount: number;
};

export default function DonationGoalTracker({
  goalAmount,
  raisedAmount,
}: Props) {
  const [open, setOpen] = useState(false);
  const percentage = Math.min((raisedAmount / goalAmount) * 100, 100);

  return (
    <>
      <ContainerLayout>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold md:text-lg text-dark font-avenir">
            ${raisedAmount.toLocaleString()} Raised
          </span>
          <span className="text-sm font-semibold text-grey font-avenir">
            Goal: ${goalAmount.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200  h-4">
          <div
            className="bg-primary h-4 transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-center my-6 text-sm font-semibold font-avenir text-grey">
          {percentage.toFixed(0)}% Complete
        </p>
        <div className="btn inline-block">
          <Button
            onClick={() => setOpen(true)}
            className="bg-light-yellow uppercase hover:bg-primary hover:text-white text-dark font-avenir font-bold text-lg py-6 rounded-none border-0 transition-colors duration-300"
          >
            Continue to donate
          </Button>
        </div>
      </ContainerLayout>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <DonationForm />
      </Modal>
    </>
  );
}
