# `isLoopbackUserFormHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726245-726247](../../../../../../../reference/runtime/host-main.cjs#L726245-L726247) | `FunctionDeclaration` | no | `host` |
| [evaluation:560863-560865](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560863-L560865) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726245-726247](../../../../../../../reference/runtime/host-main.cjs#L726245-L726247) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560863-560865](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560863-L560865) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726245

Calls written directly in this body: `.toLowerCase`, `USER_FORM_LOOPBACK_HOSTS.has`, `host.trim`.

SHA-256 of the source span: `27bf403306e1910306327a037501c55d7b92f6e20ed6b8bb99ec68085bea9cb0`.

### evaluation:560863

Calls written directly in this body: `.toLowerCase`, `USER_FORM_LOOPBACK_HOSTS.has`, `host.trim`.

SHA-256 of the source span: `27bf403306e1910306327a037501c55d7b92f6e20ed6b8bb99ec68085bea9cb0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
