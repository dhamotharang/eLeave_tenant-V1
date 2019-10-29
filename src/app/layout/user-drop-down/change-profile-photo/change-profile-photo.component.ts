import { Component, OnInit } from '@angular/core';

import {UserDataService} from '../../../services/user-data.service';


/**
 * This component is to set up user's profile picture
 * @export
 * @class ChangeProfilePhotoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-change-profile-photo',
  templateUrl: './change-profile-photo.component.html',
  styleUrls: ['./change-profile-photo.component.scss'],
})
export class ChangeProfilePhotoComponent implements OnInit {

  /**
   * Creates an instance of ChangeProfilePhotoComponent.
   * @param {UserDataService} userInfo This property is to get functions from UserDataService
   * @memberof ChangeProfilePhotoComponent
   */
  constructor(
    public userInfo: UserDataService,
  ) { }

  /**
   * This property is to bind profile picture's url
   * @type {*}
   * @memberof ChangeProfilePhotoComponent
   */
  public imgUrl: any = null;
  // imageURI: any;
  // imageFileName: any;
  /**
   * This method is to set initial value of properties. It will be
   * executed when this component is loaded
   * @memberof ChangeProfilePhotoComponent
   */
  ngOnInit() {
    console.log(this.imgUrl);
    this.imgUrl = '../../../../assets/icon/signin/zlatan';
    this.userInfo.setUserProfilePicture('../../assets/icon/signin/zlatan');
  }

  /**
   * This method is to set profile picture. It will set value of
   * picture property and update user's picture
   * @memberof ChangeProfilePhotoComponent
   */
  onUploadPicture() {
    console.log('onUploadPicture');

  }


  /**
   * This method is to set profile picture to default profile picture
   * @memberof ChangeProfilePhotoComponent
   */
  onRemovePicture() {
    console.log('onRemovePicture');
    this.imgUrl = null;
    this.userInfo.setUserProfilePicture(null);

  }
}





// import { Component, OnInit } from '@angular/core';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

// import {UserDataService} from '../../../services/user-data.service';
// /**
//  * This component is to set up user's profile picture
//  * @export
//  * @class ChangeProfilePhotoComponent
//  * @implements {OnInit}
//  */
// @Component({
//   selector: 'app-change-profile-photo',
//   templateUrl: './change-profile-photo.component.html',
//   styleUrls: ['./change-profile-photo.component.scss'],
// })
// export class ChangeProfilePhotoComponent implements OnInit {

//   /**
//    *Creates an instance of ChangeProfilePhotoComponent.
//    * @param {UserDataService} userInfo
//    * @memberof ChangeProfilePhotoComponent
//    */
//   constructor(

//   /**
//    * This property is to get functions from UserDataService
//    * @type {*}
//    * @memberof ChangeProfilePhotoComponent
//    */
//     public userInfo: UserDataService,
//     private camera: Camera
//   ) { }

//   public imgUrl: any = null;

//   /**
//    * This method is to set initial value of properties. It will be
//    * executed when this component is loaded
//    * @memberof ChangeProfilePhotoComponent
//    */
//   ngOnInit() {
//     console.log(this.imgUrl);
//     this.imgUrl = '../../../../assets/icon/signin/zlatan';
//     this.userInfo.setUserProfilePicture('../../assets/icon/signin/zlatan');
//   }

//   /**
//    * This method is to set profile picture. It will set value of
//    * picture property and update user's picture
//    * @memberof ChangeProfilePhotoComponent
//    */
//   onUploadPicture() {
//     console.log('onUploadPicture');
//     // const options: CameraOptions = {
//     //   quality: 70,
//     //   destinationType: this.camera.DestinationType.DATA_URL,
//     //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//     //   saveToPhotoAlbum:false
//     // }
//     // this.camera.getPicture(options).then((imageData) => {
//     //   // imageData is either a base64 encoded string or a file URI
//     //   // If it's base64:
//     //   this.myphoto = 'data:image/jpeg;base64,' + imageData;
//     // }, (err) => {
//     //   // Handle error

//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     };

//     console.log(options);
//     // this.camera.getPicture(options).then((imageData) => {
//     // // imageData is either a base64 encoded string or a file URI
//     // // If it's base64 (DATA_URL):
//     // const myphoto = 'data:image/jpeg;base64,' + imageData;
//     // console.log(myphoto);
//     // }, (err) => {
//     // // Handle error
//     // }); // });
//   }

//   /**
//    * This method is to set profile picture to default profile picture
//    * @memberof ChangeProfilePhotoComponent
//    */
//   onRemovePicture() {
//     console.log('onRemovePicture');
//     this.imgUrl = null;
//     this.userInfo.setUserProfilePicture(null);

//   }
// }
