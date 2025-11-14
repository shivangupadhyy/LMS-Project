import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const CourseDetails = () => {
  const {id} = useParams()

  const [courseData, setCourseData] = useState(null)

  const {allCourses} = useContext(AppContext)

  const fetchCourseData = async ()=>{
    if (!allCourses || allCourses.length === 0) {
      setCourseData(null)
      return
    }
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse ?? null);
  }

  useEffect(()=>{
    fetchCourseData()
  },[allCourses, id])

  if (!courseData) {
    return (
      <div className='pt-20 px-8'>
        <p className='text-gray-600'>Loading course...</p>
      </div>
    )
  }

  return courseData ? (
    <>
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-section-height bg-gradient-to-b from-cyan-100/70 to-transparent'></div>
      
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-32 pt-20 text-left'>
        {/* left section */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>
        </div>

        {/* right section */}
        <div>
          {/* render right column details using courseData */}
        </div>
      </div>
    </div>
    </>
  ) : <Loading/>
}

export default CourseDetails