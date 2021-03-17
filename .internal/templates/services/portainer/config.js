const portainer = () => {
  const retr = {};

  const serviceName = 'portainer';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "9002:9000": 'http'
      },
      volumes: true,
      networks: true,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: '', // Website of service
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: '' // Usually links to the github page for this service.
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'Portainer (untested)',
      serviceTypeTags: ['container manager', 'wui', 'deprecated', 'dashboard'],
      iconUri: '/logos/portainer.png'
    };
  };

  return retr;
};

module.exports = portainer;
