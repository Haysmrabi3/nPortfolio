import React from 'react'

import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";












export default function Courses() {











    return <>


        <section>
            <div id='Courses' className="container mx-auto mt-36 p-10">
                <h2 className='text-center font-bold text-4xl md:text-5xl text-white mb-16'>Courses</h2>
                <Timeline>
                    <TimelineItem>
                        <TimelinePoint icon={HiCalendar} />
                        <TimelineContent>
                            <TimelineTime>may 2024</TimelineTime>
                            <TimelineTitle>Frontend Development, Route Academy</TimelineTitle>
                            <TimelineBody>
                                The course covers frontend tools such as html, css, JavaScript, React.js. <br />
                                Development of a new, highly responsive, web-based user interface.
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint icon={HiCalendar} />
                        <TimelineContent>
                            <TimelineTime>March 2025</TimelineTime>
                            <TimelineTitle>Frontend Development, ITI</TimelineTitle>
                            <TimelineBody>
                                Successfully completed a one-month front-end development scholarship, gaining practical experience <br /> in building responsive web applications using HTML, CSS, JavaScript, Bootstrap, React, and Redux
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint icon={HiCalendar} />
                        <TimelineContent>
                            <TimelineTime>oct 2025</TimelineTime>
                            <TimelineTitle>Frontend Development, web Master</TimelineTitle>
                            <TimelineBody>
                                Completed a three-month internship where I worked on assigned development tasks, <br /> received regular feedback, and was evaluated through performance scores and task reviews.
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>

        </section>










    </>
}
