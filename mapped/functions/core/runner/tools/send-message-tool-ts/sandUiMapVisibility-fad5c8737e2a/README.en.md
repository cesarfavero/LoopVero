# `sandUiMapVisibility`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761150-761153](../../../../../../../reference/runtime/host-main.cjs#L761150-L761153) | `FunctionDeclaration` | no | `deps` |
| [evaluation:551965-551968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551965-L551968) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761150-761153](../../../../../../../reference/runtime/host-main.cjs#L761150-L761153) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551965-551968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551965-L551968) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761150

Calls written directly in this body: `deps.sandUiMap`, `deps.uiGates`.

SHA-256 of the source span: `0b47e68dc06114384192297d484c54507bacde9c6eccf55891298d05eeb8545d`.

### evaluation:551965

Calls written directly in this body: `deps.sandUiMap`, `deps.uiGates`.

SHA-256 of the source span: `0b47e68dc06114384192297d484c54507bacde9c6eccf55891298d05eeb8545d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
