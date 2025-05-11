# Disable Action Cable for this application since we don't need WebSockets
Rails.application.config.action_cable.mount_path = nil

# Also disable solid_cable (ActionCable alternative) if it's being used
if defined?(Solid::Cable)
  Rails.application.config.solid_cable ||= ActiveSupport::OrderedOptions.new
  Rails.application.config.solid_cable.mount_path = nil
end
