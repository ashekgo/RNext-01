import React from 'react'
import SearchBox from "./SearchBox";
import Table from "./Table";

export default function Body(props) {
  return (
    <>
        {/*Begin Students table */}
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
              <SearchBox/>
              <Table classNumber = {1}/>
              <Table classNumber = {2}/>
              <Table classNumber = {3}/>
            </div>
        </section>
    </>
  )
}
