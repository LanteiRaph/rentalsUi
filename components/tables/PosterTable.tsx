import { useState } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';

export interface IPosterTable {
  tableData: { [key: string]: {}[] };
}

const PosterTable = ({ tableData }: IPosterTable) => {
  //Open state of the table for for nextsed data show.
  const [isOpen, setIsOpen] = useState<boolean>();
  //Row header values
  const rowHeaders = () => {
    //Exract the row headers from the invoices
    const headers = Object.keys(tableData['Invoices'][0]);
    return headers;
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/**Table Caption: Brief description of the poster table */}
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Rental Invoice
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of invoices before sending. An Invoice is a record
            showing tenants account details
          </p>
        </caption>
        {/**Table Head, Table columns head values */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6"></th>
            {rowHeaders().map((value, key) => {
              return (
                <th scope="col" className="py-3 px-6" key={key}>
                  {value}
                </th>
              );
            })}
          </tr>
        </thead>
        {/**Table Body: Interactive data */}
        <tbody>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <td className="py-4 px-6 text-right">
              <BsArrowDownShort className="w-7 h-7 " />
            </td>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
          </tr>
          {isOpen && (
            <table className="table table-bordered table-condensed table-sm"></table>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PosterTable;
