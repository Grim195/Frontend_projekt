// stores/eventStore.js
import { defineStore } from 'pinia'

// Import images
import rockImg from '@/assets/events/rock.jpg'
import techImg from '@/assets/events/tech.jpg'
import artImg from '@/assets/events/art.jpg'
import jazzImg from '@/assets/events/jazz.jpg'
import comedyImg from '@/assets/events/comedy.jpg'
import footballImg from '@/assets/events/football.jpg'
import festivalImg from '@/assets/events/festival.jpg'
import scienceImg from '@/assets/events/science.jpg'
import classicalImg from '@/assets/events/classical.jpg'
import basketballImg from '@/assets/events/basketball.jpg'
import photoImg from '@/assets/events/photo.jpg'
import indieImg from '@/assets/events/indie.jpg'
import modernArtImg from '@/assets/events/modernart.jpg'
import rockLegendsImg from '@/assets/events/rocklegends.jpg'
import marathonImg from '@/assets/events/marathon.jpg'
import startupImg from '@/assets/events/startup.jpg'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [
      { id: 1, title: 'Rock Concert', date: '2026-05-12', price: 25, availableTickets: 120, category: 'concert', image: rockImg },
      { id: 2, title: 'Tech Conference', date: '2026-06-20', price: 50, availableTickets: 0, category: 'conference', image: techImg },
      { id: 3, title: 'Art Expo', date: '2026-07-01', price: 15, availableTickets: 30, category: 'exhibition', image: artImg },
      { id: 4, title: 'Jazz Night', date: '2026-07-15', price: 20, availableTickets: 50, category: 'concert', image: jazzImg },
      { id: 5, title: 'Comedy Show', date: '2026-07-30', price: 18, availableTickets: 100, category: 'theatre', image: comedyImg },
      { id: 6, title: 'Football Final', date: '2026-08-10', price: 40, availableTickets: 200, category: 'sport', image: footballImg },
      { id: 7, title: 'Summer Music Festival', date: '2026-08-22', price: 60, availableTickets: 75, category: 'festival', image: festivalImg },
      { id: 8, title: 'Science Expo', date: '2026-09-01', price: 30, availableTickets: 25, category: 'conference', image: scienceImg },
      { id: 9, title: 'Classical Night', date: '2026-09-12', price: 35, availableTickets: 60, category: 'concert', image: classicalImg },
      { id: 10, title: 'Basketball Semi-Final', date: '2026-09-20', price: 45, availableTickets: 80, category: 'sport', image: basketballImg },
      { id: 11, title: 'Photography Workshop', date: '2026-10-05', price: 20, availableTickets: 15, category: 'conference', image: photoImg },
      { id: 12, title: 'Indie Music Fest', date: '2026-10-12', price: 28, availableTickets: 120, category: 'festival', image: indieImg },
      { id: 14, title: "Modern Art Expo", date: "2026-11-01", price: 22, availableTickets: 50, category: "exhibition", image: modernArtImg },
      { id: 15, title: "Rock Legends Night", date: "2026-11-12", price: 40, availableTickets: 90, category: "concert", image: rockLegendsImg },
      { id: 16, title: "Marathon Event", date: "2026-11-22", price: 15, availableTickets: 300, category: "sport", image: marathonImg },
      { id: 17, title: 'Tech Startup Meetup', date: '2026-12-01', price: 35, availableTickets: 40, category: 'conference', image: startupImg }
    ]
  }),
  actions: {
    buyTicket(eventId) {
      const e = this.events.find(ev => ev.id === eventId)
      if (e && e.availableTickets > 0) {
        e.availableTickets--
      }
    },
    getEvent(eventId) {
      return this.events.find(ev => ev.id === eventId)
    }
  }
})
