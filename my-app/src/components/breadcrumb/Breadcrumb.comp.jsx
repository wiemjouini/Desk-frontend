/*import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const PageBreadcrumb = ({page}) => {
  return (
    
    <Breadcrumb>
    <Link to="/">
    <Breadcrumb.Item> Home </Breadcrumb.Item></Link>
   
    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  
  )*/


  //(a retenir) version avant finale 

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to:"/"}}>
        Home
      </Breadcrumb.Item>

      <Breadcrumb.Item active>
        {page}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};



