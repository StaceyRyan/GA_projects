# README

##Technologies and resources
* Ruby version 2.6.4
* PostgreSQL
* HTML5
* CSS
* HTTParty

##What is this app?
* A place to store information about plants.
* It includes an image of both mature plant and seeds to help with identification in the field.
* Information about management of the plant in terms of cultivation and control where relevant.

##Using the app
* The homepage is: /users/index
* The homepage is open to the public. It includes only the common name and an image of the plant.
* Once logged in, a registered user can click on the plant name to access a page dedicated to displaying detailed information about the plant.
* Any user can add a new plant.
* Administration level users can edit the plant information.
* A user can delete themselves.

##Current issues
* User rights have to be set in the backend. They are not able to be set through a view.
* Editing a plant requires EVERY cell to have information entered. Any cell that does not have information entered manually will be updated as empty.
* The association between models is done through code (eg. user permission levels assigned in the permissions table dictates the ability for a user to access the edit function). It has not been completed via a join table.

##Future Updates
* User rights can be set through a view accessible to anyone with admin rights.
* Editing a plant will update only the cell that data is entered into.
* A map which shows the climate or planting zone the user is in.