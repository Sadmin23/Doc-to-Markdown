from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from docling.document_converter import DocumentConverter
import os
from pathlib import Path
import uuid

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload directory
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/api/convert")
async def convert_pdf(file: UploadFile = File(...)):
    # Generate unique filename
    file_id = str(uuid.uuid4())
    pdf_path = UPLOAD_DIR / f"{file_id}.pdf"
    
    try:
        # Save uploaded PDF
        content = await file.read()
        with open(pdf_path, "wb") as f:
            f.write(content)

        # Convert PDF to Markdown
        converter = DocumentConverter()
        result = converter.convert(str(pdf_path))

        # Cleanup PDF
        pdf_path.unlink()

        # Return Markdown content
        return {"markdown": result.document.export_to_markdown()}
    
    except Exception as e:
        # Cleanup on error
        if pdf_path.exists():
            pdf_path.unlink()
        raise Exception(f"Conversion failed: {str(e)}")

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)