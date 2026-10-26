# `Walker.block`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749746-749755](../../../../../../../../reference/runtime/host-main.cjs#L749746-L749755) | `method` | no | `statements, parent` |
| [evaluation:522597-522606](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522597-L522606) | `method` | no | `statements, parent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749746-749755](../../../../../../../../reference/runtime/host-main.cjs#L749746-L749755) | 2 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:522597-522606](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522597-L522606) | 2 | 2 | 0 | 0 | 0 | 0 |

### host:749746

Calls written directly in this body: `fail2`, `new Scope3`, `scope.declare`, `this.statement`.

SHA-256 of the source span: `5ccd1ef32fea594f16bb3e7189924115ec26de5416c5a07ca918984ce1eb3b35`.

### evaluation:522597

Calls written directly in this body: `fail`, `new Scope3`, `scope.declare`, `this.statement`.

SHA-256 of the source span: `2d5b806c66e8546bb8ebfe2ba4fcabe8c62de409ab8691882d1653e5f5016007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
