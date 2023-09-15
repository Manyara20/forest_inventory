import React from 'react';
import PropTypes from 'react';

const GroupedTable = ({ data, columnsNotToSplit, columnToSplit, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.items.map((item, itemIndex) => (
              <tr key={itemIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{item[column]}</td>
                ))}
              </tr>
            ))}
          </React.Fragment>
        ))}
        {ungroupedData.map((item, itemIndex) => (
          <tr key={itemIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GroupedTable;
