export interface Blog {
  id?:number
  title?:string
  content?:string
  shortDescription?:string
  previewImageURL?:string
  userId?:number
  createdAt?:any
  categoryId?:number;
  tags?:string;
  privacy?:boolean
  views?:number
}
