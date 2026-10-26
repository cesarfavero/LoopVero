# `offersRenderCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-kinds.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768662-768666](../../../../../../../reference/runtime/host-main.cjs#L768662-L768666) | `FunctionDeclaration` | no | `host` |
| [evaluation:564176-564180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564176-L564180) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768662-768666](../../../../../../../reference/runtime/host-main.cjs#L768662-L768666) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564176-564180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564176-L564180) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768662

Calls written directly in this body: `.some`, `Object.entries`, `cardsReachUser`.

SHA-256 of the source span: `d4b83334f04bd5cd990c560dd548e13c13ad59af7acf4c617a49a99dbf32e0a3`.

### evaluation:564176

Calls written directly in this body: `.some`, `Object.entries`, `cardsReachUser`.

SHA-256 of the source span: `d4b83334f04bd5cd990c560dd548e13c13ad59af7acf4c617a49a99dbf32e0a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
