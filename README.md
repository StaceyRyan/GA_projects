# Projects-Completed-While-at-GA
Storing projects completed at GA

### Robot Project 
- Technologies used: Javascript, HTML, CSS. 
- Supported by components of bootstrap and jQuery.
- Uses widgets to store information retrieved from API requests to a weather database and movie database.

### Plant Leixcon
- Technologies used: Ruby on Rails, Postgresql, javascript, HTML, CSS

# MERN Application
- Technologies used MonogDB/Mongoose, Express, React, Node.js
- Supported with Bootstrap

### Installation instructions
- Download the two directories: bmi_monitor_api and bmi_monitor_front
- You will need to set your environment variables for the  bmi_monitor_api to:
#### EXPRESS_PORT=3000
#### EXPRESS_HOST=localhost
#### MONGO_DATABASE=tracker
- Via terminal (or your preferred text editing software such as Visual Studio), load the node packages via npm install for each directory (bmi_tracker_front and bmi_tracker_api).
- For the bmi_tracker_api, to activate the local host, execute <node ./src/server.js> or, if you are more comfortable with the nodemon package, run <npx nodemon ./src/server.js>. 
-Currently, the API calls in bmi_monitor_front are all hard coded to localhost:3000 so the bmi_monitor_api must be run first to ensure it is on localhost:3000. Confirm that this part of the app has activated on the localserver:3000.
- Launch bmi_monitor_front and go to the root page '/'.
- bmi_tracker_front is coded to run on localserver:3003 to ensure 3000 is left open for the node.js server.

### Issues Encountered
- To ensure DRY code, it would be preferable to have one form used for both adding new data and editing existing data. At this stage, I did not have the skill to load the previous data into the form if I used one form for both. The future version will use one form.
- The date is a string. I had hoped to user moment.js to manipulate a date and store it as an ISO number which could then be used to call documents for editing. This did not work to plan. It will be added to a future version.
- Originally, I had planned for the edit feature to allow the user to type in a date they wanted to access/delete. Currently the date is a unique but it is a string, not a proper date which leads to problems when users enter non-conventional dates. In future, this will be changed so edits will be based on the unique ID assigned by Mongo.
- After each update, there is a new API call. In future version, this update the child will push the update to the parent instead of re-calling the API.

### Future Features
- A graph to display the previous data instead of a list.
- The BMI will be calculated from user input, not entered manually.
- This will form part of a larger heatlh app aimed at exercise physiologists/physiotherapists. This will be one component but not the sole focus of the app.
