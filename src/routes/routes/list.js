import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    const { region, season } = req.query;

    if (region && region !== 'all') {
        routes = routes.filter(route => route.region.toLowerCase() === region.toLowerCase());
    }
    if (season && season !== 'all') {
        routes = routes.filter(route => route.bestSeason.toLowerCase() === season.toLowerCase());
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};
