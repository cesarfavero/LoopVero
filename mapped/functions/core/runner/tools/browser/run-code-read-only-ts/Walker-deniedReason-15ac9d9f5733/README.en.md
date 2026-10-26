# `Walker.deniedReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750072-750076](../../../../../../../../reference/runtime/host-main.cjs#L750072-L750076) | `method` | no | `objKind, name18` |
| [evaluation:522923-522927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522923-L522927) | `method` | no | `objKind, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750072-750076](../../../../../../../../reference/runtime/host-main.cjs#L750072-L750076) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:522923-522927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522923-L522927) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750072

Calls written directly in this body: `LISTENER_METHODS.has`, `own2`.

SHA-256 of the source span: `4b0fe9b815125d23d8b6eebde16a6409c3fdd14d624c3a9219f40f25dd3d00c5`.

### evaluation:522923

Calls written directly in this body: `LISTENER_METHODS.has`, `own2`.

SHA-256 of the source span: `4b0fe9b815125d23d8b6eebde16a6409c3fdd14d624c3a9219f40f25dd3d00c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
