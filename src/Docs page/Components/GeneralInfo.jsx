import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const GeneralInfo = () => {
  const { Darkmode } = useContext(DarkModeContext);
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" px-5 mt-7">
      <h3 id="GeneralInformation" className=" title font-semibold text-3xl">General Information</h3>
      <div>
        <Accordion open={open === 1}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(1)}
          >
            What is Ethos Reserve?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 1 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font">
            <p className=" leading-7 text-[1.03rem] text-gray-950">
              <p>
                Ethos Reserve is a{" "}
                <strong className=" font-bold">
                  decentralized lending protocol
                </strong>{" "}
                that allows users to take out{" "}
                <strong className=" font-bold">interest-free loans</strong>{" "}
                against collateral such as
                <strong className=" font-bold">BTC, ETH, and LSDs</strong>.
                Loans on Ethos Reserve are paid in{" "}
                <strong className=" font-bold">
                  Ethos Reserve Notes, or ERN
                </strong>
                , which is a stable asset pegged to the US Dollar.
              </p>
              <br />

              <p>
                Loans drawn from Ethos Reserve require users to maintain a
                <strong className=" font-bold">
                  minimum amount of collateral
                </strong>{" "}
                in the system to coverd their debt. These collateral ratios are
                as low as{" "}
                <strong className=" font-bold">
                  108% for ETH and 110% for BTC
                </strong>
                , and may be lowered over time depending on usage. Collateral
              </p>
              <br />
              <p>
                backing ERN is used to generate passive yield, which is directed
                toward Stability Pool depositors. These depositors secure the
                protocol against unhealthy collateral by depositing their ERN
                tokens into a pool which liquidates unhealthy positions within
                the system.
              </p>
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(2)}
          >
            Why Does Ethos Reserve Exists?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 2 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            Ethos Reserve was designed to create a decentralized source of yield
            that is self sustaining and highly stable, powered by ERN. ERN
            depositors are recipients of all yield generated by its volatile
            underlying assets, giving Ethos Reserve the power to de-risk yield
            for the end user. This gives DeFi builders a powerful new primitive
            to build on, backed by the scalable yield of ETH, robustness of BTC,
            and stability of a USD-pegged asset.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(3)}
          >
            What are the Benefits of ERN?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 3 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            <div>
              ERN provides users with a number of potential benefits:
              <ul className=" pl-4 my-3 list-disc">
                <li>0-interest borrowing</li>
                <li>Capital efficient loans</li>
                <li>No exposure to centralized collateral types</li>
                <li>Single-sided yield within the Stability Pool</li>
                <li>
                  Exposure to volatile asset yield with a stable asset (ERN)
                  price
                </li>
                <li>
                  Yield generation from collateral volatility through
                  liquidations
                </li>
                <li>Simple swaps to any other asset on top DEXes</li>
              </ul>
              This list will grow over time, with new use-cases and benefits
              being explored by the Ethos Reserve team and ecosystem partners
              every day.
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(4)}
          >
            What can you do with the Ethos Reserve Protocol?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 4 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            <div>
              Ethos Reserve has a number of useful functions which allow users
              to fine-tune their volatile asset exposure and gain yield on their
              ERN and OATH tokens.
              <ul className=" pl-4 my-3 list-disc">
                <li>
                  Efficiently borrow against collateral by creating a position
                </li>
                <li>Deposit ERN into the stability pool to receive rewards</li>
                <li>Stake Bonded OATH (bOATH) tokens to earn fee revenues</li>
                <li>Redeem ERN for underlying assets if it falls below peg</li>
                <li>
                  Trigger liquidations in exchange for rewards paid in ERN
                </li>
              </ul>
              The Ethos Reserve team will continue to add functionality to the
              protocol. Stay tuned.
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(5)}
          >
            What is OATH?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 5 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            OATH is the governance token of Ethos Reserve, and can be paired
            with ETH to create Bonded Oath (bOATH). Bonded Oath can be staked by
            users to earn yield from the protocol and facilitate trading of the
            OATH token various partner platforms (example: Beethoven-X).
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(6)}
          >
            What does it cost to use Ethos Reserve?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 6 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            Users are charged a small fee every time they borrow assets on the
            platform, starting at 0.5%. This fee will be displayed clearly on
            the front-end, and is routed to $bOATH stakers. Users also pay a
            refundable deposit in the event their position must be closed by
            liquidators. This deposit is to refund liquidators for gas and
            ensure liquidations happen in a timely manner. There is also a small
            fee charged when under-peg ERN tokens are redeemed for collateral,
            however this operation is performed almost exclusively by bots and
            professional arbitragers. Redemptions are not the same as
            withdrawals, and do not require an open position to perform.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
          <AccordionHeader
            className={` header text-lg ${Darkmode?"text-white":" text-black"}`}
            onClick={() => handleOpen(7)}
          >
            What does it cost to use Ethos Reserve?
            <div className=" menuBtn relative z-10 w-fit">
              <i
                className={`fa-solid ${
                  open === 7 ? "fa-minus infoSpin" : "fa-plus"
                } transition-all  p-3 rounded-full cursor-pointer ${
                  Darkmode ? " text-white bg-dark_gray-900" : "hover:bg-slate-100"
                }`}
              ></i>
            </div>
          </AccordionHeader>
          <AccordionBody className="text-gray-950 system-font leading-7 text-[1.03rem]">
            Ethos Reserve has been audited by <strong className=" font-bold">CertiK</strong>. View the
            report here. Additionally, Ethos Reserve has been audited by several
            teams through its <strong className=" font-bold">$150,000 Code4Rena bounty program</strong>{" "}
            in which 154 independent smart contract auditors participated.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default GeneralInfo;
