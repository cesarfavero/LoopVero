# `canEverTeach`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557694-557696](../../../../../../reference/runtime/host-main.cjs#L557694-L557696) | `FunctionDeclaration` | no | `row` |
| [evaluation:546130-546132](../../../../../../reference/runtime/sand-eval-runner.cjs#L546130-L546132) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557694-557696](../../../../../../reference/runtime/host-main.cjs#L557694-L557696) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546130-546132](../../../../../../reference/runtime/sand-eval-runner.cjs#L546130-L546132) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557694

Calls written directly in this body: `NEVER_TAUGHT_ANCHORS.has`.

SHA-256 of the source span: `b5db58e4ec3d824ba0301c97827cf3de769246949a708e028640c1370e4295aa`.

### evaluation:546130

Calls written directly in this body: `NEVER_TAUGHT_ANCHORS.has`.

SHA-256 of the source span: `b5db58e4ec3d824ba0301c97827cf3de769246949a708e028640c1370e4295aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
