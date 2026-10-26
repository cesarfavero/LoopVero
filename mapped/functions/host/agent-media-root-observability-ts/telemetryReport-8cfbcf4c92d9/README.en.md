# `telemetryReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-media-root-observability.ts` · [Module README](../../../../modules/host/agent-media-root-observability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723808-723819](../../../../../reference/runtime/host-main.cjs#L723808-L723819) | `FunctionDeclaration` | no | `report, uidSplitRequested, uidSplitActive, op, outcome, errorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723808-723819](../../../../../reference/runtime/host-main.cjs#L723808-L723819) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723808

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `46119990278fa762ca9a272c69496148192a8e225881c50cb1a95d31cb39afe7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
