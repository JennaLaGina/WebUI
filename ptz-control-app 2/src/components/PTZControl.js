import React, { useState } from 'react';
import '../styles/PTZControl.css';

const PTZControl = () => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPTZEnabled, setIsPTZEnabled] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [activeCommand, setActiveCommand] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [presetViews, setPresetViews] = useState({
    1: 'https://via.placeholder.com/480x270/1a2332/ffffff?text=Preset+1',
    2: 'https://via.placeholder.com/480x270/1a2332/ffffff?text=Preset+2',
    3: 'https://via.placeholder.com/480x270/1a2332/ffffff?text=Preset+3'
  });

  const handleConfigure = () => {
    setIsModalOpen(true);
  };

  const handleTogglePTZ = () => {
    setIsPTZEnabled(!isPTZEnabled);
  };

  const handleCommand = (command) => {
    setActiveCommand(command);
    setHasChanges(true);
    setTimeout(() => setActiveCommand(null), 300);
  };

  const handlePresetClick = (presetNumber) => {
    setSelectedPreset(presetNumber);
    setHasChanges(true);
  };

  const handleSave = () => {
    setIsConfigured(true);
    setIsModalOpen(false);
    setHasChanges(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsPTZEnabled(false);
    setHasChanges(false);
  };

  return (
    <div className="ptz-container">
      <div className="jabra-header">
        <div className="jabra-logo">Jabra</div>
        <h1>Video</h1>
        <div className="header-actions">
          <button className="btn-cancel">Cancel</button>
          <button className={`btn-save ${hasChanges ? 'enabled' : ''}`}>
            Save
          </button>
        </div>
      </div>

      <div className="tabs">
        <button className="tab">IMAGE QUALITY</button>
        <button className="tab active">CAMERA</button>
        <button className="tab">MONITOR</button>
        <button className="tab">RESET</button>
      </div>

      <div className="content">
        <h2>Camera configuration</h2>

        <div className="accordion">
          <div className="accordion-header" onClick={() => setIsExpanded(!isExpanded)}>
            <span>*Pan, Tilt, Zoom controls</span>
            <div className="accordion-status">
              <span>{isConfigured ? 'Configured' : 'Not configured'}</span>
              <span className={`chevron ${isExpanded ? 'up' : 'down'}`}>
                {isExpanded ? '▲' : '▼'}
              </span>
            </div>
          </div>

          {isExpanded && (
            <div className="accordion-content">
              {!isConfigured && (
                <button className="btn-configure" onClick={handleConfigure}>
                  Configure
                </button>
              )}
              {isConfigured && (
                <button className="btn-configure" onClick={handleConfigure}>
                  Reconfigure
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Configure Pan, Tilt, Zoom controls</h2>

            <div className="ptz-toggle">
              <span>Pan, Tilt, Zoom controls</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isPTZEnabled} 
                  onChange={handleTogglePTZ}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            {isPTZEnabled && (
              <>
                <div className="presets">
                  <button 
                    className={`preset-btn ${selectedPreset === 1 ? 'active' : ''}`}
                    onClick={() => handlePresetClick(1)}
                  >
                    <span className="preset-icon">⬚</span>
                    <span>Preset 1</span>
                  </button>
                  <button 
                    className={`preset-btn ${selectedPreset === 2 ? 'active' : ''}`}
                    onClick={() => handlePresetClick(2)}
                  >
                    <span className="preset-icon">⬚</span>
                    <span>Preset 2</span>
                  </button>
                  <button 
                    className={`preset-btn ${selectedPreset === 3 ? 'active' : ''}`}
                    onClick={() => handlePresetClick(3)}
                  >
                    <span className="preset-icon">⬚</span>
                    <span>Preset 3</span>
                  </button>
                </div>

                {showPreview && (
                  <div className="video-preview">
                    <img 
                      src={selectedPreset ? presetViews[selectedPreset] : 'https://via.placeholder.com/480x270/1a2332/ffffff?text=Camera+Preview'} 
                      alt="Camera preview" 
                    />
                  </div>
                )}

                <div className="preview-toggle">
                  <label>
                    <input 
                      type="checkbox" 
                      checked={showPreview} 
                      onChange={() => setShowPreview(!showPreview)}
                    />
                    <span>Enable preview</span>
                  </label>
                </div>

                <p className="info-text">
                  Make sure your video bar is activated to access live camera stream
                </p>

                <div className="controls-grid">
                  <button 
                    className={`control-btn ${activeCommand === 'pan-left' ? 'active' : ''}`}
                    onClick={() => handleCommand('pan-left')}
                  >
                    <span className="icon">◀</span>
                    <span>Pan left</span>
                  </button>
                  <button 
                    className={`control-btn ${activeCommand === 'pan-right' ? 'active' : ''}`}
                    onClick={() => handleCommand('pan-right')}
                  >
                    <span>Pan right</span>
                    <span className="icon">▶</span>
                  </button>
                  <button 
                    className={`control-btn ${activeCommand === 'tilt-down' ? 'active' : ''}`}
                    onClick={() => handleCommand('tilt-down')}
                  >
                    <span className="icon">▼</span>
                    <span>Tilt down</span>
                  </button>
                  <button 
                    className={`control-btn ${activeCommand === 'tilt-up' ? 'active' : ''}`}
                    onClick={() => handleCommand('tilt-up')}
                  >
                    <span>Tilt up</span>
                    <span className="icon">▲</span>
                  </button>
                  <button 
                    className={`control-btn ${activeCommand === 'zoom-out' ? 'active' : ''}`}
                    onClick={() => handleCommand('zoom-out')}
                  >
                    <span className="icon">−</span>
                    <span>Zoom out</span>
                  </button>
                  <button 
                    className={`control-btn ${activeCommand === 'zoom-in' ? 'active' : ''}`}
                    onClick={() => handleCommand('zoom-in')}
                  >
                    <span>Zoom in</span>
                    <span className="icon">+</span>
                  </button>
                </div>
              </>
            )}

            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button 
                className={`btn-save ${hasChanges ? 'enabled' : ''}`}
                onClick={handleSave}
                disabled={!hasChanges}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PTZControl;
