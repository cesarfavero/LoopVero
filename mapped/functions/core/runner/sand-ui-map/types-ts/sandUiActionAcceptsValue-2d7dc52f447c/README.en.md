# `sandUiActionAcceptsValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/types.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557800-557808](../../../../../../../reference/runtime/host-main.cjs#L557800-L557808) | `FunctionDeclaration` | no | `action, value` |
| [evaluation:550629-550637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550629-L550637) | `FunctionDeclaration` | no | `action, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557800-557808](../../../../../../../reference/runtime/host-main.cjs#L557800-L557808) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550629-550637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550629-L550637) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:557800

Calls written directly in this body: `.includes`, `.test`, `new RegExp`, `sandUiActionValueIds`.

SHA-256 of the source span: `e8f5db8d6bdf29723bcb2d6136bef2135055258160d9c57ba8898e124b159c78`.

### evaluation:550629

Calls written directly in this body: `.includes`, `.test`, `new RegExp`, `sandUiActionValueIds`.

SHA-256 of the source span: `e8f5db8d6bdf29723bcb2d6136bef2135055258160d9c57ba8898e124b159c78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
