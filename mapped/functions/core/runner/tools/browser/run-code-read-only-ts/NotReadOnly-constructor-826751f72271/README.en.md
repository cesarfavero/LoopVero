# `NotReadOnly.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749603-749606](../../../../../../../../reference/runtime/host-main.cjs#L749603-L749606) | `method` | no | `reason` |
| [evaluation:522454-522457](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522454-L522457) | `method` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749603-749606](../../../../../../../../reference/runtime/host-main.cjs#L749603-L749606) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:522454-522457](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522454-L522457) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:749603

Calls written directly in this body: `super`.

Assignment or increment targets: `this.reason`.

SHA-256 of the source span: `aaf2a5cd4352ad24f1ae15fb78e835a7c5eeb6a4cd1198cb56b89fe9b77fa90d`.

### evaluation:522454

Calls written directly in this body: `super`.

Assignment or increment targets: `this.reason`.

SHA-256 of the source span: `aaf2a5cd4352ad24f1ae15fb78e835a7c5eeb6a4cd1198cb56b89fe9b77fa90d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
