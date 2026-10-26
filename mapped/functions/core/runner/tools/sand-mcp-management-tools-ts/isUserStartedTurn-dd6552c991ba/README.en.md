# `isUserStartedTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780128-780130](../../../../../../../reference/runtime/host-main.cjs#L780128-L780130) | `FunctionDeclaration` | no | `source` |
| [evaluation:580373-580375](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580373-L580375) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780128-780130](../../../../../../../reference/runtime/host-main.cjs#L780128-L780130) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580373-580375](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580373-L580375) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780128

Calls written directly in this body: `USER_STARTED_TURN_SOURCES.has`.

SHA-256 of the source span: `88a5de9e4918847b45164fe84baa4095557c7a4569865e1bf80f6a3928701a7e`.

### evaluation:580373

Calls written directly in this body: `USER_STARTED_TURN_SOURCES.has`.

SHA-256 of the source span: `88a5de9e4918847b45164fe84baa4095557c7a4569865e1bf80f6a3928701a7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
