# `computeNextRunAt`

[English](README.en.md) · [Português (Brasil)](README.md)

## Role

Computes the next eligible instant for a schedule. This is a calculation function; it does not schedule timers, execute a routine, or send messages. [Implementation](../../../reference/runtime/host-main.cjs#L682580-L682596).

## Inputs and return value

| Argument | Meaning |
| --- | --- |
| `schedule` | `@every` interval text or cron expression |
| `afterMs` | Base instant in milliseconds since the epoch |
| `timeZone` | Fallback timezone for cron |
| Return value | Timestamp of the next instant, or `null` if none can be found/validated |

## Interval calculation

First normalizes whitespace. If `parseEverySchedule` recognizes the schedule, it obtains interval `I` and optional phase `P`.

Without a phase:

`next = afterMs + I`

With a phase:

`next = (floor((afterMs - P) / I) + 1) * I + P`

Adding one to the quotient guarantees a strictly later instant, even when `afterMs` already coincides with a point in the sequence. The phase must be smaller than the interval. [Parser](../../../reference/runtime/host-main.cjs#L682453-L682487).

Example derived from the formula without executing the bundle: for `@every 20m`, a 10:07 base produces 10:27. For `@every 20m/5m`, a base aligned to 10:07 UTC produces 10:25 UTC. The first is relative to the base; the second is aligned to the epoch with a phase. This distinction must be retained in a reconstruction.

## Cron calculation

If the schedule is not an interval, it compiles cron with aliases and a timezone prefix. The common format has five fields. The search starts at the next minute, evaluates minute, hour, month, and the day rule, and may skip to the next day change. It searches up to a limit of 366 days and returns `null` if it finds no match. [Matcher and day rule](../../../reference/runtime/host-main.cjs#L682333-L682376), [search](../../../reference/runtime/host-main.cjs#L682429-L682452).

When both day of month and day of week are restricted, it uses OR. A valid `TZ=` or `CRON_TZ=` in the expression takes precedence over `timeZone`; without a usable timezone, it uses the box's local clock. `Intl.DateTimeFormat` performs the timezone conversion, and formatters are cached. [Timezone](../../../reference/runtime/host-main.cjs#L682388-L682427), [precedence](../../../reference/runtime/host-main.cjs#L682591-L682596).

## Validation is separate from calculation

The five-minute minimum is applied when validating/migrating the definition. `computeNextRunAt` does not itself reject an interval below that minimum. `isValidSchedule` accepts `minimumIntervalMs`; `FileAutomationStore.readConfig` migrates old schedules. [Validation](../../../reference/runtime/host-main.cjs#L682524-L682533), [store](../../../reference/runtime/host-main.cjs#L720536-L720554).

The function does not ensure that the remote service will trigger at exactly that instant. Flexible windows, unavailability, and queues belong to other layers.

[Automations](../../components/automations/README.en.md).
