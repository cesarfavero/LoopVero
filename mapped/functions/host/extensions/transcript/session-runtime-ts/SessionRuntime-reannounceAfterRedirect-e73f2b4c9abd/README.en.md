# `SessionRuntime.reannounceAfterRedirect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738028-738033](../../../../../../../reference/runtime/host-main.cjs#L738028-L738033) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738028-738033](../../../../../../../reference/runtime/host-main.cjs#L738028-L738033) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:738028

Calls written directly in this body: `this.announceActivation`, `this.announcedAgentId`, `this.invalidateDeferredActivation`.

SHA-256 of the source span: `e4a8fd58356877b69fa328afbfd1e051551042deefd0a332a340c38ddd6f945c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
