import type { UseFormReturn } from 'react-hook-form';
import { Form, Input } from '@/components/ui/form';
import { Button } from '@/components/ui/buttons';
import { toast } from 'sonner';
import {
  createDonationInputSchema,
  useCreateDonation,
  type createDonationInput,
} from '../api/create';
import { formatErrors } from '@/lib/utils';
import SectionLayout from '@/components/layouts/section-layout';
import ContainerLayout from '@/components/layouts/container-layout';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import CardLayout from '@/components/cards/card-layout';

export default function DonationForm() {
  const createDonation = useCreateDonation();
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedMonthly, setIsCheckedMonthly] = useState(false);
  let formReset: UseFormReturn<createDonationInput>['reset'];

  const handleSubmitDonation = (values: createDonationInput) => {
    createDonation.mutate(
      { data: values },
      {
        onSuccess: (data: any) => {
          toast.success('Successfully created donation');
          if (formReset) {
            formReset();
          }
          if (data?.authorizationUrl) {
            window.location.href = data.authorizationUrl;
          }
        },
        onError: (error: any) => {
          const formatError = formatErrors(error);
          toast.error(formatError);
        },
      },
    );
  };

  const quickAmounts = [
    {
      id: 1,
      amount: 10000,
      desc: `Can sponsor a student's mentorship program`,
    },
    {
      id: 2,
      amount: 25000,
      desc: `Provides tools for skill acquisition.`,
    },
    {
      id: 3,
      amount: 50000,
      desc: `Funds a student for a semester`,
    },
    {
      id: 4,
      amount: 100000,
      desc: `Funds a full start up business.`,
    },
  ];

  return (
    <SectionLayout className="py-4!">
      <ContainerLayout>
        <Form
          onSubmit={handleSubmitDonation}
          schema={createDonationInputSchema}
          options={{
            defaultValues: {
              name: '',
              email: '',
              phoneNumber: '',
              amount: 10000,
              currency: '',
              category: '',
            },
          }}
        >
          {({ register, formState, reset, setValue }) => {
            formReset = reset;
            // const currentAmount = watch('amount');
            return (
              <>
                <div className="grid grid-cols-1">
                  <div className="mb-8">
                    <Input
                      type="number"
                      placeholder="250.00"
                      error={formState.errors['amount']}
                      registration={register('amount', {
                        valueAsNumber: true,
                      })}
                      className="text-2xl font-medium  rounded-none  px-2 py-2 w-48"
                    />
                    <div className="flex gap-6 py-3">
                      <label className="inline-flex mb-3 items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          onChange={() => setIsChecked(!isChecked)}
                          checked={isChecked}
                        />
                        <div
                          className={`relative w-9 h-5 bg-light-grey peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[""] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary`}
                        ></div>
                        <span className="select-none ms-3 text-sm  font-avenir  font-medium text-heading">
                          One-time
                        </span>
                      </label>
                      <label className="inline-flex mb-3 items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          onChange={() =>
                            setIsCheckedMonthly(!isCheckedMonthly)
                          }
                          checked={isCheckedMonthly}
                        />
                        <div
                          className={`relative w-9 h-5 bg-light-grey peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[""] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary`}
                        ></div>
                        <span className="select-none ms-3 text-sm  font-avenir  font-medium text-heading">
                          Monthly
                        </span>
                      </label>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between  gap-8">
                      <div className="grid grid-cols-2 gap-2">
                        {quickAmounts.map((item) => (
                          <CardLayout
                            key={item.id}
                            className={cn(
                              'border-extra-light-grey hover:border-primary text-center rounded px-2 py-2 w-auto',
                              selectedAmount === item.amount
                                ? 'border-primary'
                                : '',
                            )}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedAmount(item.amount)
                                setValue('amount', item.amount);
                              }}
                              className={cn(
                                'px-6 py-2 text-sm cursor-pointer  rounded-full font-avenir font-medium transition-colors duration-300',
                                selectedAmount === item.amount
                                  ? 'bg-primary text-white'
                                  : 'bg-transparent text-dark',
                              )}
                            >
                              ₦{item.amount.toLocaleString()}.00
                            </button>
                            <p className="font-avenir text-center text-xs font-bold mt-2">
                              {item.desc}
                            </p>
                          </CardLayout>
                        ))}
                      </div>
                      <div>
                        <h2 className="text-lg font-avenir font-black">
                          Transparency Reminder
                        </h2>
                        <p className="text-sm font-avenir font-medium mb-2">
                          How Your Donation is Used:
                        </p>
                        <ul className="ml-4">
                          <li className="list-disc text-xs font-avenir text-dark font-black">
                            Scholarship 50%
                          </li>
                          <li className="list-disc text-xs font-avenir text-dark font-black">
                            Mentorship 30%
                          </li>
                          <li className="list-disc text-xs font-avenir text-dark font-black">
                            Admin 10%
                          </li>
                          <li className="list-disc text-xs font-avenir text-dark font-black">
                            Skils Training 10%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full absolute bottom-0 left-0">
                  <Button
                    isLoading={createDonation.isPending}
                    className="bg-light-yellow w-full uppercase h-14 btn text-dark font-black font-avenir hover:bg-primary hover:text-white shadow-none!  rounded-none border-none"
                  >
                    Donate Now
                  </Button>
                </div>
              </>
            );
          }}
        </Form>
      </ContainerLayout>
    </SectionLayout>
  );
}
