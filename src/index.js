import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./Home page/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlesPage from "./Articles page/ArticlesPage";
import DocsPage from "./Docs page/DocsPage";
import { DarkModeProvider } from "./Contexts/DarkModeContext";
import { NavMenuProvider } from "./Contexts/NavMenuContext";
import PartnersPage from "./Partner page/PartnersPage";
import Partner from "./Partner page/Components/Partner";
import DashboardPage from "./Dashboard page/DashboardPage";
import DashboardHome from "./Dashboard page/Components/DashboardHome";
import DashboardPosition from "./Dashboard page/Components/DashboadPosition";
import DashboardStability from "./Dashboard page/Components/DashboardStability";
import DashboardStaking from "./Dashboard page/Components/DashboardStaking";
import DashboardAnalytics from "./Dashboard page/Components/DashboardAnalytics";
import DashboardOATH from "./Dashboard page/Components/DashboardOATH";
import DashboardsTERN from "./Dashboard page/Components/DashboardsTERN";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/Docs",
        element: <DocsPage />,
      },
      {
        path: "/Partners",
        element: <PartnersPage />,
      },
      {
        path: "/Partners/Axelar",
        element: <Partner key={"axelar"} title={"Alexar"} desc={"Axelar delivers secure cross-chain communication solutions for Web3 & DeFi. Ethos Reserve relies on Axelar to safely bridge the $ERN token from Optimism to all other available networks"} task={"Provide multi-chain accessibility and bridging for $ERN investors."} website={"https://axelar.network/"} network={"rbitrum | Avalanche | BNB Chain | Ethereum | Fantom | Optimism | Polygon "} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Faxelar%2F", twitter:"https://twitter.com/intent/tweet?text=Axelar,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Faxelar%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Faxelar%2F&title=Axelar&source=www.ethos.finance"}} image={"../Img/Partner-1.png"} nextName={"Code4rena"} prev={"/Partners/Tarot"} next={"/Partners/Code4rena"} nextimg={"../Img/Partner-2.png"} />,
      },
      {
        path: "/Partners/Code4rena",
        element: <Partner key={"code4rena"} title={"Code4Rena"} desc={"Code4rena is a competitive audit platform that finds more high-severity vulnerabilities, more quickly than any other auditing method. Ethos Reserve relies on Code4rena to help discover vulnerabilities through comprehensive competitive audits. By harnessing the power of the Code4rena community, projects like Ethos Reserve have access to unmatched value when considering engineer hours of code review."} task={"Leverage Code4rena community to ensure high quality contracts, protocol audits."} website={"https://code4rena.com/"} network={"multi-Chain"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fcode4rena%2F", twitter:"https://twitter.com/intent/tweet?text=Code4rena,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fcode4rena%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fcode4rena%2F&title=Code4rena&source=www.ethos.finance"}} image={"../Img/Partner-2.png"} nextName={"Digit"} prev={"/Partners/Axelar"} next={"/Partners/Digit"} nextimg={"../Img/Partner-3.png"} />,
      },
      {
        path: "/Partners/Digit",
        element: <Partner key={"Digit"} title={"Digit"} desc={"Digit implements a new primitive called Reliquary; a contract designed by the Byte Masons that seeks to become the new standard in DeFi for incentive distribution. The Reliquary contract and, by extension, Digit, rewards liquidity providers not only based on position size, but on the position’s maturity. Ethos Reserve relies on Digit for maximum incentive distribution value while helping to create sticky liquidity within the protocol."} task={"Leverage Digit to reward Ethos users based on position size and maturity."} website={"https://digit.xyz/"} network={"Optimism"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fdigit%2F", twitter:"https://twitter.com/intent/tweet?text=Digit,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fdigit%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fdigit%2F&title=Digit&source=www.ethos.finance"}} image={"../Img/Partner-3.png"} nextName={"Equalizer"} prev={"/Partners/Code4rena"} next={"/Partners/Equalizer"} nextimg={"../Img/Partner-4.png"} />,
      },
      {
        path: "/Partners/Equalizer",
        element: <Partner key={"Equalizer"} title={"Equalizer"} desc={"Equalizer is a decentralized exchange (DEX) on the Fantom network, using a perpetual model to balance rewards for token holders and Liquidity Providers (LPs). Instead of low fees that can lead to high slippage in trades, Equalizer maintains a fee structure that supports low slippage trades, offering a better trading experience. The model rewards liquidity with a valuable token, incentivizing holders to support successful trades. Ethos Reserve uses Equalizer to drive deep $ERN liquidity on Fantom."} task={"Partner with Equalizer to drive deep $ERN liquidity on Fantom."} website={" https://equalizer.exchange/ "} network={"Fantom"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fequalizer%2F", twitter:"https://twitter.com/intent/tweet?text=Equalizer,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fequalizer%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fequalizer%2F&title=Equalizer&source=www.ethos.finance"}} image={"../Img/Partner-4.png"} nextName={"Granary"} prev={"/Partners/Digit"} next={"/Partners/Granary"} nextimg={"../Img/Partner-5.png"} />,
      },
      {
        path: "/Partners/Granary",
        element: <Partner key={"Granary"} title={"Granary"} desc={"Granary Finance is a decentralized non-custodial liquidity market protocol where users can participate as depositors or borrowers. Ethos Reserve acts as one of the largest depositors through the Reaper Vault providing liquidity to the market to earn passive income, where borrowers are able to take loans in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion."} task={"Allow Ethos Reserve users to earn yield via Granary offerings."} website={" https://granary.finance/"} network={"Optimism"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fgranary%2F", twitter:"https://twitter.com/intent/tweet?text=Granary,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fgranary%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Fgranary%2F&title=Granary&source=www.ethos.finance"}} image={"../Img/Partner-5.png"} nextName={"Equalizer"} prev={"/Partners/Equalizer"} next={"/Partners/Ramses"} nextimg={"../Img/Partner-6.png"} />,
      },
      {
        path: "/Partners/Ramses",
        element: <Partner key={"Ramses"} title={"Ramses"} desc={"RAMSES is an innovative decentralized exchange (DEX) hosted on Arbitrum that builds upon Andre Cronje’s original vision of Solidly. It features a custom implementation of Univ3 Concentrated Liquidity as well as traditional correlated and volatile pool structs backed with a powerful emission and gauge system on top. Ethos Reserve’s $ERN token is hosted and incentivized on Ramses through the OATH ecosystem partner allocation."} task={"Increase exposure and liquidity for $ERN via Ramses novel DEX features."} website={"https://ramses.exchange/"} network={"Optimism"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Framses%2F", twitter:"https://twitter.com/intent/tweet?text=Ramses,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Framses%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Framses%2F&title=Ramses&source=www.ethos.finance"}} image={"../Img/Partner-6.png"} nextName={"Reaper"} prev={"/Partners/Granary"} next={"/Partners/Reaper"} nextimg={"../Img/Partner-7.png"} />,
      },
      {
        path: "/Partners/Reaper",
        element: <Partner key={"Reaper"} title={"Reaper"} desc={"Reaper is a next-generation asset management solution which optimally allocates funds to earn the most rewards. Ethos Reserve employs private unique Reaper vault technology with custom risk-management parameters to bring the battle-tested efficiency and security to all assets earning yield. Additionally, DeFi power users leverage Reaper.Farm for easy and tax-efficient auto-compounding of their liquidity pool positions."} task={"Deploy risk-averse vaults to compound Ethos Reserve yield."} website={"https://reaper.farm/"} network={"Arbitrum | BNB Chain | Fantom | Optimism"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F", twitter:"https://twitter.com/intent/tweet?text=Reaper,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F&title=Reaper&source=www.ethos.finance"}} image={"../Img/Partner-7.png"} nextName={"Thena"} prev={"/Partners/Ramses"} next={"/Partners/Thena"} nextimg={"../Img/Partner-8.png"} />,
      },
      {
        path: "/Partners/Thena",
        element: <Partner key={"Thena"} title={"Thena"} desc={"Thena was designed to onboard the next generation of protocols to BNB Chain by opening up a free market for THE emissions. Protocols can bribe veTHE holders or acquire veTHE to redirect emissions to their pools, offering a flexible and capital efficient solution to bootstrap and scale liquidity. Ethos Reserve accesses cost-effective incentives through the OATH ecosystem veTHE NFT."} task={"Gain exposure and liquidity for $ERN via Thena's cost-effective incentives."} website={"https://www.thena.fi/"} network={"BNB Chain"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F", twitter:"https://twitter.com/intent/tweet?text=Reaper,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Freaper%2F&title=Reaper&source=www.ethos.finance"}} image={"../Img/Partner-8.png"} nextName={"Tarot"} prev={"/Partners/Reaper"} next={"/Partners/Tarot"} nextimg={"../Img/Partner-9.webp"} />,
      },
      {
        path: "/Partners/Tarot",
        element: <Partner key={"Tarot"} title={"Tarot"} desc={"Tarot is a multi-chain, decentralized lending protocol where users can participate as lenders or borrowers in isolated lending pools. Lenders can supply tokens to any lending pool in the Tarot Protocol to earn passive yield without impermanent loss. Borrowers can deposit LP tokens in a lending pool to borrow additional tokens in the token pair. This enables borrowers to leverage their LP tokens for even more LP tokens, allowing for leveraged yield farming and enhanced LP rewards. Ethos Reserve’s $ERN token and liquidity pools are supported by Tarot."} task={"Leverage Tarot's wide market reach to grow $ERN liquidity and participation."} website={"https://tarot.to/"} network={"Arbitrum | Avalanche | BNB Chain | Fantom | Optimism"} links={{face:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Ftarot%2F", twitter:"https://twitter.com/intent/tweet?text=Tarot,+https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Ftarot%2F", linked:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.ethos.finance%2Fpartners%2Ftarot%2F&title=Tarot&source=www.ethos.finance"}} image={"../Img/Partner-9.webp"} nextName={"Axelar"} prev={"/Partners/Thena"} next={"/Partners/Axelar"} nextimg={"../Img/Partner-1.png"} />,
      },
    ],
  },
  {
      path: "/Articles",
      element: <ArticlesPage />,

  },
  {
      path: "/Dashboard",
      element: <DashboardPage />,
      children: [
        {
          path:"/Dashboard/",
          element: <DashboardHome/>
        },
        {
          path:"/Dashboard/Position",
          element: <DashboardPosition/>
        },
        {
          path:"/Dashboard/Stability",
          element: <DashboardStability/>
        },
        {
          path:"/Dashboard/Staking",
          element: <DashboardStaking/>
        },
        {
          path:"/Dashboard/Analytics",
          element: <DashboardAnalytics/>
        },
        {
          path:"/Dashboard/sTERN",
          element: <DashboardsTERN/>
        },
        {
          path:"/Dashboard/OATH",
          element: <DashboardOATH/>
        },
      ]

  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <DarkModeProvider>
        <NavMenuProvider>
    <RouterProvider router={router} />
    </NavMenuProvider>
      </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
