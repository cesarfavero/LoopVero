# `generatedMediaParentReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778523-778527](../../../../../../../../reference/runtime/host-main.cjs#L778523-L778527) | `FunctionDeclaration` | no | `decisions` |
| [evaluation:578257-578261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578257-L578261) | `FunctionDeclaration` | no | `decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778523-778527](../../../../../../../../reference/runtime/host-main.cjs#L778523-L778527) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:578257-578261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578257-L578261) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:778523

Calls written directly in this body: `decisions.offers`.

SHA-256 of the source span: `7b5c8b8809f4f9e14095b85774aa56052746b127ca78ef032c9028576cb535d8`.

### evaluation:578257

Calls written directly in this body: `decisions.offers`.

SHA-256 of the source span: `7b5c8b8809f4f9e14095b85774aa56052746b127ca78ef032c9028576cb535d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
