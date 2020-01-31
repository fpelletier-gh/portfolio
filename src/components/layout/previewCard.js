import React from "react"
import noteAppImgPreview from "../../images/note-app-img-preview.jpg"

const previewCard = () => {
  return (
    <>
      <div className="preview-card" />
      <img
        src={noteAppImgPreview}
        alt="Note App Preview Image"
        className="preview-card-image"
      />
      <h3 className="preview-card-title">Title</h3>
      <div className="preview-card-detail">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        blanditiis aliquam non earum molestiae minima deleniti dolorem doloribus
        quaerat illum?
      </div>
      <a href="#" className="primary-button preview-card-link">
        View site
      </a>
      <button className="primary-button preview-card-close-button">X</button>
    </>
  )
}

export default previewCard
