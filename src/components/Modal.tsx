import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./AnimatedModal";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useEffect, useState } from "react";

import { VscLoading } from "react-icons/vsc";
type roastProps = {
  roast: { user: string; Repo: string; roast: string };
};

export function ButtonAnimatedModal({ roast }: roastProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, [loading]);

  return (
    <div className="flex items-center justify-center space-grotesk">
      <Modal>
        <ModalTrigger>
          <Button text="Roast my Profile" handleClick={setLoading} />
        </ModalTrigger>
        <ModalBody>
          <>
            {" "}
            <ModalContent>
              {!loading && roast ? (
                <div className="relative">
                  <h4 className="text-lg md:text-3xl text-neutral-200  font-bold text-center mb-8 capitalize ">
                    {roast?.user} 🔥🔥🔥
                  </h4>
                  <div className="space-grotesk relative">
                    <motion.p
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0.2px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * 1,
                      }}
                      className="text-slate-300 text-center text-balance text-sm  lg:text-lg h-[25rem] overflow-y-auto"
                    >
                      {roast?.roast}
                    </motion.p>
                    <p className="text-sm text-slate-400 font-semibold mt-8 space-grotesk absolute bottom-0 left-0">
                      Repository:&nbsp;{roast?.Repo}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-4xl text-white font-bold p-2 text-center flex gap-2 space-grotesk ">
                  <VscLoading className="animate-spin rounded-full border-gray-100" />
                  <p> Fetching...</p>
                </div>
              )}
            </ModalContent>
            {roast ? (
              <ModalFooter className="gap-4 hidden space-grotesk">
                <button className="px-2 py-1 bg-gray-200 text-black  dark:text-white border border-gray-300 rounded-md text-sm w-28">
                  Download
                </button>
                <button className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28">
                  Share
                </button>
              </ModalFooter>
            ) : (
              ""
            )}
          </>
        </ModalBody>
      </Modal>
    </div>
  );
}
