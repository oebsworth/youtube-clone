import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

// * This is the profile picture that shows if it couldn't load the profile picture from the api.
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box
        // * The sx property is the styles of '@mui' components
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            marginTop,
        }}
    >
        // * Link is a react component that is a better link with dynamic "to"
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'fff',
                    height: '326px',
                    margin: 'auto',
                }}
            >
                <CardMedia
                    image={
                        channelDetail?.snippet?.thumbnails?.high?.url ||
                        demoProfilePicture
                    }
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        height: '180px',
                        width: '180px',
                        mb: 2,
                        border: '1px solid #e3e3e3',
                    }}
                />
                // * Typography is how '@mui' handles text, you can use the // *
                // * argument variant to specify what type of text you want (h1,
                // * subtitle1, body1)

                // * CheckCircle is the verified circle from social media
                <Typography variant="h6" sx={{ color: '#fff' }}>
                    {channelDetail?.snippet?.title}
                    
                    <CheckCircle
                        sx={{ fontSize: 14, color: 'gray', ml: '5px' }}
                    ></CheckCircle>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    // * parseInt().toLocaleString shows the number as a //
                    // * * full number with all the correct decimals, for
                    // * example. !toLocaleString = 1000. toLocaleString =
                    // * 1,000. This makes the number easier to read
                    <Typography>
                        
                        {parseInt(
                            channelDetail?.statistics?.subscriberCount
                        ).toLocaleString()}{' '}
                        Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)

// * This exports the ChannelCard to the exports file called ./index.js
export default ChannelCard
