<?php

namespace AppBundle\EventSubscriber;

use AppBundle\Entity\Vacation;
use CalendarBundle\CalendarEvents;
use CalendarBundle\Entity\Event;
use CalendarBundle\Event\CalendarEvent;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CalendarSubscriber implements EventSubscriberInterface
{
    private $router;
    private $em;

    public function __construct(
        UrlGeneratorInterface $router,
        EntityManager $em
    ) {
        $this->em = $em;
        $this->router = $router;
    }

    public static function getSubscribedEvents() {
        return [
            CalendarEvents::SET_DATA => 'onCalendarSetData',
        ];
    }

    public function onCalendarSetData(CalendarEvent $calendar)
    {
        $start = $calendar->getStart();
        $end = $calendar->getEnd();
        $filters = $calendar->getFilters();
        $vacations = $this->em->getRepository(Vacation::class)->findBy(['isAccepted' => 1]);

        foreach ($vacations as $vacation) {
            $vacationEvent = new Event(
                $vacation->getUser()->getFullName().' - '.$vacation->getTitle(),
                $vacation->getBeginAt(),
                $vacation->getEndAt()
            );

            $vacationEvent->setOptions([
                'backgroundColor' => '#224abe',
                'borderColor' => 'black',
                'textColor' => 'white'
            ]);

//            // finally, add the event to the CalendarEvent to fill the calendar
            $calendar->addEvent($vacationEvent);
        }
    }
}