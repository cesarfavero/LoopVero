# `isSandUiMapFactName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557643-557645](../../../../../../reference/runtime/host-main.cjs#L557643-L557645) | `FunctionDeclaration` | no | `name18` |
| [evaluation:546090-546092](../../../../../../reference/runtime/sand-eval-runner.cjs#L546090-L546092) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557643-557645](../../../../../../reference/runtime/host-main.cjs#L557643-L557645) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546090-546092](../../../../../../reference/runtime/sand-eval-runner.cjs#L546090-L546092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557643

Calls written directly in this body: `FACT_NAMES.has`.

SHA-256 of the source span: `b35b08d49a21161419d9284ba8f006ae5e9df3640a96f7bc97a2908086a03e26`.

### evaluation:546090

Calls written directly in this body: `FACT_NAMES.has`.

SHA-256 of the source span: `b35b08d49a21161419d9284ba8f006ae5e9df3640a96f7bc97a2908086a03e26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
