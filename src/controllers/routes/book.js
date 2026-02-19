import { createConfirmation, getScheduleById, getTicketOptionsForRoute } from '../../models/model.js';
import { yenToUsd } from '../../includes/helpers.js';

const bookingPage = async (req, res) => {
    const { scheduleId } = req.params;

    const schedule = await getScheduleById(scheduleId);

    const ticketOptionsInYen = await getTicketOptionsForRoute(schedule.routeId, scheduleId);
    const ticketOptions = ticketOptionsInYen.map(ticket => ({
        ...ticket,
        price: Math.round(yenToUsd(ticket.price) * 100) / 100
    }));

    res.render('controllers/book', {
        title: 'Book Trip',
        schedule,
        ticketOptions
    });
};

const processBookingRequest = async (req, res) => {
    const data = req.body;

    const confirmationNum = await createConfirmation(data);

    res.redirect(`/routes/confirmation/${confirmationNum}`);
};

export { bookingPage, processBookingRequest };
