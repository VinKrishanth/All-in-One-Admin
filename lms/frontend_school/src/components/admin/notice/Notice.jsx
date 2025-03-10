import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createNotice } from "../../../api/notice/noticeApi.js";

export default function Notice() {
  const [formData, setFormData] = useState({
    linkType: "attachment",
    status: "approved",
    dateTime: "",
    type: "Common",
    title: "",
    notice: "",
    url: "",
    attachment: null,
  });

  const { linkType, status, dateTime, type, title, notice, url, attachment } = formData;

  const handleReset = () => {
    setFormData({
      linkType: "attachment",
      status: "approved",
      dateTime: "",
      type: "Common",
      title: "",
      notice: "",
      url: "",
      attachment: null,
    });
    // Reset the file input field manually
    document.getElementById("attachmentInput").value = "";
    toast.info("Form has been reset!");
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!title || !notice || !dateTime) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Validate URL if linkType is 'url'
    if (linkType === "url" && !url) {
      toast.error("Please provide a valid URL!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("notice", notice);
    formDataToSend.append("linkType", linkType);
    formDataToSend.append("url", url);
    formDataToSend.append("status", status);
    formDataToSend.append("dateTime", dateTime);
    formDataToSend.append("type", type);

    if (attachment) {
      formDataToSend.append("attachment", attachment);
    }

    // Log FormData contents (Optional)
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createNotice(formDataToSend);
      if (response.success) {
        toast.success("Notice added successfully!");
        handleReset();
      } else {
        toast.error("Failed to add notice!");
      }
    } catch (error) {
      toast.error("An error occurred while adding the notice!");
    }
  };

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];

    // Validate file size (10MB limit)
    if (file && file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB!");
      setFormData((prevData) => ({ ...prevData, attachment: null }));
      return;
    }

    if (file) {
      setFormData((prevData) => ({ ...prevData, attachment: file }));
      console.log('Attachment set:', file);
    } else {
      setFormData((prevData) => ({ ...prevData, attachment: null }));
    }
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center pt-16 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">Add New Notice</h1>
        </div>
        <form onSubmit={handleAdd}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <label htmlFor="dateTime" className="block text-gray-700">Select Date and Time <span className="text-red-500">*</span></label>
                <input
                  id="dateTime"
                  type="datetime-local"
                  className="w-full mt-2 p-2 border rounded"
                  value={dateTime}
                  onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700">Select Type</label>
                <select
                  id="type"
                  className="w-full mt-2 p-2 border rounded"
                  value={type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option>Common</option>
                  <option>Special</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Link To:</label>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    name="link"
                    id="attachment"
                    className="mr-2"
                    checked={linkType === "attachment"}
                    onChange={() => setFormData({ ...formData, linkType: "attachment" })}
                  />
                  <label htmlFor="attachment" className="mr-4">Attachment</label>
                  <input
                    type="radio"
                    name="link"
                    id="url"
                    className="mr-2"
                    checked={linkType === "url"}
                    onChange={() => setFormData({ ...formData, linkType: "url" })}
                  />
                  <label htmlFor="url">URL</label>
                </div>
              </div>
              {linkType === "url" && (
                <div className="mb-4">
                  <label htmlFor="url" className="block text-gray-700">Notice URL</label>
                  <input
                    id="url"
                    type="text"
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Enter Notice URL"
                    value={url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>
              )}
              {linkType === "attachment" && (
                <div className="mb-4">
                  <label className="block text-gray-700">Upload Attachment</label>
                  <input
                    type="file"
                    className="w-full mt-2 p-2 border rounded"
                    id="attachmentInput"
                    onChange={handleFileChange}
                  />
                </div>
              )}
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Enter Title <span className="text-red-500">*</span></label>
                <input
                  id="title"
                  type="text"
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="notice" className="block text-gray-700">Enter Notice <span className="text-red-500">*</span></label>
                <textarea
                  id="notice"
                  className="w-full mt-2 p-2 border rounded"
                  rows="5"
                  placeholder="Enter Notice"
                  value={notice}
                  onChange={(e) => setFormData({ ...formData, notice: e.target.value })}
                  aria-required="true"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status:</label>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    name="status"
                    id="approved"
                    className="mr-2"
                    checked={status === "approved"}
                    onChange={() => setFormData({ ...formData, status: "approved" })}
                  />
                  <label htmlFor="approved" className="mr-4">Approved</label>
                  <input
                    type="radio"
                    name="status"
                    id="unapproved"
                    className="mr-2"
                    checked={status === "unapproved"}
                    onChange={() => setFormData({ ...formData, status: "unapproved" })}
                  />
                  <label htmlFor="unapproved">Unapproved</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="bg-yellow-500 text-white py-2 px-6 rounded-full mr-4"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-6 rounded-full"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
