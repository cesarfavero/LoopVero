# `statsigClientPort/logEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552579-552579](../../../../../../../reference/runtime/host-main.cjs#L552579-L552579) | `ArrowFunctionExpression` | no | `eventName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552579-552579](../../../../../../../reference/runtime/host-main.cjs#L552579-L552579) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:552579 uses an implicit arrow-function return.

### host:552579

Calls written directly in this body: `client.logEvent`.

SHA-256 of the source span: `bb5a569b978d874798132db49eb9af253592f92131051c056646dd5366c960ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
