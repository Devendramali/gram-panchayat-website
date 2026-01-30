import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../api/api";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null); // for edit
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    depositAmount: "",
    expenditureAmount: "",
    balanceAmount: "",
    pdf: null,
  });
  const [loading, setLoading] = useState(false);

  // Fetch all reports
  const fetchReports = async () => {
    try {
      const res = await API.get("/expenditure/");
      setReports(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Open modal
  const openModal = (report = null) => {
    if (report) {
      // Edit mode
      setEditId(report._id);
      setFormData({
        title: report.title,
        year: report.year,
        depositAmount: report.depositAmount,
        expenditureAmount: report.expenditureAmount,
        balanceAmount: report.balanceAmount,
        pdf: null, // don't prefill file input
      });
    } else {
      // Add mode
      setEditId(null);
      setFormData({
        title: "",
        year: "",
        depositAmount: "",
        expenditureAmount: "",
        balanceAmount: "",
        pdf: null,
      });
    }
    setShowModal(true);
  };

  // Handle input change
  const handleChange = (e) => {
    if (e.target.name === "pdf") {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("year", formData.year);
      data.append("depositAmount", formData.depositAmount);
      data.append("expenditureAmount", formData.expenditureAmount);
      data.append("balanceAmount", formData.balanceAmount);
      if (formData.pdf) data.append("pdf", formData.pdf);

      if (editId) {
        // Update: call PUT endpoint
        await API.put(`/expenditure/${editId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Add new
        await API.post("/expenditure", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setShowModal(false);
      fetchReports();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete report
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this report?")) return;
    try {
      await API.delete(`/expenditure/${id}`);
      fetchReports();
    } catch (err) {
      console.error(err);
    }
  };

        const toggleStatus = async (id) => {
          try {
            await API.put(`/expenditure/toggle/${id}`);
                   fetchReports();
          } catch (err) {
            console.error(err);
          }
        };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="rounded-2xl border bg-white">
            {/* Header */}
            <div className="flex justify-between px-6 py-4">
              <h3 className="text-lg font-semibold">Expenditure Reports</h3>
              <button
                onClick={() => openModal()}
                className="px-4 py-2 bg-brand-500 text-white rounded-lg"
              >
                + Add Report
              </button>
            </div>

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header Row */}
                <div className="grid grid-cols-9 border-t px-6 py-3">
                  <div className="col-span-2 font-medium text-gray-500">Title</div>
                  <div className="col-span-1 font-medium text-gray-500">Year</div>
                  <div className="col-span-1 font-medium text-gray-500">Deposit</div>
                  <div className="col-span-1 font-medium text-gray-500">Expenditure</div>
                  <div className="col-span-1 font-medium text-gray-500">Balance</div>
                  <div className="col-span-1 font-medium text-gray-500">PDF</div>
                  <div className="col-span-1 font-medium text-gray-500">Status</div>
                  <div className="col-span-1 text-center font-medium text-gray-500">Action</div>
                </div>

                {/* Rows */}
                {reports.map((item) => (
                  <div key={item._id} className="grid grid-cols-9 border-t px-6 py-4 items-center">
                    <div className="col-span-2">{item.title}</div>
                    <div className="col-span-1">{item.year}</div>
                    <div className="col-span-1">{item.depositAmount}</div>
                    <div className="col-span-1">{item.expenditureAmount}</div>
                    <div className="col-span-1">{item.balanceAmount}</div>
                    <div className="col-span-1">
                      {item.pdf ? (
                        <a
                         href={`http://localhost:5000/${item.pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View PDF
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </div>
                    <div className="col-span-1">
                      <button
                        onClick={() => toggleStatus(item._id)}
                        className={`px-3 py-1 rounded text-white ${
                          item.isActive ? "bg-green-600" : "bg-gray-400"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </button>
                    </div>
                    <div className="col-span-1 flex justify-center gap-4">
                      <button
                        onClick={() => openModal(item)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {reports.length === 0 && (
                  <p className="text-center py-6 text-gray-400">No reports added</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              {editId ? "Edit Report" : "Add Expenditure Report"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year (e.g., 2024-2025)"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="depositAmount"
                type="number"
                value={formData.depositAmount}
                onChange={handleChange}
                placeholder="Deposit Amount"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="expenditureAmount"
                type="number"
                value={formData.expenditureAmount}
                onChange={handleChange}
                placeholder="Expenditure Amount"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="balanceAmount"
                type="number"
                value={formData.balanceAmount}
                onChange={handleChange}
                placeholder="Balance Amount"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="file"
                name="pdf"
                accept="application/pdf"
                onChange={handleChange}
                className="w-full"
              />

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-500 text-white rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
