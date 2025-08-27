import React from 'react'
import Layout from './components/Layout'
import { Stack, Typography, Grid, Box, Button } from '@mui/material'
function Home() {
  return (
    <Layout>
      <Stack direction={"column"} spacing={5} my={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography className="bold" fontSize={78} fontWeight={"bold"} textAlign={"center"} >Solving ride-hailing <br />
          challenges with Onde</Typography>
        <Typography className="bold" fontSize={16} textAlign={"center"} fontWeight={400} >Discover how Onde products automate ride-hailing operations and <br />
          business development processes.</Typography>
        <br />
        <br />
        <Grid container spacing={5} width={"100%"} >
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #DC3173", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Grow user base</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #512DA8", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Get more loyal drivers</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #FFB300", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Simplify order management</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #D61058", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Find growth points to scale</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #00ACC1", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Expand customer base</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #F44433", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Launch new business verticals</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>


        </Grid>
      </Stack>

      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Grow user base with  <br /><span style={{ color: "#dc3173" }}>
          Customer app</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #dc3173" }}>Launch your branded Customer app for iOS and
          Android to attract and retain more passengers
          with an easy booking process, recognizable
          branding, and familiar features.</Typography>
      </Stack>
      <img src="../images/baner.svg" alt="" width={"100%"} />
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Onde</span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>

      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Onde</span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width:"100%",textAlign:"center"}}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize" }}>
            Try Customer app for free
          </Button>
           <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
              Explore all Customer app features and capabilities.</Typography>
        </Box>

      </Grid>
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Grow user base with  <br /><span style={{ color: "#dc3173" }}>
          Customer app</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #dc3173" }}>Launch your branded Customer app for iOS and
          Android to attract and retain more passengers
          with an easy booking process, recognizable
          branding, and familiar features.</Typography>
      </Stack>
      <img src="../images/baner.svg" alt="" width={"100%"} />
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Onde</span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>

      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Onde</span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
       
      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Onde</span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/baner.svg" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
       
        <Box sx={{ width:"100%",textAlign:"center"}}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize" }}>
            Try Customer app for free
          </Button>
           <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
              Explore all Customer app features and capabilities.</Typography>
        </Box>

      </Grid>
    </Layout>
  )
}

export default Home