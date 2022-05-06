# logwatcher

A tool to watch journald events and send any events that match configured
keywords to Sentry or Sentry-compatible services.

## Usage

To use this image, create a service in your `docker-compose.yml` as shown below:
```
version: "2.1"

services:
  logwatcher:
    image: bh.cr/logwatcher/logwatcher-armv7hl
    labels:
      io.balena.features.journal-logs: '1'
    restart: unless_stopped
```

## Example
```
version: '2.1'

services:
  logwatcher:
    image: bh.cr/logwatcher/logwatcher-armv7hl
    environment:
      DEBUG: 1
      SENTRY_DSN: https://1234@5678.ingest.sentry.io/123456
      LW_Timeout: Schema query timeout
    labels:
      io.balena.features.journal-logs: '1'
    restart: unless-stopped
  app:
    image: balenalib/armv7hf-debian
    command: >
      /bin/bash -c 'while true; do echo "[Unhandled Server Error] Schema query timeout"; sleep 3; done'
    restart: unless-stopped
```

Currently, the following images are available for use:
- `bh.cr/logwatcher/logwatcher-armv7hl`
- `bh.cr/logwatcher/logwatcher-amd64`
- `bh.cr/logwatcher/logwatcher-aarch64`

## Customisation

`bh.cr/gh_monarci/logwatcher` can be configured via the following variables:

| Environment Variable        | Default | Description                                          |
| --------------------------- | ------  | -----------------------------------------------------|
| `SENTRY_DSN`                | none    | DSN for sending logs to Sentry service               |
| `SENTRY_TRACES_SAMPLE_RATE` | `1.0`   | Sentry traces sample rate                            |
| `LW_LEVEL_DEFAULT`          | none    | Default minimum log level that creates an event      |
| `DEBUG`                     | none    | Output debug logs, `1` to enable                     |

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

## Error messages format

`logwatcher` needs to extract two basic bits of information: error message and error level. The error level is the main configurable aspect of `logwatcher` as it defines at which level errors are sent to Sentry/Glitch. This is done with the env var `LW_LEVEL_DEFAULT`.

`logwatcher` receives `journald` events which have `PRIORITY` and `_MESSAGE` properties that can be directly mapped to Sentry/Glitch event properties. Alas, most applications _don't_ log through `journalctl` but simply write to `stdout`. `logwatcher` receives the logging events from other applications as journalctl events **but** the `PRIORITY` information is useless as is always `INFO`. So, in order to detect the intended error level `logwatcher` needs to parse the error message.

The good thing about logging aspects is that there are many standard formats to choose from!. Some formats are defined by the language or logging library; other applications use arbitrary logging formats. 

Extracting this information is currently done by trying a set of RegEx, from most specific to more generic, until one matches. If none matches, `logwatcher` uses `INFO`.

You can check the ReExs at [./lib/eventConverter.ts]


## Setting env vars
You can refer to the [docs](https://www.balena.io/docs/learn/manage/serv-vars/#environment-and-service-variables) on how to set environment or service variables

Alternatively, you can set them in the `docker-compose.yml` or `Dockerfile.template` files.
