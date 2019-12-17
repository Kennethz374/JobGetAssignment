import React from "react";
import { Icon, Pagination } from 'semantic-ui-react'

export default function Pages({page, count, onClick}) {

  return (
    <Pagination
    onClick={onClick}
    defaultActivePage={page}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    totalPages={count}
  />
  )
}