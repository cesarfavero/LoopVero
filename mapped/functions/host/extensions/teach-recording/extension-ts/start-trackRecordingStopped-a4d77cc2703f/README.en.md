# `start/trackRecordingStopped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729673-729677](../../../../../../../reference/runtime/host-main.cjs#L729673-L729677) | `ArrowFunctionExpression` | no | `{ agent_id, outcome, duration_seconds }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729673-729677](../../../../../../../reference/runtime/host-main.cjs#L729673-L729677) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:729673 uses an implicit arrow-function return.

### host:729673

Calls written directly in this body: `analytics.trackEvent`, `brandedId`.

SHA-256 of the source span: `d89e44fb401ee7c5ec0b317ae059b8a6acd2875aebd13ecdc3872dd2cb6e5a4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
