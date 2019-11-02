# README

* Ruby version 2.6.4

##What is this app?
* A place to store information about plants.  It includes an image to help with identification of seeds and mature plants as well as information about management.

##Using the app
* The index page is open to the public. It includes only the common name and an image of the plant.
* Once logged in, a registered user can click on the plant name to access a page dedicated to displaying detailed information about the plant.
* Any user can add a new plant.
* Administration level users can edit the plant information.

##Current issues
* User rights have to be set in the backend. They are not able to be set through a view.
* Editing a plant requires EVERY cell to have information entered. Any cell that does not have information entered manually will be updated as empty.

##Future Updates
* User rights can be set through a view accessible to anyone with admin rights.
* Editing a plant will update only the cell that data is entered into.