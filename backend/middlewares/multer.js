const multer = require('multer');
const path = require('path');

// // Define storage location and filename format

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, 'uploads/')
  },
  filename:(req, file, cb)=>{
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

 // File filter to accept only certain types of files

const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif']
    if(allowedTypes.includes(file.mimetype)){
      cb(null, true)
    }else{
      cb(new Error('invalid file type'), false);
    }

}


const upload = multer({ storage, fileFilter });

module.exports = upload;
