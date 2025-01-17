import { UnixTime } from '@l2beat/shared-pure'
import { upcomingL2 } from './templates/upcoming'
import { Layer2 } from './types'

export const grvt: Layer2 = upcomingL2({
  id: 'grvt',
  createdAt: new UnixTime(1690815262), // 2023-07-31T14:54:22Z
  display: {
    name: 'GRVT',
    slug: 'grvt',
    description:
      'Gravity (GRVT) is a hybrid crypto derivatives exchange, providing a centralized exchange-like experience while being decentralized, featuring self-custodial funds and wallets.',
    purposes: ['DeFi'],
    category: 'Validium',
    provider: 'ZK Stack',
    links: {
      websites: ['https://grvt.io'],
      apps: [],
      documentation: ['https://docs.grvt.io'],
      explorers: [],
      repositories: [],
      socialMedia: [
        'https://twitter.com/grvt_io',
        'https://discord.gg/3jsVPwaGeB',
      ],
    },
  },
})
