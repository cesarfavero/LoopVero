# `Walker.dataOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749893-749896](../../../../../../../../reference/runtime/host-main.cjs#L749893-L749896) | `method` | no | `kind` |
| [evaluation:522744-522747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522744-L522747) | `method` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749893-749896](../../../../../../../../reference/runtime/host-main.cjs#L749893-L749896) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522744-522747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522744-L522747) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:749893

Calls written directly in this body: `fail2`, `isDataLike`.

SHA-256 of the source span: `b2ced4ffa7cc5901f87dd66402ce39ab43a8feffb68c2fd853d8e6aeb82a114b`.

### evaluation:522744

Calls written directly in this body: `fail`, `isDataLike`.

SHA-256 of the source span: `3584c311173fd250b1c89ed58eccc1ddcde00e64df0180160b80ed9540da1b7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
