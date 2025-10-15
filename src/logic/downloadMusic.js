export async function downloadmusic(url, title){
      try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${title}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // cleanup
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
     return false
  }
}