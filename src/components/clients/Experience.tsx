'use client';
import 'react-vertical-timeline-component/style.min.css';
import Experiences from '@/infos/Experiences';
import { SNMapMarker, SNStarAlt } from '@icongo/sn';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export default function Experience() {
  return (
    <VerticalTimeline lineColor="rgba(255, 255, 255, 0.5)">
      {Experiences.map(({ type, elementProps, title, company, address, site, details }, idx) => (
        <VerticalTimelineElement
          key={`vertical-timeline-element-${idx}`}
          className={`vertical-timeline-element--${type}`}
          {...elementProps}
          visible={true}
        >
          <h2 className="vertical-timeline-element-title">{title}</h2>
          <h3 className="text-2xl text-impact">
            <a href={site} target="_blank" rel="noreferrer" aria-label={company}>
              {company}
            </a>
          </h3>
          <address className="flex flex-row gap-1 items-center">
            <SNMapMarker /> <span>{address}</span>
          </address>
          {details && (
            <ul className="list-disc ml-10 mt-5">
              {details.map((detail, dIdx) => (
                <li key={`detail-${idx}-${dIdx}`}>{detail}</li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{
          background: '#2d1950',
          color: '#fff',
        }}
        icon={<SNStarAlt />}
        visible={true}
      />
    </VerticalTimeline>
  );
}