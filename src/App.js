import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

// * Imports all components needed from ./components export file.
import {
    Navbar,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
    Feed,
} from './components'

// * Normal React App
const App = () => (
    // * Browser Rounter sets up endpoints for the browser to use when decicing what page to show.
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}></Box>
        // * Places the navbar element on each page no matter the route
        <Navbar />
        // * Routes are used to provide to adress of the endpoints for different
        // * pages, they use an argument called path to define a path to the url and
        // * add dynamic rules using the colon. They also use an argument called
        // * element to decide what page to show based on the path. 
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
)

// * Exports normal react app
export default App
