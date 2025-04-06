import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isShowing]);

  const openPopup = (content) => {
    setIsShowing(true);
    setContent(content);
  };
  return (
    <ModalContext.Provider value={{ openPopup, setIsShowing }}>
      {children}
      <AnimatePresence>
        {isShowing && (
          <div className="fixed inset-0">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-600/50">
              <motion.div
                className="w-[50vw] rounded-[8px] bg-white p-4"
                // onClick={(e) => {
                //   e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
                // }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[24px] font-[700] uppercase">
                    Cập nhật khách hàng
                  </h3>
                  <IoMdClose
                    className="text-primary cursor-pointer text-[24px]"
                    onClick={() => setIsShowing(false)}
                  />
                </div>
                {content}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};
export default ModalProvider;

export const useModalContext = () => {
  return useContext(ModalContext);
};
