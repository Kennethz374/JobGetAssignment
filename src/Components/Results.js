import React from "react";
import Job from "./Job";

export default function Results({results}) {
    return (

      results.map(result => {
      return <Job 
      key={result.id}
      companyName={result.hiring_company.name} 
      location={result.location} 
      title={result.name} 
      min={result.salary_min}
      max={result.salary_max}
      name={result.name}
      posted={result.posted_time_friendly}
      snippet={result.snippet}
      />
    })



    )

}