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
| `LW_LEVEL_DEFAULT`          | none    | Default minimum log level that creates an event      |

Set any keywords to match with fingerprints with `LW_<fingerprint>` environment variables.

For example, setting `LW_DatabaseError` to `"Failed to connect to database"`, would send any
event messages that contain the phrase `Failed to connect to database` with the fingerprint `DatabaseError`.

You can set multiple phrases to match to the same fingerprint by separating them with commas.

### Example setup

This setup causes all entries with level error to be created as Sentry issues.

```ini
LW_all=.*
LW_LEVEL_DEFAULT=error
```

## Event grouping and deduplication

Sentry groups similar and duplicate events into issues, using a technique called 'fingerprinting'. Events with the same fingerprint are grouped together into an issue.

For each event that logwatcher retrieves from the logs it will add a fingerprint that contains:

- `fingerprint` name if specified on the `LW_*` env vars; for example with the above definition it will add `all`
- event SYSLOG_IDENTIFIER : syslog identifier string
- event _EXE : the executable path
- event	message : event message. If the event is in docker `logfmt` format, this will be the value of `msg`. Otherwise is the full message

You can refer to the [docs](https://www.balena.io/docs/learn/manage/serv-vars/#environment-and-service-variables) on how to set environment or service variables

Alternatively, you can set them in the `docker-compose.yml` or `Dockerfile.template` files.
