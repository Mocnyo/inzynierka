<?php

namespace AppBundle\EventSubscriber;

use AppBundle\Repository\UrlopRepository;
use CalendarBundle\CalendarEvents;
use CalendarBundle\Entity\Event;
use CalendarBundle\Event\CalendarEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CalendarSubscriber implements EventSubscriberInterface
{
    private $urlopRepository;
    private $router;

    public function __construct(
        UrlopRepository $urlopRepository,
        UrlGeneratorInterface $router
    ) {
        $this->urlopRepository = $urlopRepository;
        $this->router = $router;
    }

    public static function getSubscribedEvents()
    {
        return [
            CalendarEvents::SET_DATA => 'onCalendarSetData',
        ];
    }

    public function onCalendarSetData(CalendarEvent $calendar)
    {
        $start = $calendar->getStart();
        $end = $calendar->getEnd();
        $filters = $calendar->getFilters();

        // Modify the query to fit to your entity and needs
        // Change booking.beginAt by your start date property
        $items = $this->urlopRepository
            ->createQueryBuilder('u')
            ->where('u.beginAt BETWEEN :start and :end OR u.endAt BETWEEN :start and :end')
            ->setParameter('start', $start->format('Y-m-d H:i:s'))
            ->setParameter('end', $end->format('Y-m-d H:i:s'))
            ->getQuery()
            ->getResult()
        ;

        foreach ($items as $item) {
            // this create the events with your data (here booking data) to fill calendar
            $urlopEvent = new Event(
                $item->getTitle(),
                $item->getBeginAt(),
                $item->getEndAt() // If the end date is null or not defined, a all day event is created.
            );

            /*
             * Add custom options to events
             *
             * For more information see: https://fullcalendar.io/docs/event-object
             * and: https://github.com/fullcalendar/fullcalendar/blob/master/src/core/options.ts
             */

            $urlopEvent->setOptions([
                'backgroundColor' => 'red',
                'borderColor' => 'red',
            ]);
            $urlopEvent->addOption(
                'url',
                $this->router->generate('booking_show', [
                    'id' => $item->getId(),
                ])
            );

            // finally, add the event to the CalendarEvent to fill the calendar
            $calendar->addEvent($urlopEvent);
        }
    }
}