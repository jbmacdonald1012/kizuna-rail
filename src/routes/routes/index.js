import { bookingPage, processBookingRequest } from './book.js';
import confirmationPage from './confirm.js';
import listRoutesPage from './list.js';
import routeDetailsPage from './details.js';
import { Router } from 'express';

const router = Router();

router.get('/', listRoutesPage);

router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

router.get('/confirmation/:confirmationId', confirmationPage);

router.get('/:routeId', routeDetailsPage);

export default router;
