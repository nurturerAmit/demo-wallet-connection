import { ConnectButton , useAccountModal, useChainModal, useConnectModal} from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from './components'

export function App() {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  return (
    <>
      <h1>wagmi + RainbowKit + Vite</h1>
      {isConnected && <Account />}
      <ConnectButton/>
    </>
  )
}
