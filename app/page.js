import React from 'react'

const page = () => {
  return (
    <>
       <div className=' m-4  flex justify-between' > {/* Header File */}
   
   <div className='flex gap-2 text-bold'>
     <img class = 'Logo' src= 'https://scontent.fdel25-5.fna.fbcdn.net/v/t39.30808-6/299365737_430313105789716_5472230776470548040_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NVK6ybf-migQ7kNvgGyfeFC&_nc_ht=scontent.fdel25-5.fna&oh=00_AYBrupZ9D2GTcTCaz_7qOXbOAvnstDUlBZk-xHjiRLpn6w&oe=665AB3D4' alt='LOGO PNG' />
     <h4 class = "title">Employees Activity Dashboard</h4>
   </div> 
     
    <div>
       <h1>March 30,2024</h1>
       <h6>09:36 AM</h6>
     </div>
    </div>

   <br/><br/>
   
     <div id='content' >
       
         <table  >
           <tr>
             <th className='rounded-ss'></th>
             <th>Rank</th>
             <th>Name</th>
             <th>Designation</th>
             <th>No. of hours worked</th>
             <th className='rounded-tr'>Changes</th>
           </tr>

           <tr class = "Dark">
             <td> <img class = 'winner-img' src='https://as1.ftcdn.net/v2/jpg/06/61/35/68/1000_F_661356819_cNLFWVZwR2CkzN4xvXWbWclVvvHLin6f.jpg'></img></td>
             <td className=' font-semibold'>1</td>
             <td className='font-semibold'>Rakesh Sharma</td>
             <td>UI/UX Designer</td>
             <td>7(42)</td>
             <td className='flex gap-2 '>
             <img class = 'up-arrow' src='https://w7.pngwing.com/pngs/822/27/png-transparent-green-triangle-illustration-penrose-triangle-equilateral-triangle-shape-green-triangle-angle-leaf-triangle-thumbnail.png' alt='down image '></img> 1.5hrs</td>
           </tr>
           
           
           <tr class = "light">
             <td> <img class='winner-img' src='https://as2.ftcdn.net/v2/jpg/07/77/15/13/1000_F_777151376_qfG19khXiWspfmGhsIGCBLVrMF0wd2g0.jpg'></img></td>
             <td className='font-semibold'>2</td>
             <td className='font-semibold'>Ankita Thakur</td>
             <td>Hr Recruiter</td>
             <td>7(41)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "Dark">
             <td> <img class='winner-img' src='https://as2.ftcdn.net/v2/jpg/07/77/15/13/1000_F_777151366_wWsT2JgfYfHGdwIFqi5T3AFoq2Ern8GZ.jpg'></img></td>
             <td className='font-semibold'>3</td>
             <td className='font-semibold'>Sarah Yadav</td>
             <td>Product Manager</td>
             <td>7(40)</td>
             <td className='flex gap-2 '>
             <img class = 'up-arrow' src='https://w7.pngwing.com/pngs/822/27/png-transparent-green-triangle-illustration-penrose-triangle-equilateral-triangle-shape-green-triangle-angle-leaf-triangle-thumbnail.png' alt='down image '></img> 1.5hrs</td>
           </tr>
           
           <tr class = "light">
             <td > </td>
             <td className='font-semibold'>4</td>
             <td className='font-semibold'>Harsha Shivhare</td>
             <td>Designer</td>
             <td>7(37)</td>
             <td className='flex gap-2 '>
             <img class = 'up-arrow' src='https://w7.pngwing.com/pngs/822/27/png-transparent-green-triangle-illustration-penrose-triangle-equilateral-triangle-shape-green-triangle-angle-leaf-triangle-thumbnail.png' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "Dark">
             <td> </td>
             <td className='font-semibold'>5</td>
             <td className='font-semibold'> Vanhi Rai</td>
             <td>Video Editor</td>
             <td>7(37)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "light">
             <td></td>
             <td className='font-semibold'>6</td>
             <td className='font-semibold'>Bhanu Sharma</td>
             <td>Business Analyst</td>
             <td>7(32)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "Dark">
             <td> </td>
             <td className='font-semibold'>8</td>
             <td className='font-semibold'>Sunil Yadav</td>
             <td>Developer</td>
             <td>7(24)</td>
             <td className='flex gap-2 '>
             <img class = 'up-arrow' src='https://w7.pngwing.com/pngs/822/27/png-transparent-green-triangle-illustration-penrose-triangle-equilateral-triangle-shape-green-triangle-angle-leaf-triangle-thumbnail.png' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "light">
             <td> </td>
             <td className='font-semibold'>9</td>
             <td className='font-semibold'>Akash Roy</td>
             <td>Business Analyst</td>
             <td>7(21)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "Dark">
             <td> </td>
             <td className='font-semibold'>10</td>
             <td className='font-semibold'>Rohit Soni</td>
             <td>Developer</td>
             <td>7(20)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

           <tr class = "light">
             <td> </td>
             <td className='font-semibold' >11</td>
             <td className='font-semibold'>Suraj Chauhan</td>
             <td>Developer</td>
             <td>7(18)</td>
             <td className='flex gap-2 '>
             <img class = 'down-arrow' src='https://banner2.cleanpng.com/20180423/qzq/kisspng-red-triangle-symbol-logo-united-states-clip-art-inverted-triangle-5addbebb421ec0.4958662915244817232708.jpg' alt='down image '></img> 1.5hrs</td>
           </tr>

         </table>
       

      <img class = 'EOM' src='https://files.onegiantleap.com/files/2023-04/Image%20%2828%29.png?VersionId=sHg_C_p22E0DgovN6jtaaoaUtZ_E2AvG' alt='Employee of the month Picture '/> 
       
       
     </div>



    </>
  )
}

export default page