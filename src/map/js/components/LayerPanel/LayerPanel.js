import WaterStressLegend from 'components/LayerPanel/WaterStressLegend';
// import LandCoverLegend from 'components/LayerPanel/LandCoverLegend';
import SedimentLegend from 'components/LayerPanel/SedimentLegend';
import DensityDisplay from 'components/LayerPanel/DensityDisplay';
import WetlandsLegend from 'components/LayerPanel/WetlandsLegend';
import LayerCheckbox from 'components/LayerPanel/LayerCheckbox';
import FiresControls from 'components/LayerPanel/FiresControls';
import LossControls from 'components/LayerPanel/LossControls';
import SimpleLegend from 'components/LayerPanel/SimpleLegend';
import LayerGroup from 'components/LayerPanel/LayerGroup';
// import DamsLegend from 'components/LayerPanel/DamsLegend';
import {layersConfig, layerPanelText} from 'js/config';
import {mapStore} from 'stores/MapStore';
import KEYS from 'js/constants';
import React from 'react';

export default class LayerPanel extends React.Component {

  constructor (props) {
    super(props);
    mapStore.listen(this.storeUpdated.bind(this));
    this.state = mapStore.getState();
  }

  storeUpdated () {
    this.setState(mapStore.getState());
  }

  render() {
    return (
      <div className={`layer-panel map-component custom-scroll shadow${!this.state.controlsVisible ? ' hidden' : ''}`}>
        <LayerGroup activeLayers={this.state.activeLayers} label={layerPanelText.watershed}>
          {layersConfig.map(this.checkboxMap('watershed'), this)}
        </LayerGroup>
        <LayerGroup activeLayers={this.state.activeLayers} label={layerPanelText.watershedRisk}>
          {layersConfig.map(this.checkboxMap('watershedRisk'), this)}
        </LayerGroup>
      </div>
    );
  }

  checkboxMap (group) {
    return layer => {
      let activeLayers = this.state.activeLayers;
      // Exclude Layers not part of this group
      if (layer.group !== group) { return null; }
      // TODO: Remove once current layer panel design is approved
      // If it is just a label, render the grop label
      // if (layer.isGroupLabel) { return <div key={layer.id} className='layer-group-label'>{layer.label}</div>; }
      // Some layers have legends or tools and they should be rendered inside the layer checkbox
      let childComponent;
      switch (layer.id) {
        case KEYS.waterStress:
          childComponent = <WaterStressLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        case KEYS.sediment:
          childComponent = <SedimentLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        case KEYS.majorDams:
          childComponent = <SimpleLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        case KEYS.activeFires:
          childComponent = <FiresControls loaded={this.props.loaded} {...this.state} />;
          break;
        case KEYS.loss:
          childComponent = [<LossControls loaded={this.props.loaded} {...this.state} />, <DensityDisplay {...this.state} />];
          break;
        case KEYS.treeCover:
          childComponent = <DensityDisplay {...this.state} />;
          break;
        case KEYS.landCover:
          childComponent = <SimpleLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        case KEYS.wetlands:
          childComponent = <WetlandsLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        case KEYS.waterIntake:
          childComponent = <SimpleLegend url={layer.url} layerIds={layer.layerIds} />;
          break;
        default:
          childComponent = null;
      }

      return <LayerCheckbox key={layer.id} layer={layer} checked={activeLayers.indexOf(layer.id) > -1}>
        {childComponent}
      </LayerCheckbox>;

    };
  }

}
