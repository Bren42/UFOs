# UFOs

## Project Analysis
This analysis was designed to review UFO sighting information in a format that would be easy for anyone interested to view the data, thus HTML was the perfect choice as the medium for our data. However the data table we had acquired was so large that just leaving the data on the page as a plain static table was of little to no benefit. We needed a table that was dynamic so that users could make choices as to what data to see so that they could look for patterns. This required that we included Javascript so that we could interact with our data and give the users of the information the ability to specify items such as date, city, state, country, and shape.

To create a page where people can come and perform their own analsyis we were going to need a few things:
1. A baseline HTML index to layout the fundementals for our page.
2. A JavaScript application that will allow use to create functions and loops to display our data and make it interactive. 
3. A CSS application so that we can more easily create visual elements to make the page more asthetically pleasing and easier to read.
4. Proper folder structures to hold our data, programs, and images. 

![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/app_folder_struct.png)


## Results
Once the folder structure was completed we got to modifying the HTML, CSS and JS files so that we could more easily interact with the page.
We created the header, but Dana wanted to make sure we used an image that would be appropriate to the page, as well as the proper font. We added the requested file to the images folder and told CSS to apply this file to the jumbotron for diplaying the header. We also created a link at the top of the page to reset all prior filtering.

![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/header_w_filter%20refresh.png)

As you can see in the image above we have a nice image of space for our title and the UFO Sightings link at the top left of the page that resets any prior filters.


### Page Description

![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/page_paragraph.png)

Here we were able to place a paragraph descriptor as well as the summation of the purpose and function of this page which guides users to comb through the data we have provided them. We added a table border with bootstrap as to make the data more clearly delineated. Also we added a table hover feature to make it easier for users to find what it is they are selecting. In the image you will notice the first cell is a little darker as it is being hovered over with the mouse cursor.


### Sightings Dynamic Table

![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/table_w_shadow.png)

This is the core of our page, this table houses all the data we have made available for users to search through. As seen in the image we have taken the data and made five key areas searchable by the user. We decided that the date, location data(city,state,country), and object shape would be key fields to search by. 
  As you can see in the image though the table is too large to be of value until you start filtering the data. As we will show not only can you search by a singular value, we have setup the page to allow multi-criteria search returns.
  
 ![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/1_5_searcch.png)
 
 As seen above we started with a search of all events recorded on 1/5/2010. This returns 7 events. However what if our users wanted to only serach for events on this date and within the state of New Jersey?
 
 Well we built in multi-criteria filters, we did this by adding two functions in our JS application. We created a function that updates the filters (updateFilters) being selected to accept the input value and search that in the given data id. We then created a function called (filterTable) that then took the inputs and built the table around the filteredData variable. This allows us to take the data from the image above were we only filtered on the date, to the table below which dynamically is changed to show the user their updated inputs to show 1/5/2010 and the state of NJ.
 
 ![This is an image](https://github.com/Bren42/UFOs/blob/main/static/images/1_5_NJ.png)
 
 
 ## Summary
 
 Overall this is a nice and simple page that allows our users to quickly and easily look through data. However there are areas that could still be improved upon. A few features that would be ideal if we were to create an updated. 

1. The user can view data, but has no way to extract data in a simple format. Based on the fact that the data is a table we could add a button that exports the user selected data into a CSV file. 
2. The filter fields use placeholder values to more easily show the user the format to input requests. However the placeholders still show when other filters have been applied, please refer to the image with 1/5/10 selected as well as NJ, you can see the city is still showing Fresno as a placeholder, the data does not include this in the return but it could still cause confusion and should be updated to clear this out when not in use.

The page is ultimately useful but has room to grow and expand as more users come to visit the page.
  
  






