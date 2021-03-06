import React from 'react'
import { PostCard } from './PostCard'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { updateQuery } from '../actions/index.js'
//import Search from '../Search'
import Error from '../Error'

/* const filterPosts = (id, props) => {
    let newId = parseInt(id)
    let filtered = props.posts.filter(post => {
        return post.id === newId
    })
    return filtered
} */

//debugger

/* const filteredSearch = (props, query) => {
    if (!!props.posts){
        return props.posts.filter(post => {
            return post.name.toLowerCase().includes(query.toLowerCase())
        })
    } else {
        <Error/>
    }
} */

const renderPosts = (props) => {
        return props.posts.map(post => {
            return <PostCard key={post.id} {...post} />
        })

}



const PostsContainer = (props) => {
    //const { id } = useParams()
    //const query = useSelector(state => state.posts.query)
    
    
        return (
            <div className="posts-container">
                {/* <Search posts={props.posts} updateQuery={props.updateQuery}/> */}
                <h3>POSTS</h3>
                {renderPosts(props)}
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (query) => dispatch(updateQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
