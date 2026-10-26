# `applyToolCallTimestamps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/trace-format.js` · [Module README](../../../../modules/agent-transcript/trace-format-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509596-509608](../../../../../reference/runtime/host-main.cjs#L509596-L509608) | `FunctionDeclaration` | no | `target, toolResult2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509596-509608](../../../../../reference/runtime/host-main.cjs#L509596-L509608) | 5 | 0 | 0 | 0 | 0 | 0 |

### host:509596

Calls written directly in this body: `Number`.

Assignment or increment targets: `target.completed_at_ms`, `target.duration_ms`, `target.started_at_ms`.

SHA-256 of the source span: `756566472b82eba4de7545ef3d33c7754702feb4315dc006e79847f5ad3cca5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
