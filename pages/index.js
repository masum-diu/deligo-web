import React from 'react'
import Layout from './components/Layout'
import { Stack, Typography, Grid, Box, Button } from '@mui/material'
function Home() {
  return (
    <Layout>
      <Stack direction={"column"} spacing={5} my={15} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography className="bold" fontSize={78} fontWeight={"bold"} textAlign={"center"} >Solving ride-hailing <br />
          challenges with Deligo</Typography>
        <Typography className="bold" fontSize={16} textAlign={"center"} fontWeight={400} >Discover how Deligo products automate ride-hailing operations and <br />
          business development processes.</Typography>
        <br />
        <br />
        <Grid container spacing={5} width={"100%"} >
          <Grid size={{lg:4}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #DC3173", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Grow user base</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={{lg:4}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #512DA8", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Get more loyal drivers</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={{lg:4}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #FFB300", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Simplify order management</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={{lg:4}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #D61058", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Find growth points to scale</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={{lg:4}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ borderBottom: "2px solid #00ACC1", paddingBottom: 3, }}>
              <Typography className="bold" fontSize={15} textAlign={"center"} fontWeight={900} >Expand customer base</Typography>
              <img src="../images/icons.svg" alt="" width={24} />
            </Stack>
          </Grid>
          <Grid size={{lg:4}}>
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
      <img src="../images/Firstbanner.png" alt="" width={"100%"} height={471} style={{ objectFit: 'cover', objectPosition: "center" }} />
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Deligo </span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Secondpartfisrtimage.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/secondpartsecondimage.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Discount and referral programs</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/secondpartthirdimage.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>

      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Deligo </span>get you <br /> more passengers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/thirdpart1.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/thirdpart2.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (45).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (46).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (47).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Your own branding</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              everyone will recognize your ride-hailing service</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px" }}>
            Try Customer app for free
          </Button>
          <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
            Explore all Customer app features and capabilities.</Typography>
        </Box>

      </Grid>
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={4} mt={10}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Get loyal drivers with  <br /><span style={{ color: "#512dab" }}>
          Driver app</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #512dab" }}>Let your drivers focus on the ride. Eliminate the
          need to communicate with operators, cut
          distractions, and motivate the drivers to work
          more efficiently.</Typography>
      </Stack>
      <img src="../images/baner2nd.png" alt="" width={"100%"} height={471} style={{ objectFit: 'cover' }} />

      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>Why will </span> drivers choose
        <br />
        your taxi service? </Typography>
      <Grid container spacing={5} width={"100%"} mt={7} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (49).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Effortless document registration</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              in any country</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (50).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Intuitive and driver-friendly interface</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              no learning required!</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (51).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Smart algorithm</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              to minimize driver’s idle time</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Familiar Uber-like features</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              real-time notifications, in-app chat, quick access
              buttons for frequent actions, etc.</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >High app performance</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              99.8% uptime, regular updates and app
              maintenance</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Secure communication</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              with customers</Typography>
          </Stack>
        </Grid>

      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>Why will you</span> get improved driver <br />
        performance with Deligo Driver app? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Easy and flexible order acceptance</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              back-to-back rides, preorders, instant orders.</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Transparent earnings and easy payouts</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              in-app Wallet, any payment method to accept
              payments, including local payment gateways</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Gamification features</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              for driver motivation</Typography>
          </Stack>
        </Grid>

      </Grid>
      <Typography fontWeight={700} fontSize={34} variant="body1" color="initial" mt={5} mb={3}><span style={{ color: "#bfbfbf" }}>How will Deligo </span> attract <br />
        more drivers? </Typography>
      <Grid container spacing={5} width={"100%"} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >ASO and marketing services</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              your Driver app will be in relevant ads on social
              media and Google and get on top of app stores</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Branded Driver app</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              local drivers will know and recognize your service</Typography>
          </Stack>
        </Grid>

        <Box sx={{ width: "100%", textAlign: "center" }} mt={5}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px" }}>
            Try Driver app for free
          </Button>
          <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
            Explore all Customer app features and capabilities.</Typography>
        </Box>

      </Grid>
      {/* simplify management */}
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={4} mt={10}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Simplify management
          <br />with  <span style={{ color: "#ffb300" }}>
            Operator app</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #ffb300" }}>Stop losing incoming orders and improve order
          distribution among drivers. Increase operators’
          performance and scale your business using
          Deligo taxi dispatch system.</Typography>
      </Stack>
      <img src="../images/ChatGPT Image Aug 28, 2025, 01_42_03 PM.png" alt="" width={"100%"} height={471} style={{ objectFit: "cover" }} />

      <Grid container spacing={5} width={"100%"} mt={7} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (52).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Manage them all in one place</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              accept orders via app, phone, website, and
              messengers</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (54).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Smart, Automatic Solution</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              automate order distribution and monitor drivers'
              workload</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (55).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Manual Mode</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              switch to manual control to handle issues
              directly</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width: "100%", textAlign: "center" }} mt={5}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px", px: 4, py: 2 }}>
            Try Operator app for free
          </Button>
          <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
            Explore all Operator app features and capabilities</Typography>
        </Box>
      </Grid>
      {/* end simplify managment */}

      {/* start my hub */}
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={4} mt={10}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Find growth points with<br /><span style={{ color: "#e91e63" }}>
          My hub</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #e91e63" }}>Use My hub admin panel to manage drivers,
          operators, and services, and dive into
          performance analytics to make data-driven
          decisions.</Typography>
      </Stack>
      <img src="../images/banner4.png" alt="" width={"100%"} />

      <Grid container spacing={5} width={"100%"} mt={7}>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/1.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Flexible admin panel</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              easily set up and customize driver plans and
              services</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/2.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Business performance metrics</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              understand your business metrics and see
              growth points</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/2.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Marketing campaigns</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              launch flexible marketing campaigns</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/4.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Set up fixed fare zones</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              fixed fare zones allow you to charge set prices for
              traveling between zones</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/5.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Partner with corporate clients</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              cooperate with companies that are willing to pay
              for the trips of their employees or customers</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/6.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Work from any device</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              access from your phone, tablet, laptop, or
              desktop computer</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px", px: 4, py: 2 }}>
            Try My hub for free
          </Button>
          <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
            Play around and test the features</Typography>
        </Box>
      </Grid>
      {/* end my hub */}

      {/* expand customer base start */}
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={4} mt={10}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Expand customer base<br />
          with<span style={{ color: "#00bcd4" }}>
            Web app</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #00bcd4" }}>Launch your Use the browser booking option to increase
          accessibility and partner with shopping malls,
          hotels, restaurants, hospitals, and airports.</Typography>
      </Stack>
      <img src="../images/7.png" alt="" width={"100%"} />

      <Grid container spacing={5} width={"100%"} mt={7} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/8.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >No installs required</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              let your customers book taxis directly from their
              browsers</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/9.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Partner with other businesses</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              partner with restaurants, bars, hotels, agencies,
              etc., and offer rides to their clients</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/10.png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Accessible for everyone</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              make your services available to Huawei, Windows
              Phone, and laptop users</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width: "100%", textAlign: "center" }} mt={5}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px", px: 4, py: 2 }}>
            Try Web app for free
          </Button>
          <Typography variant="body1" color="#808080" fontSize={11} mt={1} >
            See your business in action</Typography>
        </Box>
      </Grid>
      {/* end expand customer base */}

      {/* launch new business start */}
      <Stack direction={"row"} spacing={10} width={"100%"} justifyContent={"space-between"} alignItems={"center"} mb={4} mt={10}>
        <Typography variant="body1" maxWidth={"70%"} fontSize={51} fontWeight={800} color="initial">Launch  <span style={{ color: "#ff5544" }}>
          new business <br />
          verticals</span></Typography>
        <Typography variant="body1" maxWidth={"30%"} color="initial" sx={{ paddingBottom: 3, borderBottom: "11px solid #ff5544" }}>Launch your Use Deligo to add delivery or courier services to
          your taxi services and turn your app into Super
          App.</Typography>
      </Stack>
      <img src="../images/11.png" alt="" width={"100%"} height={471} style={{ objectFit: "cover", }} />

      <Grid container spacing={5} width={"100%"} mt={7} >
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Opportunity to double revenue</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              by offering multiple services from one app</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (49).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Better use of drivers' time</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              they can also work as couriers</Typography>
          </Stack>
        </Grid>
        <Grid size={{lg:4}}>
          <Stack direction={"column"} spacing={1} justifyContent={"space-between"} >
            <img src="../images/Untitled design (48).png" alt="" width={"100%"} />
            <Typography className="bold" fontSize={15} fontWeight={700} >Cheaper customer acquisition</Typography>
            <Typography variant="body1" color="#bfbfbf" fontSize={14} >
              offer multiple services within a single platform</Typography>
          </Stack>
        </Grid>
        <Box sx={{ width: "100%", textAlign: "center" }} my={5}>
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px", px: 4, py: 2 }}>
            Learn more about Super App
          </Button>

        </Box>
      </Grid>
      {/* end Launch new business */}
      <Typography variant="body1" textAlign={"center"} color="initial" fontWeight={800} fontSize={79}>Migrate to Deligo from <br />
        other taxi solutions</Typography>
      <Typography variant="body1" color="initial" fontSize={15} textAlign={"center"}>The Onde Team secures your data, customer and driver base, and the <br />
        continuity of your business performance.</Typography>
      <Grid container spacing={4} width={"100%"} mt={7} >
        <Grid size={{lg:4}}>
           <img src="../images/item.png" alt="" width={"100%"} />
        </Grid>
        <Grid size={{lg:2}}>
           <img src="../images/item (1).png" alt="" width={"100%"} />
        </Grid>
        <Grid size={{lg:2}}>
           <img src="../images/item (2).png" alt="" width={"100%"} />
        </Grid>
        <Grid size={{lg:2}}>
           <img src="../images/item (3).png" alt="" width={"100%"} />
        </Grid>
        <Grid size={{lg:2}}>
           <img src="../images/item (4).png" alt="" width={"100%"} />
        </Grid>
        <br />
         <img src="../images/Section (4).png" alt="" width={"100%"} />
       
         <Box sx={{ width: "100%", textAlign: "center" }} my={5}>
           <Typography variant="body1" textAlign={"center"} color="initial" fontWeight={800} fontSize={79}>Take a tour of the <br />
Onde platform </Typography> <br />
          <Button variant="contained" color="primary" sx={{ textTransform: "capitalize", fontWeight: 700, fontSize: 22, borderRadius: "8px", px: 4, py: 2 }}>
           Get a 14-day free trial
          </Button>
         
          </Box>

        </Grid>
    </Layout>

  )
}

export default Home