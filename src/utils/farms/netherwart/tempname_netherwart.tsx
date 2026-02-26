import { Alert } from 'react-bootstrap'
import { Keys, Tags, TFarm } from '../../types.ts'
import PlaceholderImage from '../../../components/common/placeholder-image/PlaceholderImage.tsx'
import { CardinalDirection } from '../../cardinalDirection.ts'

const tempname_wart: TFarm = {
  id: 'tempname-wart',
  name: '--TEMPNAME--',
  banner: '/hypixel-farm-designs/assets/farms/nether_wart/tempname/tempname.png',
  pictures: {

  },
  info: (
    <>
      <div>
        <h2>Info</h2>
        <p>
          Plot saving and <strong>pasting</strong> removes the slime blocks and keeps the water floating.{' '}
          This schematic has the slime blocks placed.
        </p>
        <p>
          Rotate this farm accordingly to your <strong>/tptoplot x</strong> choice.
        </p>
      </div>
      <div>
        <h2>Building tips</h2>
        <p>
          Make it layer per layer.
        </p>
      </div>
      <Alert variant='info'>Do not place water source blocks next to the farmland in the drowning section.</Alert>
    </>
  ),
  spawn: (
    <>
      <Alert variant='info' className='mt-2'>
        This farm does not use a stationary spawnpoint.
      </Alert>
      <PlaceholderImage src='/hypixel-farm-designs/assets/farms/common/depthless-dunce/depthless_dunce_spawn.png' />
    </>
  ),
  tags: [Tags.bps, Tags.key_count, Tags.no_key_swap, Tags.drowning, Tags.water_latch, Tags.patcher, Tags.max_speed],
  bps: 19.74,
  keyCount: 2,
  yaw: -166.6,
  pitch: -1.0,
  farmDirection: CardinalDirection.EAST,
  playerDirection: CardinalDirection.NORTH,
  allowedDirections: [
    {
      farmDirection: CardinalDirection.EAST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    },
    {
      farmDirection: CardinalDirection.WEST,
      playerDirections: [CardinalDirection.SOUTH, CardinalDirection.NORTH]
    },
    {
      farmDirection: CardinalDirection.NORTH,
      playerDirections: [CardinalDirection.WEST, CardinalDirection.EAST]
    },
    {
      farmDirection: CardinalDirection.SOUTH,
      playerDirections: [CardinalDirection.WEST, CardinalDirection.EAST]
    }
  ],
  speed: 400,
  enchantments: ['Frost Walker II'],
  keys: [Keys.W, Keys.LC],
  depth: 5,
  buildDifficulty: 1,
  schema: '/hypixel-farm-designs/assets/schemas/tempname_Wart.litematic',
  authors: ['agitatedsnake92']
}

export default tempname_wart
