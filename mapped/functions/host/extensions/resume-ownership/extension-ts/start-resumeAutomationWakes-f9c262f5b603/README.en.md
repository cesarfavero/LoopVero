# `start/resumeAutomationWakes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708916-708916](../../../../../../../reference/runtime/host-main.cjs#L708916-L708916) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708916-708916](../../../../../../../reference/runtime/host-main.cjs#L708916-L708916) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708916 uses an implicit arrow-function return.

### host:708916

Calls written directly in this body: `automations.resumeWakes`.

SHA-256 of the source span: `a20168c3e3191eb2e2753fdd97eb860712ab471aa3398762d9aad4c87ac72848`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
