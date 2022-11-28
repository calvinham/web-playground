import { createClient as createWagmiClient, configureChains, chain, Chain } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

const baseChains = [chain.mainnet];

const { chains, provider } = configureChains(baseChains, [
  alchemyProvider({
    apiKey: import.meta.env.ALCHEMY_API_KEY,
    priority: 0,
  }),
]);

const web3Client = createWagmiClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new InjectedConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Chamee',
      },
    }),
  ],
});

export default web3Client;
