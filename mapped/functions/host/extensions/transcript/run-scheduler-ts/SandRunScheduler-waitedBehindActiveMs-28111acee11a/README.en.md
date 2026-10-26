# `SandRunScheduler.waitedBehindActiveMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739834-739839](../../../../../../../reference/runtime/host-main.cjs#L739834-L739839) | `method` | no | `queue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739834-739839](../../../../../../../reference/runtime/host-main.cjs#L739834-L739839) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:739834

Calls written directly in this body: `Math.max`, `this.clock.now`.

SHA-256 of the source span: `533948934a498592ebd29888163a718383b7512907c0bc95f8666b7f35b853a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
