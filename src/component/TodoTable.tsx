import React, { useState } from "react";

export default function TodoTable() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="text-center">
            <div className="custom-control custom-checkbox mb-3">
              <input
                className="custom-control-input"
                type="checkbox"
                id="checkYn"
              />
              <label className="custom-control-label" htmlFor="checkYn" />
            </div>
          </td>
          <td>Andrew Mike</td>
          <td className="td-actions text-right">
            <button
              type="button"
              rel="tooltip"
              className="btn btn-danger btn-icon btn-sm "
              data-original-title=""
              title=""
            >
              <i className="ni ni-fat-remove pt-1" />
            </button>

            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
