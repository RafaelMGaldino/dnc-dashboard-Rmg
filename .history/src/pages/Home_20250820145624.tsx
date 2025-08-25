//components
import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'
import { Container, Grid, Box } from '@mui/material'
//hooks
import { useGet } from '@/hooks'
//types
import { CustomChartProps, HighligthsData } from '@/types'
// Utils
import { currencyConverter, highlightTextConverter } from '@/utils'


function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighligthsData[]>('sales/highlights')

  const {
    data: salesMonthData,
    loading: salesMonthLoading,
    error: salesMonthError,
  } = useGet<CustomChartProps>('sales/month')

   const {
    data: salesStarData,
    loading: salesStarLoading,
    error: salesStarError,
  } = useGet<StarsData>('sales/stars')

  const monckListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(4232.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
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
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container sx={{ width: '100%', gap: 4, alignItems: 'stretch' }}>
          {!highlightsError && (
            <>
              <Grid
                component="div"
                sx={{
                  width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center',justifyContent: 'center',}} >

                <CardComponent
                  className={highlightsLoading  ? 'skeleton-loading skeleton-loading-mh-1' : ''}
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Total de Vendas no Mês </StyledH2>
                      <StyledH3 size={40} lineHeight={40}>{currencyConverter(highlightsData[0].value)}</StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>

              <Grid
                component="div"
                sx={{width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center',justifyContent: 'center',}}
              >
                <CardComponent
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color='white'>Metas do Mês</StyledH2>
                      <StyledH3 className="mb-1" color='white' size={40} lineHeight={40}>{currencyConverter(highlightsData[1].value)} </StyledH3>
                      <StyledSpan color='white'>{highlightTextConverter(highlightsData[1].subtitle)}</StyledSpan>
                    </>
                  )}

                </CardComponent>
              </Grid>

              <Grid
                component="div"
                sx={{width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Leads contactados</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}> {highlightsData[2].value} </StyledH3>
                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}
          <Grid
            component="div"
            sx={{width: { xs: '100%', md: '65%' }, display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
              {
                !salesMonthError &&(
                 <CardComponent className={salesMonthLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                  
                  
                 {!salesMonthLoading && salesMonthData && (

                  <>
                    <StyledH2 className="mb-1">Valor de Vendas No Mês</StyledH2>
                    <CustomChart
                    labels={salesMonthData.labels.map((label) => label)}
                    data={salesMonthData.data.map((value) => value)}
                    type={salesMonthData.type}
                     />
                     </>
                    )}
            </CardComponent>
                )
              }
            
          </Grid>
          <Grid
            component="div"
            sx={{ width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center',justifyContent: 'center',
            }}
          >
            <CardComponent>
              {
                !
              }
              <StyledH2 className="mb-1">Maiores Vendendores no Mês</StyledH2>
              <AvatarList listData={monckListData} />
            </CardComponent>
          </Grid>

          <Grid
            component="div"
            sx={{width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <CardComponent>
              <StyledH2 className="mb-1">Notícias Relevantes</StyledH2>
              <CustomTable
                headers={mockTableData.headers}
                rows={mockTableData.rows}
              />
            </CardComponent>
          </Grid>

          <Grid
            component="div"
            sx={{whiteSpaceTrimidth: { xs: '100%', md: '65%' }, display: 'flex', alignItems: 'center',  justifyContent: 'center',
            }}
          >
            <CardComponent>
              <StyledH2 className="mb-1">Valor de Vendas Por Mês</StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 754.34, 532.32]}
                type="bar"
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
