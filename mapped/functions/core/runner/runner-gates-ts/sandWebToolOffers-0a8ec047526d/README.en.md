# `sandWebToolOffers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/runner-gates.ts` · [Module README](../../../../../modules/core/runner/runner-gates-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752511-752516](../../../../../../reference/runtime/host-main.cjs#L752511-L752516) | `FunctionDeclaration` | no | `gates` |
| [evaluation:530921-530926](../../../../../../reference/runtime/sand-eval-runner.cjs#L530921-L530926) | `FunctionDeclaration` | no | `gates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752511-752516](../../../../../../reference/runtime/host-main.cjs#L752511-L752516) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530921-530926](../../../../../../reference/runtime/sand-eval-runner.cjs#L530921-L530926) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752511

Calls written directly in this body: `gates.webFetchDisabled`, `gates.webSearchDisabled`, `gates.webSearchDisabledByTeamNetwork`.

SHA-256 of the source span: `eae84dd4b0838d0ce05bd668fa9b56763f1a310b09f533ebf09f962efafcef87`.

### evaluation:530921

Calls written directly in this body: `gates.webFetchDisabled`, `gates.webSearchDisabled`, `gates.webSearchDisabledByTeamNetwork`.

SHA-256 of the source span: `eae84dd4b0838d0ce05bd668fa9b56763f1a310b09f533ebf09f962efafcef87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
