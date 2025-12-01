import { StyledH2, StyledSpan } from '@/components'
import { pxToRem } from '@/utils'
import { Avatar, Box } from '@mui/material'
import { AvatarsListProps } from '@/types'

function AvatarList(props: AvatarsListProps) {
  return (
    <>
     {props.listData.map((item, index) => (
  <Box
    key={index}   // <-- aqui é o certo
    sx={{
      alignItems: 'center',
      display: 'flex',
      padding: `${pxToRem(12)} 0`,
    }}
  >

          <Box>
            <Avatar 
            alt={item.name}
            src={item.avatar}
            sx={{
                width: pxToRem(48),
                height: pxToRem(48),
                marginRight:pxToRem(16),
            }} />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledSpan>{item.subtitle}</StyledSpan>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default AvatarList