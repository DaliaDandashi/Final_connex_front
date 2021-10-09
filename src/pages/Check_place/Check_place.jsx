import React from "react";
import './Check_place.css';
 export default function Check_place(){
     return (
         <from >
             <tr>
                 <td><label>Empty Space</label></td>
                 <td><imput  type="text" name="empty_space"/></td>
             </tr>   <tr>
                 <td><label>Total Space</label></td>
                 <td><imput  type="text" name="total_space"/></td>
             </tr>
             <button type="submit" >Save</button>
             <button type ="button">Edit </button>
             <button type="reset">Delete</button>

         </from>
     )
 }