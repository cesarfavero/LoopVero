# `formatShoppingMoney`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707737-707747](../../../../../../reference/runtime/host-main.cjs#L707737-L707747) | `FunctionDeclaration` | no | `money, locale = "en-US"` |
| [evaluation:481859-481869](../../../../../../reference/runtime/sand-eval-runner.cjs#L481859-L481869) | `FunctionDeclaration` | no | `money, locale = "en-US"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707737-707747](../../../../../../reference/runtime/host-main.cjs#L707737-L707747) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:481859-481869](../../../../../../reference/runtime/sand-eval-runner.cjs#L481859-L481869) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:707737

Calls written directly in this body: `.format`, `Number.isInteger`, `new Intl.NumberFormat`.

SHA-256 of the source span: `6c5054bd9b682842f324a3b6bfa38943160876990decdaaccf1723b405cd109d`.

### evaluation:481859

Calls written directly in this body: `.format`, `Number.isInteger`, `new Intl.NumberFormat`.

SHA-256 of the source span: `6c5054bd9b682842f324a3b6bfa38943160876990decdaaccf1723b405cd109d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
