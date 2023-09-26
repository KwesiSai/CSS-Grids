<h1>Introduction to CSS Grids</h1>
 
 **Overview:**
 <br>
Grids are two dimensional containers, unlike flexboxes. flexboxes are one dimensional. 






 **Common Terms and Terminologies**
 - Gutter: Gutter is the space between grid items in the grid
 - Grid Item: The grid container contains grid items.
 - Grid Line: is either a vertical or horizontal line that makes up the structure of the grid.
 - Grid cell: The smallest unit on a grid is reffered to as a Grid cell.
 - Rows: The grid row is the horizontal track of the grid.
 - Columns: The grid column is the vertical track of the grid.
 - Nested Grids: Self explanatory right?Grids in a grid. yeah grids in a grid are basically nested grids. 

 **Methods**
 Some methods in css grids you will need:
 - Repeat(): This method in grid is used in creating multiple columns, ie: splitting the grid container into columns according to the size or fraction specified.
 - Minmax(): Used in conjunction with the grid-auto-rows or columns. Used to define the minumum height and maximum height of rows in grids, could probably be used to define width for columns as well, we'll see later.
 - Justify Items: justify items seems self explanatory but yeah the point is to justify items in the grid, that is the grid elements, child elements yea. It justifies them vertically, yea like a y-axis sort of thing, find out more!
 - Aligh Items: Basically the x-axis equivalent of justify item.
 - Justify Self: So justify item does for all items in the parent element, you are styling the parent elements but in the case of justify-self, you are styling just one child element in the grid, same properties as justify items but just on one child element this time around.
 - Aligh Self: I'm sure you get it, don't you? yea you do smartie
 - Grid-template-columns: This method allows to specify the number and sizing of columns in the grid container, within this method the repeat method could be used as a parameter An example of the grid-template-columns is (1fr, 1fr, 1fr);
 or repeat(3, 1fr). This will create 3 columns of equal sizes. Normally rows are created by default, according to the number of elements in the grid.
 - Grid-auto-rows: This method is used to define the size of tracks in the grid container, specifically the height. 
 - Line-Positioning: The function isn't line positioning. However the term line positing refers to the methods used to basically tell where a grid item starts and where it ends in the grid. Using the grid-column-start and grid-column-end (and the row equivalent in the same format), you can decide how much space (grid track) should be covered by a grid item.In other words: how much a grid item spans across a row or column. There are shortcuts to this. I am not going to say everything here but yea just a guide, do your research! It's not very much different tho. just grid-column or grid-row.
 - Grid Template Areas: Grid areas is a variation of grid-column and grid-row, it performs the same function as those. You basically specify the areas(tracks) according to the number of columns and rows defined in your grid. So for an element you assign those areas to them. There is the concept of naming grids which is a little confusing for me but let us see...

 **Keynotes**
 - !! Before you can apply grid to a div or container you first have to set the display of the container to grid in your style. Just as it is done in the case of flexboxes.
 - Use fractions instead of percentages, will be convenient to use and you can better deal with annoying resizing that comes with adjusting margins and paddings.




