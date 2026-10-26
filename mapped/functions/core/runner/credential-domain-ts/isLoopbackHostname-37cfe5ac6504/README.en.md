# `isLoopbackHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:481981-481985](../../../../../../reference/runtime/sand-eval-runner.cjs#L481981-L481985) | `FunctionDeclaration` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:481981-481985](../../../../../../reference/runtime/sand-eval-runner.cjs#L481981-L481985) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:481981

Calls written directly in this body: `host.split`, `hostname3.toLowerCase`, `octets.every`.

SHA-256 of the source span: `ac1002cfa5543ba0c8ea58b1cf863d2badf08a16eb74e7e6e75fea13d098ea50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
