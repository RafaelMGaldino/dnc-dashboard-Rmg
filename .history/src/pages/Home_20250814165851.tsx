//components
import { AvatarList, CardComponent, CustomChart, CustomTable, Header, StyledH2, StyledH3, StyledSpan } from "@/components";
import { Container, Grid, Box } from '@mui/material'
//hooks
import { useGet } from "@/hooks";
//types
import { HighligthsData, StarsData, NewsData } from "@/types";

// Utils
import { currencyConverter } from "@/utils";

function Home() {
  const { data: highlightsData,
          loading: highlightsLoading,
          error:highlightsError} = useGet<HighligthsData[]>('sales/highlights');


  const monckListData = [
    { avatar: '/dnc-avatar.svg', name: 'Nome Sobrenome 1', subtitle: currencyConverter(1234.54) },
    { avatar: '/dnc-avatar.svg', name: 'Nome Sobrenome 2', subtitle: currencyConverter(4232.54) },
    { avatar: '/dnc-avatar.svg', name: 'Nome Sobrenome 3', subtitle: currencyConverter(3242.54) },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [<span>Nome 1</span>, <span>nome1@email.com</span>, <button>ACTION</button>],
      [<span>Nome 2</span>, <span>nome2@email.com</span>, <button>ACTION</button>],
      [<span>Nome 3</span>, <span>nome3@email.com</span>, <button>ACTION</button>],
    ]
  }

  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Grid container sx={{ width: '100%', gap: 4 }}>
          {!highlightsError && (
              <>
              <Grid component="div" sx={{ width: { xs: '100%', md: '30%' } }}>
            <CardComponent className={
              highlightsLoading
               ? 'skeleton-loading skeleton-loading-'
                : ''}>

                  {
                   !highlightsLoading && highlightsData &&(
                    <>
                     <StyledH2 className="mb-1">Total de Vendas no Mês</StyledH2>
                      <StyledH3 className="mb-1">{currencyConverter(highlightsData[0].value)}</StyledH3>
                      <StyledSpan className="mb-1">{(highlightsData[0].subtitle)}</StyledSpan>
                    </>
                   )}
            </CardComponent>
          </Grid>

          <Grid component="div" sx={{ width: { xs: '100%', md: '30%' } }}>
            <CardComponent className={ 
              highlightsData ? highlightsData[1].subtitle
            }>
                  {!highlightsLoading && highlightsData &&(
                    <>
                     <StyledH2 className="mb-1">Metas do Mês</StyledH2>
                      <StyledH3>{currencyConverter(highlightsData[0].value)}</StyledH3>
                      <StyledSpan>{(highlightsData[0].subtitle)}</StyledSpan>
                    </>
                   )}
            </CardComponent>
          </Grid>

          <Grid component="div" sx={{ width: { xs: '100%', md: '30%' } }}>
            <CardComponent className={highlightsLoading ? 'skeleton-loading skeleton-loading-' : ''}>
              <StyledH2 className="mb-1">Leads contactados</StyledH2>
            </CardComponent>
          </Grid>
              </>
            )
          }
          

          {/* Charts e listas */}
          <Grid component="div" sx={{ width: { xs: '100%', md: '65%' } }}>
            <CardComponent>
              <StyledH2 className="mb-1">Valor de Vendas No Mês</StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
                type='line'
              />
            </CardComponent>
          </Grid>

          <Grid component="div" sx={{ width: { xs: '100%', md: '30%' } }}>
            <CardComponent>
              <StyledH2 className="mb-1">Maiores Vendendores no Mês</StyledH2>
              <AvatarList listData={monckListData} />
            </CardComponent>
          </Grid>

          <Grid component="div" sx={{ width: { xs: '100%', md: '30%' } }}>
            <CardComponent>
              <StyledH2 className="mb-1">Notícias Relevantes</StyledH2>
              <CustomTable headers={mockTableData.headers} rows={mockTableData.rows} />
            </CardComponent>
          </Grid>

          <Grid component="div" sx={{ width: { xs: '100%', md: '65%' } }}>
            <CardComponent>
              <StyledH2 className="mb-1">Valor de Vendas Por Mês</StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
                type='bar'
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
