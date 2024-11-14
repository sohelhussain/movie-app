import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
  const overview = `A number of factors immediately come to mind in connection with the film experience. For one thing, there is something mildly hypnotic about the illusion of movement that holds the attention and may even lower critical resistance. The accuracy of the film image is compelling because it is made by a nonhuman, scientific process. In addition, the motion picture gives what has been called a strong sense of being present; the film image always appears to be in the present tense. There is also the concrete nature of film; it appears to show actual people and things.
No less important than any of the above are the conditions under which the motion picture ideally is seen, where everything helps to dominate the spectators. They are taken from their everyday environment, partially isolated from others, and comfortably seated in a dark auditorium. The darkness concentrates their attention and prevents comparison of the image on the screen with surrounding objects or people. For a while, spectators live in the world the motion picture unfolds before them.
Still, the escape into the world of the film is not complete. Only rarely does the audience react as if the events on the screen are real—for instance, by ducking before an onrushing locomotive in a special three-dimensional effect. Moreover, such effects are considered to be a relatively low form of the art of motion pictures. Much more often, viewers expect a film to be truer to certain unwritten conventions than to the real world. Although spectators may sometimes expect exact realism in details of dress or locale, just as often they expect the film to escape from the real world and make them exercise their imagination, a demand made by great works of art in all forms.`
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
      })`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}
  className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]">
    <h1 className="w-[70%] text-5xl font-black text-white">{data.name || data.title || data.original_name || data.original_title || `Title`}</h1>
    <p className="w-[70%] mt-3 mb-3 text-white">
                {data.overview || overview.slice(0, 200)}...
                <Link
                    to={`/${data.media_type}/details/${data.id}`}
                    className="text-blue-400"
                >
                    more
                </Link>
            </p>
            <p className="text-white  ">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.release_date || "No Information"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
                {data.media_type || `Nothing Yet`}
            </p>
            <Link
                to={`/${data.media_type}/details/${data.id}/trailer`}
                className="mt-5 bg-[#6556CD] p-4 rounded text-white "
            >
                Watch Trailer
            </Link>
  </div>
  )
}

export default Header