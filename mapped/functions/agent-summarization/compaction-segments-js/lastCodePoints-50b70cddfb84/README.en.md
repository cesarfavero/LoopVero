# `lastCodePoints`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616910-616916](../../../../../reference/runtime/host-main.cjs#L616910-L616916) | `FunctionDeclaration` | no | `text3, max` |
| [evaluation:285450-285456](../../../../../reference/runtime/sand-eval-runner.cjs#L285450-L285456) | `FunctionDeclaration` | no | `text3, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616910-616916](../../../../../reference/runtime/host-main.cjs#L616910-L616916) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:285450-285456](../../../../../reference/runtime/sand-eval-runner.cjs#L285450-L285456) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:616910

Calls written directly in this body: `isLowSurrogate2`, `text3.charCodeAt`, `text3.slice`.

Assignment or increment targets: `count2`, `start`.

SHA-256 of the source span: `e781f393ec8ab6f717a2708870b83adbdfccb4360f4241fcc154925b251baeb8`.

### evaluation:285450

Calls written directly in this body: `isLowSurrogate`, `text3.charCodeAt`, `text3.slice`.

Assignment or increment targets: `count2`, `start`.

SHA-256 of the source span: `14c589e237f20a8de97ed78adbbc11fd71fb9a2f75baa21029c2ae3d9070ddea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
