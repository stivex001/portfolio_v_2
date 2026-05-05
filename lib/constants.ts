// Resume — set NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID in .env.local
// The Google Doc (or Drive file) must be shared: "Anyone with the link → Viewer"
export const RESUME_DOWNLOAD_URL = `https://docs.google.com/document/d/${process.env.NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID}/export?format=pdf`;
