import { carProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface carDetailsProps {
  isOpen: boolean;
  car: carProps;
  closeModal: () => void;
}

const CarDetails = ({ isOpen, car, closeModal }: carDetailsProps) => {
  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 backdrop-blur-2xl translate-all shadow-2xl flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 ">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-xl">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="hero-img"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex  gap-3">
                      <div className=" flex-1 relative w-full h-40 bg-primary-blue-100 rounded-xl">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="hero-img"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className=" flex-1 relative w-full h-40 bg-primary-blue-100 rounded-xl">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="hero-img"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className=" flex-1 relative w-full h-40 bg-primary-blue-100 rounded-xl">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="hero-img"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-3">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-[14px] capitalize"
                          key={key}
                        >
                          <h4 className="text-[gray]">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CarDetails;
