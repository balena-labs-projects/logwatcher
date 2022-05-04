# logwatcher

A tool to watch journald events and send any events that match configured
keywords to Sentry or Sentry-compatible services.

## Usage

To use this image, create a service in your `docker-compose.yml` as shown below:
```
version: "2.1"

services:
  logwatcher:
    image: bh.cr/gh_monarci/logwatcher
    labels:
      io.balena.features.journal-logs: '1'
    restart: unless_stopped
```


## Customisation

`bh.cr/gh_monarci/logwatcher` can be configured via the following variables:

| Environment Variable        | Default | Description                                          |
| --------------------------- | ------  | -----------------------------------------------------|
| `SENTRY_DSN`                | ` `     | DSN for sending logs to Sentry service               |
| `SENTRY_TRACES_SAMPLE_RATE` | `1.0`   | Sentry traces sample rate                            |

Set any keywords to match with fingerprints with `LW_<fingerprint>` environment variables.

For example, setting `LW_DatabaseError` to `"Failed to connect to database"`, would send any
event messages that contain the phrase `Failed to connect to database` with the fingerprint `DatabaseError`.

You can set multiple phrases to match to the same fingerprint by separating them with commas.

You can refer to the [docs](https://www.balena.io/docs/learn/manage/serv-vars/#environment-and-service-variables) on how to set environment or service variables

Alternatively, you can set them in the `docker-compose.yml` or `Dockerfile.template` files.
