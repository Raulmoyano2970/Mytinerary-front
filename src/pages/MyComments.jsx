// import React from 'react'
// import { useEffect} from 'react'
// import MyCardComments from '../components/MyCardComments'
// import commentsActions from '../redux/actions/commentsAction'
// import { useDispatch, useSelector } from 'react-redux'
// import Swal from 'sweetalert2'

// export default function MyComments() {
//     const dispatch = useDispatch()
//     const { id, token } = useSelector(store => store.userReducer)
//     const {comments} = useSelector(store => store.commentsReducer)
//     const { getComment, deleteComments } = commentsActions

//     useEffect(() => {
//         commentss()
//         // eslint-disable-next-line
//     }, [])

//     async function commentss() {
//         try {

//             await dispatch(getComment(id, token))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     async function pullComments(e) {
//         try {  
//             Swal.fire({
//                 title: 'Are you sure?',
//                 text: "You won't be able to revert this!",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, delete it!'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     Swal.fire(
//                         'Deleted!',
//                         'Your reaction has been deleted.',
//                         'success'
//                         )
//                         dispatch(deleteComments({id: e.target.name, token}))
//                 }
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className="flex center" >
//         <div className="glassform">
//             <h2 className="title">My Comments</h2>
//             <div className='cont-cities'>
//                 <div className='Cities-card-container'>
//                     {comments.length > 0 && (comments.map((elements) => {
//                         return <MyCardComments comment={elements.commentId} key={elements._id} idR={elements._id} name={elements.name} photo={elements.icon} onClick={pullComments} />
//                     }))
//                     }
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }