# `spawnErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/local-exec-failure-classifier.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-failure-classifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226140-226144](../../../../../../reference/runtime/host-main.cjs#L226140-L226144) | `FunctionDeclaration` | no | `rawErrno` |
| [evaluation:479029-479033](../../../../../../reference/runtime/sand-eval-runner.cjs#L479029-L479033) | `FunctionDeclaration` | no | `rawErrno` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226140-226144](../../../../../../reference/runtime/host-main.cjs#L226140-L226144) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479029-479033](../../../../../../reference/runtime/sand-eval-runner.cjs#L479029-L479033) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:226140

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `78849e739e663a0c70757da8f5552bc0e951b781e17b59faef013ed58a7d99b5`.

### evaluation:479029

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `78849e739e663a0c70757da8f5552bc0e951b781e17b59faef013ed58a7d99b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
