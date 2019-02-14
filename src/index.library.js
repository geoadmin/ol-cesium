import OLCesium from './olcs/OLCesium.js';

import AbstractSynchronizer from './olcs/AbstractSynchronizer.js';
import RasterSynchronizer from './olcs/RasterSynchronizer.js';
import VectorSynchronizer from './olcs/VectorSynchronizer.js';

import * as core from './olcs/core.js';
import OLImageryProvider from './olcs/core/OLImageryProvider.js';
import VectorLayerCounterpart from './olcs/core/VectorLayerCounterpart.js';

import LazyLoader from './olcs/contrib/LazyLoader.js';
import Manager from './olcs/contrib/Manager.js';

import GaKmlSynchronizer from './olcs/GaKmlSynchronizer.js';
import GaRasterSynchronizer from './olcs/GaRasterSynchronizer.js';
import GaTileset3dSynchronizer from './olcs/GaTileset3dSynchronizer.js';
import GaVectorSynchronizer from './olcs/GaVectorSynchronizer.js';

export default OLCesium;

// Using var for phantomJS
// eslint-disable-next-line no-var
var olcs = window['olcs'] = {};
olcs.OLCesium = OLCesium;

olcs.AbstractSynchronizer = AbstractSynchronizer;
olcs.RasterSynchronizer = RasterSynchronizer;
olcs.VectorSynchronizer = VectorSynchronizer;

olcs.core = core.default;
olcs.core.OLImageryProvider = OLImageryProvider;
olcs.core.VectorLayerCounterpart = VectorLayerCounterpart;

olcs.contrib = {};
olcs.contrib.LazyLoader = LazyLoader;
olcs.contrib.Manager = Manager;

olcs.GaKmlSynchronizer = GaKmlSynchronizer;
olcs.GaRasterSynchronizer = GaRasterSynchronizer;
olcs.GaTileset3dSynchronizer = GaTileset3dSynchronizer;
olcs.GaVectorSynchronizer = GaVectorSynchronizer;
