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
import { CustomChartProps, HighligthsData, StarsData, NewsData} from '@/types'
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
  } = useGet<StarsData[]>('sales/stars')

  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')


  return (
    <>
      <Header />
      <Container className='mb-2'maxWidth="lg">
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
                      <StyledH3  color='white' size={40} lineHeight={40}>{currencyConverter(highlightsData[1].value)} </StyledH3>
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
                      <StyledH3  size={40} lineHeight={40}> {highlightsData[2].value} </StyledH3>
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
          <Grid component="div"sx={{ width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
             {
                !salesStarError && (
              <CardComponent className={salesMonthLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                {
                  !salesStarLoading && salesStarData && (
                    <>
                      <StyledH2 className="mb-1">Estrelas do Mês</StyledH2>
                      <AvatarList listData={salesStarData.map((star) => ({
                        avatar: '/dnc-avatar.svg',
                        name: star.name,
                        subtitle: currencyConverter(star.value),
                      }))} />
                    </>
                  )
                }
              </CardComponent>
                  
                )
              }
          </Grid>
          <Grid component="div"sx={{width: { xs: '100%', md: '30%' },display: 'flex', alignItems: 'center', justifyContent: 'center',}} >
            {
              !newsError && (
                 <CardComponent className={newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                  {
                    !newsLoading && newsData && (
                      <>
                      <StyledH2 className="mb-2">Notícias Relevantes</StyledH2>
                      <CustomTable
                      headers={['Título', 'Horário']}
                     rows={newsData.map((news)=> [
                        <a
                         className='ellipsis ellipsis-sm mb-1'
                         href={news.link} target="_blank" >
                        {news.title}
                        </a>,

                        <a
                         href={news.link}
                         target="_blank" >
                         {news.date}
                         </a>
                       ])}
                      />
                      </>
                    )
                  }
                
                </CardComponent>
              )}
            
            
          </Grid>

          <Grid component="div"sx={{width: { xs: '100%', md: '65%' }, display: 'flex', alignItems: 'center',  justifyContent: 'center',}}>
            {
              !salesYearError && (
                <CardComponent className={salesYearLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                  
                  
                 {!salesYearLoading && salesYearData && (

                  <>
                    <StyledH2 className="mb-">Valor de Vendas Por Mês</StyledH2>
                    <CustomChart
                    labels={salesYearData.labels.map((label) => label)}
                    data={salesYearData.data.map((data) => data)}
                    type={salesYearData.type}
                     />
                  </>
                    )}
                </CardComponent>
                )
              }
          
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
