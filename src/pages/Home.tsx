import { AvatarList, CardComponent, Header } from "@/components";
import {Container} from '@mui/material'
import { currencyConverter } from "@/utils";


function Home() {
  const monckListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
     {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle:  currencyConverter(4232.54),
    },
     {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(3242.54),
    },
  ]
  return (
    <>
       <Header/>
       <Container maxWidth='lg'>
        <CardComponent  className='primary'>Card</CardComponent>
        <CardComponent>
          <AvatarList listData={monckListData}/>
        </CardComponent>

       </Container>

        </>
  )
}
export default Home