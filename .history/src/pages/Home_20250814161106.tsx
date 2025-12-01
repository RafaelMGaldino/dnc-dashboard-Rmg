import { AvatarList, CardComponent, CustomChart, CustomTable, Header, StyledH2 } from "@/components";
import {Container, Grid} from '@mui/material'
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
  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
         [
          <span>Nome 1</span>,
          <span>nome1@email.com</span>,
          <button>ACTION</button>,
         ],
         [
          <span>Nome 2</span>,
          <span>nome2@email.com</span>,
          <button>ACTION</button>,
         ],
         [
          <span>Nome 3</span>,
          <span>nome3@email.com</span>,
          <button>ACTION</button>,
         ],
    ]
  }
  return (
    <>
       <Header/>
       <Container maxWidth='lg'>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardComponent>
            <StyledH2 className="mb-1">Total de Vendas no Mês</StyledH2>
            </CardComponent> 
          </Grid>

          <Grid item xs={12} md={4}>
            <CardComponent className='alert'>
            <StyledH2 className="mb-1">Metas do Mês</StyledH2>
            </CardComponent>
          </Grid>

        
          <Grid item xs={12} md={4}>
            <CardComponent>
            <StyledH2 className="mb-1">Leads contactados</StyledH2>
            </CardComponent> 
          </Grid>

          
          <Grid item xs={12} md={7}>
            <CardComponent>
            <StyledH2 className="mb-1">Valor de Vendas No Mês</StyledH2>
              <CustomChart
         labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
          data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
           type='line'/>
            </CardComponent> 
          </Grid>

            <Grid item xs={12} md={5}>
            <CardComponent>
            <StyledH2 className="mb-1">Maiores Vendendores no Mês</StyledH2>
            <AvatarList listData={monckListData}/>
            </CardComponent> 
          </Grid>

          <Grid item xs={12} md={7}>
            <CardComponent>
            <StyledH2 className="mb-1">Notícias Relevantes</StyledH2>
              <CustomTable 
           headers={mockTableData.headers}
           rows={mockTableData.rows} />
            </CardComponent> 
          </Grid>

            <Grid item xs={12} md={5}>
            <CardComponent>
            <StyledH2 className="mb-1">Valor de Vendas Por Mês</StyledH2>
            <CustomChart
         labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
          data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
           type='bar'/>
            </CardComponent> 
          </Grid>

       </Grid>
      




        <CardComponent  className='primary'>Card</CardComponent>
        <CardComponent>
          <AvatarList listData={monckListData}/>
        </CardComponent>
         <CardComponent>
          <CustomTable 
           headers={mockTableData.headers}
           rows={mockTableData.rows} />
        </CardComponent>

       <CardComponent>
        <CustomChart
         labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
          data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
           type='line'/>
       </CardComponent>
       </Container>

        </>
  )
}
export default Home