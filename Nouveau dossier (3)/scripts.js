document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById('upload-button');
  const uploadFile = document.getElementById('upload-file');
  const fileList = document.getElementById('file-list');

  uploadButton.addEventListener('click', () => {
    if (uploadFile.files.length > 0) {
      const fileName = uploadFile.files[0].name;
      addFileToList(fileName);
      uploadFile.value = '';
    }
  });

  // Ajouter un gestionnaire d'événements pour les icônes "Download"
  const downloadIcons = document.querySelectorAll('.download-icon');
  downloadIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const fileName = fileList.children[index].firstChild.textContent;
      const url = `uploads/${fileName}`;

      const a = document
