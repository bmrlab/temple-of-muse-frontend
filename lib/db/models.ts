import { Knex } from 'knex'
import { getKnex } from './knex'


/**
 * Temple
 */
export interface Temple {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

export const TempleObjects = () => (getKnex())<Temple>('temples')


/**
 * NFTSlot
 */
export interface NFTSlot {
  id: number
  temple_id: number
  slot_key: string
  media_uri: string,
  contract_address: string,
  token_id: string,
  created_at: string
  updated_at: string
}

export const NFTSlotObjects = () => (getKnex())<NFTSlot>('nftslots')
