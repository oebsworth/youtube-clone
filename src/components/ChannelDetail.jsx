import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// * This imports the function from the fetchFromAPI script
import { fetchFromAPI } from '../utils/fetchFromAPI'

// * This uses the exports file to get the Videos and ChannelCard from the components
import { Videos, ChannelCard } from './'

const ChannelDetail = () => {
    // * This creates a variable called channelDetail that is initialized with null. it then creates a setter variable called setChannelDetail
    const [channelDetail, setChannelDetail] = useState(null)
    // * This is the same as the above but the variable is called videos and the setter is called setVideos
    const [videos, setVideos] = useState([])

    // * This gets the id of the channel from the url of the route
    const { id } = useParams()

    // ? Not 100% sure how the use effect works, ik it sets the values of the setter components but I am guessing thats not all it is used for.
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        )

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        )
    }, [id])

    // * Return is what shows in the actual html of the document
    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    // * Style is what you use for non '@mui' elements
                    style={{
                        background:
                            'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 75%)',
                        zIndex: 10,
                        height: '300px',
                    }}
                />
                <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
            </Box>
            // * You can also write out the individual styles instead of using
            // * the sx argument
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                // * This creates the videos using the videos from the useState
                // * variable 
                // ? Do more research on the useEffect and useState,
                // ? maybe the useParams aswell
                <Videos videos={videos}></Videos>
            </Box>
        </Box>
    )
}

export default ChannelDetail
