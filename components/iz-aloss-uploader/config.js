var config = {
  //aliyun OSS config
  // uploadImageUrl: ' https://upload.tiktok.sc/tiktok_uploader/uploadPrepayProof',//阿里云上传域名
 
  AccessKeySecret: '***',//Secret，登录oss控制台查看
  OSSAccessKeyId: '***',//KeyId，登录oss控制台查看
  timeout: 87600,
  maxSize: 10 * 1024 * 1024 //上传文件的大小限制,128mb
};
module.exports = config