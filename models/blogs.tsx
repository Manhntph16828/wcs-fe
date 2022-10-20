export interface Tblog {
    _id?: string,
    title: string,
    slug: string,
    thumbnail: string,
    desc: string,
    content: string,
    categoryId: string
}
export interface userErr {
    error: "string"
}