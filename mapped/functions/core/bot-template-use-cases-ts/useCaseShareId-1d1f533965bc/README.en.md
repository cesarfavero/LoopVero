# `useCaseShareId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/bot-template-use-cases.ts` · [Module README](../../../../modules/core/bot-template-use-cases-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770737-770739](../../../../../reference/runtime/host-main.cjs#L770737-L770739) | `FunctionDeclaration` | no | `slug` |
| [evaluation:569832-569834](../../../../../reference/runtime/sand-eval-runner.cjs#L569832-L569834) | `FunctionDeclaration` | no | `slug` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770737-770739](../../../../../reference/runtime/host-main.cjs#L770737-L770739) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569832-569834](../../../../../reference/runtime/sand-eval-runner.cjs#L569832-L569834) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770737

Calls written directly in this body: `.slice`, `sha256HexOfText`.

SHA-256 of the source span: `44936467142d749473e0245d7c41450249aee1718641102ab0135d5ed0e2c49c`.

### evaluation:569832

Calls written directly in this body: `.slice`, `sha256HexOfText`.

SHA-256 of the source span: `44936467142d749473e0245d7c41450249aee1718641102ab0135d5ed0e2c49c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
