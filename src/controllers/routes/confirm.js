import { getConfirmationById } from '../../models/model.js';

export default async (req, res) => {
    const { confirmationId } = req.params;

    const confirmation = await getConfirmationById(confirmationId);

    res.render('controllers/confirm', {
        title: 'Trip Confirmation',
        confirmation
    });
};
