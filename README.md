# Introduction
This project is a Youtube clone that was made using the MERN stack, rapid api and material ui. It consists of four different pages. You have the feed, the search page, the channel page and the video page. These each include different React components.

# Feed
![image](https://user-images.githubusercontent.com/45319805/223206161-6d2798b5-d065-463e-a7bb-4c8d93e9f248.png)
Firstly you can see the nav bar includes a logo and a search bar. The logo is just a basic svg and the search bar is an input field that takes your search query and sends it to the search page.
Then you have the catagories side bar, which allows you to select from a list of seventeen catagories. Each of these will control the video feed.
Finally you have the main video feed that fetches the currently selected catagory.

# Search Page
![image](https://user-images.githubusercontent.com/45319805/223208850-977a802c-bdb4-4e64-ae58-cb3f378eb000.png)
This shows the search page. It consists of the navbar, the title with the query that you searched and a feed of videos linked to that search term.

# Channel Page
![image](https://user-images.githubusercontent.com/45319805/223209213-4d463b9f-8740-4832-b79f-8bbc302d24dd.png)
This is the channel page. It fetches the channel that you are currently looking at and a video feed relative to the channel you are on.

# Video Page
![image](https://user-images.githubusercontent.com/45319805/223210083-8694d9bc-1ef2-4a27-9f46-2872f94cb7b3.png)
Finally you have the video page. This fetches the video that you are currently watching and fetches the title, channel, views and likes of the video.
Then you have a related feed at the side of the video for videos that are similar to the one you are watching.
