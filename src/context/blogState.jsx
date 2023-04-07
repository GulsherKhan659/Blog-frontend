import { useEffect, useState } from 'react'

import BlogCxt from "./blogContext"
import Network from '../network/blogApi'


const BlogState = (props) => {
    const [blogs, setBlogs] = useState([])


    const FetchAllBlogs = () => {
        try {

            Network.get().then(docs => {
                setBlogs([...docs.data])


            })
            console.log(blogs)

        } catch (error) {
            alert('Went Some Thing Wrong In Fetching....')
        }
    }

    useEffect((
    ) => {
        FetchAllBlogs()
    }, [])


    const addBlog = (data) => {
        try {

            Network.post(data).then(() => FetchAllBlogs())

        } catch (error) {
            alert('Went Some Thing Wrong In Adding....')
        }

    }




    return (
        <BlogCxt.Provider value={{ blogs, addBlog }}>
            {props.children}
        </BlogCxt.Provider>
    )

}


export default BlogState