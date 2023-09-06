import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import projects from '~/../projects.json';

import 'swiper/css';
import 'swiper/css/free-mode';

export function ProjectSlider() {
  return (
    <Swiper
      className="mySwiper w-full !overflow-visible"
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 2
        },
      }}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode]}
    > 
      {projects.map(project => (
        <SwiperSlide key={project.slug} className="rounded-md">
          <div className="group !flex flex-col gap-5 text-muted-foreground hover:text-card-foreground hover:cursor-grab w-[400px]!">
            <div className="bg-zinc-700 w-full h-[250px] aspect-video rounded-lg overflow-hidden relative">
              {project.image && <img 
                src={project.image} 
                alt={`Cover image of ${project.name}`} 
                className="h-full w-full object-fit"
                width={400}
                height={250}
              />}
              <div className="opacity-100 group-hover:opacity-0 absolute top-0 left-0 w-full h-full bg-zinc-900/50 transition-opacity duration-700"></div>
            </div>
            <div className="flex flex-col flex-1 transition-all duration-1000 gap-2">
              <div className="flex items-center gap-2">
                {project.tags.map(tag => (
                  <div key={`${project.slug}_tag_${tag}`} className="text-xs">{tag}</div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold tracking-widest">{project.name}</h3>
                <span className="text-sm font-semibold">{project.year}</span>
              </div>
              <p className="text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}