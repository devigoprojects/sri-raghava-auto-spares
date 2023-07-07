const GOOGLE_API_FOLDER_ID = '1hfco2PwQMDTtTQxkM_hlq8IPDhJSyoJX';
const multer = require('multer');
const {google} = require('googleapis');
const { file } = require('googleapis/build/src/apis/file');
const fs = require('fs');


 const uploadFile = async(path)=>{
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile:'config/google_key.json',
            scopes:['https://www.googleapis.com/auth/drive']
        });
        const driveservice = google.drive({
            version:'v3',
            auth
        });
        const fileMetaData = {
            'name':Date.now(),
            'parents':[GOOGLE_API_FOLDER_ID]
        }
        const media = {
            mimeType: 'image/png',
            body:path
        }
       
        const response = await driveservice.files.create({
            resource:fileMetaData,
            media:media,
            fields:'id'
        });
       const fileUrl = `https://drive.google.com/uc?export=view&id=${response.data.id}`;
       console.log(fileUrl)
       return fileUrl;
      
    } catch (error) {
        console.log('upload file error',error)
    }
}

module.exports = uploadFile;