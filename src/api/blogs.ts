import axios from "axios"
import { Blog } from "../types/blog"


const API_URL = "http://localhost:3001"

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await axios.get<Blog[]>(`${API_URL}/blogs`)
    return res.data
  } catch (error) {
    throw new Error("Failed to fetch blogs")
  }
}

export const getBlogById = async (id: number) => {
    try {
        const res = await axios.get(`${API_URL}/blogs/${id}`)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
    
}

export const createBlog = async(blog: Omit<Blog, "id">) => {
    try{
        const res = await axios.post(`${API_URL}/blogs`, blog)
        return res.data
    } catch(err) {
        console.log(err)
    }
    
}