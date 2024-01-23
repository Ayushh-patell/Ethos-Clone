import React, { useContext } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import NavigationInfo from "./Components/NavigationInfo";
import NavigationInfoBar from "./Components/NavigationInfoBar";
import InfoBox from "./Components/InfoBox";
import { addressesList, collateralList, liquidationList } from "./ListData";

const DocsPage = () => {
  const { Darkmode } = useContext(DarkModeContext);



  return (
    <div
      className={` flex lg:flex-row flex-col lg:px-28 md:px-16 px-8 ${
        Darkmode ? " text-white" : ""
      }`}
    >
      <div className=" lg:w-1/4">
        <div style={{backgroundColor:"#8080805e"}} className=" text-sm rounded-lg sticky h-[50vh] min-h-52 overflow-scroll top-1/4 p-3 flex flex-col gap-3">
           <a className="-unlink" href="#GeneralInformation">General Information</a>
           <a className="-unlink" href="#AccessingReserve">Accessing Ethos Reserve</a>
           <a className="-unlink" href="#NavigatingDashboard">Navigating Ethos Dashboard</a>
           <a className="-unlink" href="#EthosAddresses">Ethos Reserve Addresses</a>
           <a className="-unlink" href="#AcquiringCollateral">Acquiring Collateral</a>
           <a className="-unlink" href="#MintingERN">Minting ERN</a>
           <a className="-unlink" href="#EarningYieldERN">Earning Yield via ERN</a>
           <a className="-unlink" href="#stERN">stERN (Stacked ERN)</a>
           <a className="-unlink" href="#StakingbOATH">Staking bOATH</a>
           <a className="-unlink" href="#Definitions">Definitions</a>
           <a className="-unlink" href="#UnderstandingERN">Understanding ERN</a>
           <a className="-unlink" href="#ZeroInterestLending">Zero-Interest Lending</a>
           <a className="-unlink" href="#StabilityPool">The Stability Pool</a>
           <a className="-unlink" href="#LiquidationWork">How Liquidations Work</a>
           <a className="-unlink" href="#RecoveryReleventRatios">Recovery Mode & Relevent Ratios</a>
           <a className="-unlink" href="#ManagingPosition">Managing Your Positions</a>
           <a className="-unlink" href="#bOATH">bOATH</a>
           <a className="-unlink" href="#Audits">Audits</a>
           <a className="-unlink" href="#ContactUs">Ethos Philosophy</a>
           <a className="-unlink" href="#ContactUs">Contact Us</a>
           <a className="-unlink" href="#Disclaimer">Disclaimer</a>
        </div>
      </div>
      <div className=" lg:w-3/4">
        <GeneralInfo />
        <NavigationInfo />

        <div className=" text-[1.03rem] p-4">
        <div id="NavigatingDashboard" aria-hidden className=" mb-28"></div>
          <h4  className=" text-3xl font-bold title my-5">Navigating Ethos</h4>
          <img className=" my-4" src="./Img/Docs-1.webp" alt="" />

          <p className=" my-2">
            From the Ethos Dashboard you can see everything you need to know at
            a glance. Let&apos;s explore.
          </p>

          <h5 className=" text-xl font-bold title my-3">
            System Health Parameter
          </h5>
          <p className=" my-2">
            At the top of the page there are boxes for each collateral. These
            will show the current Chainlink <strong>price of each asset</strong>
            , as well as the system&apos;s{" "}
            <strong>Total Collateral Ratio (TCR)</strong>. Click on any of these
            boxes to see more details.
          </p>

          <img className=" my-4" src="./Img/Docs-2.webp" alt="" />

          <h5 className=" text-xl font-bold title my-3">My Positions</h5>

          <p className=" my-2">
            The first thing you&apos;ll see on your dashboard is the My
            Positions box, which will show each opened or unopened position{" "}
            <strong>
              you have available. You&apos;re able to have a single position of
              each type, and any unopened position types will prompt you to get
              started
            </strong>
            . Otherwise they will show up with your current collateral ratio
            (CR), liquidation price, collateral, and ERN debt.
          </p>

          <img className=" my-4" src="./Img/Docs-3.webp" alt="" />

          <h5 className=" text-xl font-bold title my-3">
            Earning Form The Dashboard
          </h5>

          <p className=" my-2">
            Below the My Positions section, you&apos;ll find the Stability Pool
            and Staking Pool. Click on either of the Deposit buttons to get
            started opening your first position
          </p>

          <img className=" my-4" src="./Img/Docs-4.webp" alt="" />

          <p className=" my-2">
            When you&apos;ve opened positions in either section, they will show
            up on the dashboard with all of your position data.
          </p>

          <img className=" my-4" src="./Img/Docs-5.webp" alt="" />
          <div id="EthosAddresses" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Ethos Reserve Addresses
          </h4>
          <p className=" my-2">
            Here is a list of useful addresses you can use to interact with
            Ethos Reserve.
          </p>

          {addressesList.map((item, i) => (
            <NavigationInfoBar
              key={i}
              name={item.name}
              link={item.link}
              btnText={item.btnText}
              text={item.text}
            />
          ))}

          <p className=" my-3">
            If you have any questions about a particular contract address,
            please reach out to our team on <strong>Discord</strong>.
          </p>
          <div id="AcquiringCollateral" aria-hidden className=" mb-28"></div>

          <h4  className=" text-3xl font-bold title my-5">
            Acquiring Collateral
          </h4>

          <p className=" my-2">
            Learn how to acquire collateral assets on Optimism.
          </p>

          <h5 className=" text-xl font-bold title my-3">
            Moving Assets Onto Optimism
          </h5>

          <p className=" my-2">
            <strong>The Optimism Bridge</strong> makes it easy for users to
            onboard crypto assets from many popular networks, centralized
            exchanges, or even through a credit or debit card. Select your
            desired onboarding method and follow instructions to fill your
            Optimism wallet.
          </p>

          <img className=" my-4" src="./Img/Docs-6.webp" alt="" />

          <h5 className=" text-xl font-bold title my-3">
            Acquiting Collateral
          </h5>

          <p className=" my-2">
            After moving assets onto Optimism, if you don&apos;t already have
            wrapped BTC (wBTC), wrapped ETH (wETH), or OP, the best way to get
            it is through a DEX. You can find some popular options below.
          </p>

          <InfoBox
            text={
              "Ethos Reserve does not endorse any of the applications shown below. Please perform your own due diligence and research to ensure you are comfortable using their services. Ethos Reserve is not responsible for lost funds or errors you might encounter"
            }
          />

          {collateralList.map((item, i) => (
            <NavigationInfoBar
              key={i}
              name={item.name}
              link={item.link}
              btnText={item.btnText}
              text={item.text}
            />
          ))}
          <div id="MintingERN" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Minting ERN: Open Your First Position
          </h4>

          <p className=" text-sm">
            When you have your collateral, navigate to the{" "}
            <strong>Ethos Reserve Dashboard</strong> to begin creating a
            position.
          </p>

          <InfoBox
            text={"The minimum amount that can be borrowed is 90 ERN."}
          />

          <img className=" my-4" src="./Img/Docs-7.webp" alt="" />

          <p className=" my-2">
            From your dashboard, click on <strong>Get Started</strong> in the{" "}
            <strong>Open a Position</strong> box to open the position creation
            interface.
          </p>

          <img className=" my-4" src="./Img/Docs-8.webp" alt="" />

          <p className=" my-2">
            In the <strong>New Position</strong> interface, select the amount of
            collateral you would like to deposit and the amount of ERN
            you&apos;d like to borrow.
          </p>

          <img className=" my-4" src="./Img/Docs-9.webp" alt="" />

          <InfoBox
            text={
              "The system will tell you if you&apos;ve done anything wrong like borrowed too much or too little. See below for an example."
            }
          />

          <img className=" my-4" src="./Img/Docs-10.webp" alt="" />

          <p className=" my-2">
            When you&apos;re satisfied with your deposit and borrow amounts,
            click on <strong>Open Position</strong> to perform the necessary
            transactions. Your wallet will request confirmation for each
            incomplete transaction
          </p>

          <InfoBox
            text={
              "If your transaction fails — try again! Ethos Reserve will pick up where you left off."
            }
          />

          <img className=" my-4" src="./Img/Docs-11.webp" alt="" />

          <p className=" my-2">
            After your position has been opened, you will see it every time you
            open your Ethos dashboard!
          </p>

          <img className=" my-4" src="./Img/Docs-12.webp" alt="" />

          <p className=" my-2">
            Now that you&apos;re an official Ethos Reserve user,{" "}
            <strong>it&apos;s time to learn how to earn with your ERN.</strong>
          </p>
          <div id="EarningYieldERN" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Earning Yield With ERN
          </h4>
          <p className=" text-sm">
            Learn how to deposit your ERN into the Stability Pool.{" "}
          </p>

          <p className=" my-2">
            Now that you&apos;ve opened your first position, it&apos;s time to
            put your ERN to work in the Stability Pool. Navigate back to the{" "}
            <strong>Ethos Reserve Dashboard</strong> to get started.
          </p>

          <img className=" my-4" src="./Img/Docs-13.webp" alt="" />

          <p className=" my-2">
            From the dashboard, click on{" "}
            <strong>Deposit in Stability Pool.</strong>
          </p>

          <img className=" my-4" src="./Img/Docs-14.webp" alt="" />

          <p className=" my-2">
            From the Stability Pool interface, it&apos;s as easy as typing in
            the amount to deposit and then clicking on{" "}
            <strong>Join Pool.</strong>
          </p>

          <img className=" my-4" src="./Img/Docs-15.webp" alt="" />

          <p className=" my-2">
            Clicking on Join Pool will open up the transaction window. You will
            be asked by your wallet provider to confirm the transaction.
          </p>

          <img className=" my-4" src="./Img/Docs-16.webp" alt="" />

          <p className=" my-2">
            After the transaction is confirmed, you will see your deposit
            alongside pending rewards.
          </p>

          <img className=" my-4" src="./Img/Docs-17.webp" alt="" />

          <p className=" my-2">
            When your rewards are ready to claim, you&apos;ll see a box show up
            prompting you to claim them!
          </p>

          <img className=" my-4" src="./Img/Docs-18.webp" alt="" />
          <p className=" my-2">
            Congratulations! You&apos;ve just created a yield-bearing
            decentralized financial position with Ethos Reserve! Learn more
            about the <strong> mechanics of the Stability Pool</strong> here.
          </p>
          <div id="stERN" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">stERN (Staked ERN)</h4>
          <p className=" text-sm">
            Learn how to deposit your ERN into the Stability Pool.
          </p>

          <p className=" my-2">
            Staked ERN (stERN) is an <strong>interest-bearing ERC-20</strong>{" "}
            token representing ERN that has been staked in the Stability Pool on
            Ethos Reserve. It is a receipt token received from staking ERN into
            the stERN vault on{" "}
            <a className=" text-purple-600" href="https://www.reaper.farm/">
              Reaper.
            </a>
          </p>
          <p className=" my-2">
            When you stake ERN directly into the stability pool, you earn yield
            from the underlying collateral and liquidation income – rewards
            which must be claimed. The stERN vault on Reaper compounds the yield
            back into more ERN, producing a composable, interest-bearing version
            of ERN that grows in value in accordance with the yield earned by
            the Stability Providers. By holding stERN, users are given access to
            the benefits of being a Stability Provider all while holding a
            liquid ERC-20 token that can be used across DeFi.
          </p>
          <p className=" my-2">
            When you stake ERN directly into the stability pool, you earn yield
            from the underlying collateral and liquidation income - rewards
            which must be claimed. The stERN vault on Reaper compounds the yield
            back into more ERN, producing a composable, interest-bearing version
            of ERN that grows in value in accordance with the yield earned by
            the Stability Providers. By holding stERN, users are given access to
            the benefits of being a Stability Provider all while holding a
            liquid ERC-20 token that can be used across DeFi.
          </p>
          <p className=" my-2">
            You can acquire stERN in two ways: By staking ERN in the stERN vault
            on Reaper, or by swapping for it using a decentralized exchange that
            supports a stERN pool.
          </p>
          <div id="StakingbOATH" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">Staking bOATH</h4>
          <p className=" text-sm">
            Learn how to deposit your ERN into the Stability Pool.
          </p>
          <p className=" my-2">
            You can acquire bOATH by providing liquidity to the Bonded Oath
            Token pool on BeethovenX. The pool can be accessed via the Ethos UI
            or{" "}
            <a
              className=" text-purple-600"
              href="https://op.beets.fi/pool/0xd13d81af624956327a24d0275cbe54b0ee0e9070000200000000000000000109"
            >
              via this link.
            </a>{" "}
            Note that you will need to provide 80/20 OATH/wETH liquidity to the
            pool to mint bOATH.
          </p>
          <p className=" my-2">
            Once you have acquired bOATH LPs, you can stake them on Ethos
            Reserve in the Staking Pool.
          </p>
          <img className=" my-4" src="./Img/Docs-19.webp" alt="" />
          <p className=" my-2">
            Once deposited, your bOATH will earn yield from the protocol
            mechanics in the form of ERN via borrowing fees, swap fees from
            BeethovenX, and BTC/ETH/OP from redemption fees.
          </p>
          <img className=" my-4" src="./Img/Docs-20.webp" alt="" />
          <p className=" my-2">
            It is important to note that there is no locking mechanism for
            bOATH. Users can withdraw from the staking pool at any time.
          </p>
          <div id="Definitions" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">Definitions</h4>
          <h5 className=" text-xl font-bold title my-3">Ethos</h5>
          <p className=" my-2">
            Short for Ethos Reserve. Alternatively, the characteristic spirit of
            a culture, era, or community as manifested in its beliefs and
            aspirations.
          </p>
          <h5 className=" text-xl font-bold title my-3">Position</h5>
          <p className=" my-2">
            A collateralized debt position, bound to a single Ethereum address.
            Also referred to as a “CDP” in similar protocols.
          </p>
          <h5 className=" text-xl font-bold title my-3">ERN</h5>
          <p className=" my-2">
            The stablecoin that is issued from a user&apos;s collateralized debt
            position upon opening. 1 ERN can always be exchanged for $1 of
            collateral or deposited in the Stability pool to earn yield.
          </p>
          <h5 className=" text-xl font-bold title my-3">Bonded OATH</h5>
          <p className=" my-2">
            Bonded OATH (bOATH) is both OATH and ETH, backed by a
            Balancer-powered 80/20 liquidity pool. bOATH benefits from trading
            fees generated by Ethos&apos; incentive buyback and distribution
            strategies, and earns Ethos platform fees when deposited in the
            staking pool.
          </p>
          <h5 className=" text-xl font-bold title my-3">Collateral</h5>
          <p className=" my-2">
            Any asset used to open a position on Ethos Reserve. Each collateral
            has its own isolated pool and associated TCR, CCR, and MCR.
          </p>
          <h5 className=" text-xl font-bold title my-3">Collateral Pool</h5>
          <p className=" my-2">
            All the collateral for a given type deposited in Ethos Reserve. Each
            collateral pool has their own TCR, CCR, and MCR, and is isolated
            from each other pool. This means that the ETH pool wouldn&apos;t
            need to worry about changes in the BTC pool&apos;s TCR and vice
            versa.
          </p>
          <h5 className=" text-xl font-bold title my-3">Collateral Ratio</h5>
          <p className=" my-2">
            The ratio of the USD-denominated value of some collateral to the ERN
            debt that collateral backs. There are multiple important types of
            collateral ratios, described below <br />. Personal Collateral Ratio{" "}
            <br /> The collateral ratio of an individual wallet&apos;s position.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Total Collateral Ratio (TCR)
          </h5>
          <p className=" my-2">
            The collateral ratio of an entire collateral pool. Each collateral
            type has its own total collateral ratio.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Critical Collateral Ratio (CCR)
          </h5>
          <p className=" my-2">
            {" "}
            The TCR below which a given collateral pool will enter Recovery
            Mode.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Minimum Collateral Ratio (MCR)
          </h5>
          <p className=" my-2">
            The minimum required amount of collateral to debt ratio required to
            maintain an active position in Ethos Reserve.
          </p>
          <h5 className=" text-xl font-bold title my-3">Stability Pool</h5>
          <p className=" my-2">
            Pooled ERN which exists to liquidate under-collateralized positions
            in exchange for discounted collateral and OATH yield.
          </p>
          <h5 className=" text-xl font-bold title my-3">Staking Pool</h5>
          <p className=" my-2">
            {" "}
            Pooled bOATH that earns all fees from ERN issuance and redemption.
          </p>
          <h5 className=" text-xl font-bold title my-3">Borrower</h5>
          <p className=" my-2">
            A wallet or smart contract that locks collateral in a position and
            issues ERN tokens to their own address. They “borrow” ERN tokens
            against their ETH or BTC collateral.
          </p>
          <h5 className=" text-xl font-bold title my-3">Redemption</h5>
          <p className=" my-2">
            The act of swapping ERN tokens with the system in return for an
            equivalent value of collateral. Any wallet with an ERN token balance
            may redeem, whether or not they are a borrower. When ERN is
            redeemed, the collateral is always withdrawn from the lowest
            collateralized positions, in ascending order of their collateral
            ratio. A redeemer can not selectively target positions with which to
            swap ERN for ETH.
          </p>
          <h5 className=" text-xl font-bold title my-3">Repayment</h5>
          <p className=" my-2">
            When a borrower sends ERN tokens to their own position, reducing
            their debt and increasing their collateral ratio.
          </p>
          <h5 className=" text-xl font-bold title my-3">Liquidation</h5>
          <p className=" my-2">
            The act of force-closing an under-collateralized position and
            redistributing its collateral and debt. When the Stability Pool is
            sufficiently large, the liquidated debt is offset with the Stability
            Pool, and the collateral distributed to depositors. If the
            liquidated debt can not be offset with the Pool, the system
            redistributes the liquidated collateral and debt directly to the
            active positions with healthy collateral ratios. Liquidation
            functionality is permissionless and publically available – anyone
            may liquidate an undercollateralized position one at a time or
            batched in ascending order of collateral ratio.
          </p>
          <h5 className=" text-xl font-bold title my-3">Liquidator</h5>
          <p className=" my-2">
            Usually a role filled by bots, liquidators call liquidation
            functions on the Ethos Reserve smart contracts in exchange for
            users&apos; gas deposits.
          </p>
          <h5 className=" text-xl font-bold title my-3">Recovery Mode</h5>
          <p className=" my-2">
            Recovery Mode activates when a pool&apos;s TCR falls below the CCR.
            During Recovery Mode, positions with a collateral ratio below that
            pool&apos;s CCR are subject to liquidation in ascending order from
            the lowest collateralized position until the system&apos;s TCR is
            above the CCR. During Recovery Mode, positions are closed as normal
            using their associated MCR and any leftover collateral will be made
            claimable on the Ethos Reserve website.
          </p>
          <div id="UnderstandingERN" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">Understanding ERN</h4>
          <p className=" my-2">
            Optimal usage of Ethos Reserve is directly correlated to optimal
            understanding of the ERN token, why it matters, and how different
            market conditions can impact its use cases.
          </p>

          <h5 className=" text-xl font-bold title my-3">The ERN Peg</h5>
          <p className=" my-2">
            While ERN mechanics establish a soft peg to the US dollar, its true
            value lies in a range between $0.995 and $1.085. The reason for this
            is due to the minting and redemption features available to ERN
            holders.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            When ERN is below $1...
          </h5>
          <p className=" my-2">
            Each ERN token can be redeemed for $1 worth of collateral from the
            Ethos Reserve smart contracts. This operation is called a{" "}
            <strong>Redemption</strong>, and incurs a 0.5% fee which is sent to
            the <strong>Staking Pool.</strong>
          </p>

          <InfoBox
            text={
              "Redemptions are handled almost entirely by bots within seconds of ERN dipping below peg. For this reason, they are only done directly from the smart contract level."
            }
          />

          <p className=" my-2">
            Redemptions are different from withdrawals or repayments, as they
            can be performed by users whether they have an open position or not.
            This makes arbitrage when ERN is below $1 very profitable.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            When ERN is above $1...
          </h5>
          <p className=" my-2">
            When ERN rises above $1, minting it gets progressively cheaper. This
            is because Ethos values each ERN token as $1 at time of issuance.
            This means when ERN is valued at $1.05 on an external DEX, every
            $100 of ERN minted nets an extra $5.
          </p>
          <p className=" my-2">
            The stability pool is able to close unhealthy debt positions within
            Ethos Reserve for a profit to ensure it remains fully
            collateralized. Arbitrage efficiency and liquidation bonus mean that
            ERN price may range slightly, but it should never deviate
            excessively from $1 without effectively being able to restore
            itself.
          </p>
          <div id="ZeroInterestLending" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Zero-Interest Lending
          </h4>
          <p className=" my-2">
            Ethos Reserve issues interest-free loans denominated in the $ERN
            stablecoin. Instead of paying interest, users pay a 0.5% issuance
            fee, meaning they don&apos;t need to worry about micro-managing
            their position.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            There is no fee for paying back a loan.
          </h5>
          <h5 className=" text-xl font-bold title my-3">ERN Loan Example</h5>
          <ul className=" pl-4 my-3 list-disc">
            <li>
              If a user deposits sufficient collateral, they can take out a 100
              ERN loan.
            </li>
            <li>
              Their total debt will appear as 110.5 ERN, which is made up of a
              0.5% issuance fee (in this case 0.5 ERN), 10 ERN held as a
              liquidation deposit, and 100 ERN minted to the user&apos;s wallet.
            </li>
            <li>
              When the user pays back 100.5 ERN, the 10 ERN liquidation deposit
              will automatically be paid into their position and the position
              will be closed.
            </li>
          </ul>
          <img className=" my-4" src="./Img/Landing-4.webp" alt="" />
          <div id="StabilityPool" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">The Stability Pool</h4>
          <p className=" my-2">
            The <strong>Stability Pool</strong> is Ethos Reserve&apos;s ultimate
            source of ERN liquidity, designed to repay debt from liquidated
            positions and establish a consistent source of yield for ERN.
          </p>
          <p className=" my-2">
            When positions are liquidated under normal circumstances, an amount
            of ERN equal to that position&apos;s remaining debt is burned from
            the Stability Pool&apos;s balance for repayment. In exchange, the
            entire collateral from the position is transferred to the Stability
            Pool.
          </p>
          <p className=" my-2">
            To users, these liquidations can be thought of like purchases of
            discounted collateral from each pool each time a position becomes
            unhealthy. Your balance of ERN will continuously decline as your
            balance of collateral tokens will continuously increase.
          </p>
          <InfoBox
            text={
              "Many users sell the discounted collateral they receive for more $ERN to benefit from the effects of <strong>compound interest.</strong> This is handled for you automatically in the staked ERN (stERN) vault."
            }
          />

          <img className=" my-4" src="./Img/Docs-21.webp" alt="" />
          <h5 className=" text-xl font-bold title my-3">
            Benefits of the Stability Pool
          </h5>
          <ul className=" pl-4 my-3 list-disc">
            <li>Single-Sided pool</li>
            <li>Excellent source of real yield for ERN depositors</li>
            <li>Easy way to earn OATH rewards</li>
            <li>Ensures efficient and reliable liquidations for ERN</li>
          </ul>
          <h5 className=" text-xl font-bold title my-3">
            Can I withdraw my ERN deposit whenever I want?
          </h5>
          <p className=" my-2">
            {" "}
            Generally speaking, the Stability Pool is not locked and remains
            accessible. However, withdrawals may be temporarily suspended
            whenever there are positions with collateral ratio below 110% that
            have not been liquidated yet.
          </p>
          <div id="LiquidationWork" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            How Liquidation Work
          </h4>
          <p className=" my-2">
            A key stabilizing mechanic of Ethos Reserve is{" "}
            <strong>liquidations</strong>. A liquidation occurs when your
            collateral ratio falls below the{" "}
            <strong>minimum required amount</strong>. In the event of
            liquidation, your position will be closed by the system, debt
            repaid, and collateral forfeited to the{" "}
            <strong>Stability Pool</strong> depositors.
          </p>

          <InfoBox
            text={
              "You can avoid liquidations by ensuring there is a sufficient buffer between your <strong>personal collateral ratio</strong> and the <strong>minimum collateral ratio</strong>"
            }
          />

          <p className=" my-2">
            Liquidations occur at different <strong>collateral ratios</strong>{" "}
            for different <strong>collateral types</strong>, and each{" "}
            <strong>pool</strong> has its own liquidation parameters. These
            parameters are based on the associated collateral type&apos;s risk
            profile.
          </p>

          <div
            className={` grid md:grid-cols-3 grid-cols-1 gap-4 p-3 font-semibold border-b ${
              Darkmode ? "border-gray-800" : ""
            }`}
          >
            <p className=" text-left">Collateral</p>
            <p className="text-left" style={{ overflowWrap: "break-word" }}>
              Minimum Collateral Ratio
            </p>
            <p className="text-left">Critical Collateral Ratio</p>
          </div>

          {liquidationList.map((item, i) => (
            <NavigationInfoBar
              key={i}
              name={item.name}
              link={item.link}
              btnText={item.btnText}
              text={item.text}
            />
          ))}
          <p className=" my-2">
            If you haven&apos;t read the previous section, you may be wondering
            what a <strong>Critical Collateral Ratio</strong> is. Also known as
            the CCR, this is collateral ratio at which you may be subject to
            liquidation during a period of <strong>Recovery Mode.</strong>
          </p>

          <h5 className=" text-xl font-bold title my-3">Recovery</h5>
          <p className=" my-2">
            Recovery Mode is triggered when a pool&apos;s TCR falls below the
            CCR, and is designed to ensure that ERN always remains
            over-collateralized by a sufficient amount. Instances of recovery
            mode are rare, brief, and isolated to the associated collateral
            pool.
          </p>
          <InfoBox
            text={
              "Ensure your personal collateral ratio stays above the critical collateral ratio for its pool to avoid liquidation. In practice, this means checking your position regularly and adding collateral or paying off debt as needed."
            }
          />
          <h5 className=" text-xl font-bold title my-3">
            What oracle are you using to determine the price of collateral?
          </h5>
          <p className=" my-2">
            The protocol uses Chainlink price feeds, falling back to secondary
            oracles under the following (extreme) conditions:
          </p>
          <ul className=" pl-4 my-3 list-disc">
            <li>Chainlink price has not been updated for more than 4 hours</li>
            <li>
              Chainlink response call reverts, returns an invalid price or an
              invalid timestamp
            </li>
            <li>
              The price change between two consecutive Chainlink price updates
              is &rarr;50%.
            </li>
          </ul>
          <p className=" my-2">
            Please note that although the system is diligently audited, a hack
            or a bug that results in losses for the users can never be fully
            excluded.
          </p>

          <h5 className=" text-xl font-bold title my-3">
            Liquidation example (Stability Pool)
          </h5>
          <p className=" my-2">
            Say there is a total of 1,000,000 ERN in the Stability Pool and your
            deposit is 100,000 ERN.
          </p>
          <p className=" my-2">
            A position with debt of 200,000 ERN and collateral of 23.6 BTC is
            liquidated at a BTC price of $10,000. The collateral ratio in this
            case is 118%.
          </p>
          <p className=" my-2">
            Given that your pool share is 10%, your deposit will go down by 10%
            of the liquidated debt (20,000 ERN). In return, you will gain 10% of
            the liquidated collateral (2.36 BTC), which is currently worth
            $23,600. Your net gain from the liquidation is $3600.
          </p>
          <p className=" my-2">
            Depositors can immediately withdraw the collateral received from
            liquidations and sell it to reduce their exposure.
          </p>

          <h5 className=" text-xl font-bold title my-3">
            What happens if the Stability Pool is empty when liquidations occur?
          </h5>
          <p className=" my-2">
            If the Stability Pool is empty, the system uses a secondary
            liquidation mechanism called redistribution. The system
            redistributes the debt and collateral from liquidated positions to
            all other existing positions. The redistribution of debt and
            collateral is done in proportion to the recipient collateral
            amounts.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Liquidation example (Empty Stability Pool)
          </h5>
          <p className=" my-2">
            The example below demonstrates the redistribution of a position that
            is liquidated at 108% CR, assuming the Stability Pool is empty.
          </p>
          <img className=" my-4" src="./Img/Docs-22.webp" alt="" />
          <div id="RecoveryReleventRatios" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Recovery Mode and Relevent Ratios
          </h4>
          <p className=" my-2">
            As a user, it is important to understand how to keep your position
            healthy and how to maintain a level of liquidation risk you are
            comfortable with.
          </p>
          <p className=" my-2">
            Here are some important metrics you must be aware of:
          </p>

          <h5 className=" text-xl font-bold title my-3">
            Minimum Collateral Ratio (MCR)
          </h5>
          <p className=" my-2">
            The minimum amount of collateral that can back a user&apos;s
            position for each asset.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Total Collateral Ratio (TCR)
          </h5>
          <p className=" my-2">
            The ratio of the total dollar amount in collateral in the protocol
            at the current price, to its total debt. Each collateral asset has a
            different TCR, they are siloed and managed separately.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Critical Collateral Ratio (CCR)
          </h5>
          <p className=" my-2">
            The threshold at which, when crossed, triggers recovery mode.
          </p>
          <p className=" my-2">
            When the Total Collateral Ratio (TCR) falls below the Critical
            Collateral Ratio (CCR), recovery mode gets turned on:{" "}
            <strong>TCR &larr; CCR &rarr; Recovery Mode Active</strong>
          </p>
          <h5 className=" text-xl font-bold title my-3">Recovery Mode</h5>
          <p className=" my-2">
            When active, any position below the CCR may be liquidated.
            Liquidations are ordered starting with the position that is least
            collateralized and ending with the most collateralized. Recovery
            mode is active until the TCR is above the CCR. Liquidation happens
            at the MCR and the user keeps the difference.
          </p>

          <h5 className=" text-xl font-bold title my-3">Example</h5>
          <p className=" my-2">
            You have opened a position with WETH. The TCR of WETH drops to 110%
            - below the CCR of 120%, recovery mode gets turned on. Your
            collateral ratio at this time is 115% and you are at risk of being
            liquidated. If you get liquidated, the liquidation will occur at the
            MCR of 108% and you will be able to claim the difference of (115 -
            108) = 7% in collateral.
          </p>
          <div id="ManagingPosition" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Managing Your Position
          </h4>
          <p className=" my-2">
            To maintain a healthy position, it is also important to monitor the
            value of the assets in your position and make adjustments
            accordingly. This means being cognizant of the market value of your
            collateral and adjusting your position accordingly if need be to
            ensure that it stays within the required limits.
          </p>
          <p className=" my-2">
            Now that you are familiar with relevant ratios and metrics,
            let&apos;s discuss how you can keep your position healthy and avoid
            the risk of liquidation (assuming that is your goal).
          </p>
          <p className=" my-2">
            Firstly, it is important to maintain a healthy Personal Collateral
            Ratio (CR) for each position. This means keeping your CR above the
            minimum required amount for each asset in your position, as
            represented by each asset&apos;s Minimum Collateral Ratio (MCR)
            discussed in the previous section.
          </p>
          <img className=" my-4" src="./Img/Docs-23.webp" alt="" />
          <p className=" my-2">
            By maintaining a healthy position, you ensure that you have enough
            collateral to cover any potential losses or fluctuations in the
            asset&apos;s value. If you are not comfortable with the health of
            your position, or your position is at risk of being liquidated, you
            may want to take steps to manage it. Similarly, managing your
            position could include borrowing more ERN or withdrawing some
            collateral to decrease your CR in a situation where you feel
            comfortable doing so.
          </p>
          <p className=" my-2">
            To manage a position, simply click the ‘Edit&apos; button on the
            desired position, then proceed in the same manner by clicking the
            edit button icons either on the collateral side or the ERN side.
            This will give you the option of withdrawing/adding collateral, or
            repaying/borrowing ERN.
          </p>
          <img className=" my-4" src="./Img/Docs-24.webp" alt="" />
          <p className=" my-2">
            Additionally, it is important to keep track of the Critical
            Collateral Ratio (CCR) and take appropriate action if necessary.
            When the TCR falls below the CCR, recovery mode is activated, which
            means that any position below the CCR may be liquidated. To avoid
            liquidation, you should consider adding more collateral to your
            position to bring the TCR back above the CCR.
          </p>
          <p className=" my-2">
            If recovery mode is active, it is important to be aware of your
            position in regards to the increased liquidation threshold. It is
            important to note that, during recovery mode, liquidations happen at
            the MCR and the user keeps the difference.
          </p>
          <div id="bOATH" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Bonded OATH (bOATH)
          </h4>
          <img className=" my-4" src="./Img/Docs-25.png" alt="" />
          <p className=" my-2">
            Bonded Oath, or $bOATH, is both OATH and ETH, backed by a
            Balancer-powered 80/20 liquidity pool. $bOATH earns platform fees
            and benefits from trading fees generated by Ethos&apos; incentive
            buyback and distribution strategies. These strategies create a
            constant source of demand for $OATH as it buys it back to fund
            yield.
          </p>
          <p className=" my-2">
            A $bOATH position staked on Ethos will earn yield from ERN loan
            issuance fees, and Redemption rewards. Redemption typically only
            occurs when ERN falls below $1. You can read more about Redemption
            in <strong>Understanding ERN.</strong>
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Please note that Redemption is not the same as repayment. There is
            no fee for repaying a loan.
          </h5>
          <div id="Audits" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Audits: Certik and Code4Rena
          </h4>

          <p className=" my-2">
            Ethos Reserve is <strong>fully audited</strong> by Certik.{" "}
            <a
              className=" text-purple-600"
              href="https://ethos.finance/wp-content/uploads/2023/08/CertiK_EthosReserve_AuditReport.pdf"
            >
              View the report
            </a>{" "}
            . Additionally, Ethos Reserve has been{" "}
            <a
              className=" text-purple-600"
              href="https://code4rena.com/reports/2023-02-ethos"
            >
              extensively audited{" "}
            </a>{" "}
            in a Code4Rena contest.{" "}
            <a
              className=" text-purple-600"
              href="https://code4rena.com/contests/2023-02-ethos-reserve-contest#top"
            >
              View the results.
            </a>{" "}
          </p>
          <div id="ContactUs" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">
            Contact Us and Join Our Community
          </h4>
          <p className=" my-2">
            We enjoy and empower business and community engagement and hope to
            learn as much from you as you do from us. You can find us on{" "}
            <strong>Twitter, Telegram, and Discord.</strong>
          </p>
          <div id="Disclaimer" aria-hidden className=" mb-28"></div>

          <h4 className=" text-3xl font-bold title my-5">Legal Disclamer</h4>
          <h5 className=" text-xl font-bold title my-3">
            Information Published is Not Advice
          </h5>
          <p className=" my-2">
            {" "}
            The information provided on Ethos Reserve does not constitute
            investment advice, financial advice, trading advice, or any other
            sort of advice, and you should not treat any of Ethos Reserve&apos;s
            content as such. Our team provides Ethos Reserve as a service to the
            public, and is not responsible for, and expressly disclaims all
            liability for, damages of any kind arising out of use, reference to,
            or reliance on any information contained within Ethos Reserve. While
            the information contained within Ethos Reserve is periodically
            updated, no guarantee is given that the information provided in
            Ethos Reserve is correct, complete, and up-to-date.
          </p>
          <h5 className=" text-xl font-bold title my-3">Usage Risks</h5>
          <p className=" my-2">
            {" "}
            Ethos Reserve is not responsible for any losses, damages, or claims
            arising from events falling within the scope of events such as, but
            not limited to: mistakes made by the user (e.g. payments sent to
            wrong addresses), software problems of Ethos Reserve or any related
            software or service (e.g. malware or unsafe cryptographic
            libraries), technical failures (e.g. hardware wallets malfunction),
            security problems experienced by the user (e.g. unauthorized access
            to wallets), actions or inactions of third parties (e.g. bankruptcy
            of service providers, information security attacks on service
            providers, and fraud conducted by third parties).
          </p>
          <h5 className=" text-xl font-bold title my-3">Investment Risks</h5>
          <p className=" my-2">
            {" "}
            Investment in cryptocurrencies can lead to loss of money and prices
            having large range fluctuations. The information published on Ethos
            Reserve cannot guarantee no money loss. Ethos Reserve users are
            responsible for understanding these risks, doing their own due
            diligence, and making their own decisions on how to interface with
            Ethos Reserve.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Compliance wth Tax Obligations
          </h5>
          <p className=" my-2">
            {" "}
            The users of Ethos Reserve are solely responsible to determine what,
            if any, taxes apply to their cryptocurrency holdings. The owners of,
            or contributors to, Ethos Reserve are NOT responsible for
            determining the taxes that apply to user transactions.
          </p>
          <h5 className=" text-xl font-bold title my-3">No Warranties</h5>
          <p className=" my-2">
            {" "}
            Ethos Reserve is provided on an “as is” basis without any warranties
            of any kind regarding Ethos Reserve and/or any content, data,
            materials and/or services provided on Ethos Reserve. Ethos Reserve
            functionality is not guaranteed and could be disabled fully or in
            part without prior notice.
          </p>
          <h5 className=" text-xl font-bold title my-3">Security</h5>
          <p className=" my-2">
            {" "}
            Security audits do not eliminate risks completely. Ethos Reserve is
            not guaranteed to be secure or free from bugs or viruses.
          </p>
          <h5 className=" text-xl font-bold title my-3">
            Limitation of Liability
          </h5>
          <p className=" my-2">
            {" "}
            Unless otherwise required by law, in no event shall the owners of,
            or contributors to, Ethos Reserve be liable for any damages of any
            kind, including, but not limited to, loss of use, loss of profits,
            or loss of data arising out of or in any way connected with the use
            of Ethos Reserve.
          </p>
          <h5 className=" text-xl font-bold title my-3">Arbitration</h5>
          <p className=" my-2">
            {" "}
            Users of Ethos Reserve agree to arbitrate any dispute arising from
            or in connection with Ethos Reserve or this disclaimer, except for
            disputes related to copyrights, logos, trademarks, trade names,
            trade secrets or patents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
