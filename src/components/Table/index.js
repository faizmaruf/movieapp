import React from "react";
import apiConfig from "../../api/apiConfig";

const Table = (props) => {
  const { items } = props;
  //   console.log(items, "items di table");
  const background = apiConfig.w500Image(items.still_path);
  return (
    <div className="text-white my-auto text-3xl container min-h-full relative z-20 mt-16 md:mt-24">
      <h2 className="text-head-h2 mb-4">List Episode </h2>
      <div className="flex flex-col min-h-full  w-full ">
        <table class="table-auto border-separate  border-spacing-0 md:border-spacing-3">
          <thead>
            <tr>
              <th className="border border-slate-500">No</th>
              <th className="border border-slate-500">Episode Name</th>
              <th className="border border-slate-500">Duration</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="text-sm md:text-xl">
                <td className="text-center">{index + 1}.</td>
                <td className="pl-4 md:pl-5">{item.name}</td>
                <td className="text-center">{item.runtime ? item.runtime : "0"} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
