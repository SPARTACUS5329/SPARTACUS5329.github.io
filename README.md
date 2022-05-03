# E-Cell-Manager-App

This is the repository for the application for E-Cell Manager WMO 2022-2023 by Aditya K (CH21B005)

<h2>Content</h2>

This page consists of:

1. To-Do List
2. Notes

<h3>To-Do List</h3>

Items can be added and deleted in the list.

<h3>Notes</h3>

This is for typed notes (or any text) where font size can be increased or decreased.

<h1>Negatives</h1>

1. There is no database so after a simple reload, all of the data will be lost
2. Ideally there would be two different routes for To-Do List and Notes i.e. `/todo` and `/notes`
3. Because of no framework used, storing states is difficult
4. In the To-Do List, some characters are not allowed in the `id` of a div hence they become impossible to delete. This can be solved by using
