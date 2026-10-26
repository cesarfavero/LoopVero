# `normalizeEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776787-776816](../../../../../../../../reference/runtime/host-main.cjs#L776787-L776816) | `FunctionDeclaration` | no | `entry` |
| [evaluation:576432-576461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576432-L576461) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776787-776816](../../../../../../../../reference/runtime/host-main.cjs#L776787-L776816) | 4 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:576432-576461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576432-L576461) | 4 | 1 | 0 | 5 | 0 | 0 |

### host:776787

Calls written directly in this body: `COMPUTER_ACTION_ALIASES.get`, `JSON.stringify`, `isUnknownRecord2`, `sameValue`.

SHA-256 of the source span: `61fe9caa2801ab38cb87d0c708b653d63f922e8a7e068502aa4046090914ad75`.

### evaluation:576432

Calls written directly in this body: `COMPUTER_ACTION_ALIASES.get`, `JSON.stringify`, `isUnknownRecord2`, `sameValue`.

SHA-256 of the source span: `61fe9caa2801ab38cb87d0c708b653d63f922e8a7e068502aa4046090914ad75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
