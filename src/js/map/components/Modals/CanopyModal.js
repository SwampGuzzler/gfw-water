import ModalWrapper from 'components/Modals/ModalWrapper';
import {modalActions} from 'actions/ModalActions';
import LayersHelper from 'helpers/LayersHelper';
import {mapStore} from 'stores/MapStore';
import {modalText} from 'js/config';
import React from 'react';

export default class CanopyModal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Build the slider
    $('#tree-cover-slider').ionRangeSlider({
      type: 'double',
      values: modalText.canopy.slider,
      hide_min_max: true,
      grid_snap: true,
      to_fixed: true,
      from_min: 1,
      from_max: 7,
      grid: true,
      from: 5,
      onFinish: this.sliderChanged,
      onUpdate: this.sliderUpdated,
      prettify: value => (value + '%')
    });
    // Update with the default values
    let defaults = mapStore.getState();
    LayersHelper.updateTreeCoverDefinitions(defaults.canopyDensity);
  }

  sliderChanged (data) {
    modalActions.updateCanopyDensity(data.from_value);
    LayersHelper.updateTreeCoverDefinitions(data.from_value);
  }

  sliderUpdated (data) {
    // Component was reset, reset the default definition as well
    LayersHelper.updateTreeCoverDefinitions(data.from_value);
  }

  render() {
    return (
      <ModalWrapper>
        <div className='canopy-modal-title'>{modalText.canopy.title}</div>
        <div className='trees'>
          <div className='tree-icon' />
          <div className='forest-icon' />
        </div>
        <div className='slider-container'>
          <div id='tree-cover-slider' />
        </div>
      </ModalWrapper>
    );
  }

}
