import { useState, useEffect } from "react";
import API from "../../api/api";

export default function AdministrativeOfficers() {
  const [officers, setOfficers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    post: "",
    contact: "",
    image: null,
  });

  // Load Officers
  const fetchOfficers = async () => {
    try {
      const res = await API.get("/officers");
      setOfficers(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchOfficers();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add or Update Officer
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("post", formData.post);
      data.append("contact", formData.contact);
      if (formData.image) data.append("image", formData.image);

      if (editId) {
        await API.put(`/officers/${editId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await API.post("/officers", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchOfficers();
      setFormData({ name: "", post: "", contact: "", image: null });
      setEditId(null);
      setShowModal(false);

    } catch (err) {
      alert("Error saving officer");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Edit Officer
  const handleEdit = (officer) => {
    setFormData({
      name: officer.name,
      post: officer.post,
      contact: officer.contact,
      image: null,
    });
    setEditId(officer._id);
    setShowModal(true);
  };

  // Delete Officer
  const handleDelete = async (id) => {
    if (!confirm("Delete this officer?")) return;
    try {
      await API.delete(`/officers/${id}`);
      fetchOfficers();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

    // TOGGLE ACTIVE
    const toggleStatus = async (id) => {
      try {
        await API.put(`/officers/toggle/${id}`);
      fetchOfficers();
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="rounded-2xl border border-gray-200 bg-white">
            {/* Header */}
            <div className="flex justify-between px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Administrative Officers
              </h3>

              <button
                onClick={() => {
                  setShowModal(true);
                  setEditId(null);
                  setFormData({ name: "", post: "", contact: "", image: null });
                }}
                className="px-4 py-2 bg-brand-500 text-white rounded-lg"
              >
                + Add Officer
              </button>
            </div>

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Header */}
                <div className="grid grid-cols-11 border-t px-6 py-3">
                  <div className="col-span-3 font-medium text-gray-500">Name</div>
                  <div className="col-span-2 font-medium text-gray-500">Post</div>
                  <div className="col-span-2 font-medium text-gray-500">Contact</div>
                    <div className="col-span-1 font-medium text-gray-500">Status</div>
                  <div className="col-span-3 font-medium text-gray-500 text-center">Action</div>
                </div>

                {/* Rows */}
                {officers.map((item) => (
                  <div key={item._id} className="grid grid-cols-11 border-t px-6 py-4 items-center">
                    <div className="col-span-3 flex items-center gap-2">
                      {item.image && <img  src={`https://palsun-backend.onrender.com${item.image}`} alt="" className="w-10 h-10 rounded-full object-cover" />}
                      <span>{item.name}</span>
                    </div>
                    <div className="col-span-2">{item.post}</div>
                    <div className="col-span-2">{item.contact}</div>
                      <td className="col-span-1">
                      <button
                        onClick={() => toggleStatus(item._id)}
                        className={`px-3 py-1 rounded text-white ${
                          item.isActive ? "bg-green-600" : "bg-gray-400"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <div className="col-span-3 flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(item)}
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

                {officers.length === 0 && (
                  <p className="text-center py-6 text-gray-400">
                    No officers added yet
                  </p>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              {editId ? "Edit Officer" : "Add Officer"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Officer Name"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="post"
                value={formData.post}
                onChange={handleChange}
                placeholder="Post"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
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
