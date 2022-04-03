export type UserType = {
  username: string;
  fullName: string;
  emailAddress: string;
  userId: string;
  following: string[];
  followers: string[];
  dateCreated: number;
};

export const initialUser = {
  username: "",
  fullName: "",
  emailAddress: "",
  userId: "",
  following: [],
  followers: [],
  dateCreated: 0,
};

export interface FirebaseUserType extends UserType {
  docId: string;
}

export type PostType = {
  caption: string;
  comments: {
    comment: string;
    displayName: string;
  }[];
  dateCreated: number;
  imageSrc: string;
  likes: string[];
  photoId: string;
  userId: string;
  userLatitude: string;
  userLongitude: string;
};

export interface FirebasePostType extends PostType {
  docId: string;
}
