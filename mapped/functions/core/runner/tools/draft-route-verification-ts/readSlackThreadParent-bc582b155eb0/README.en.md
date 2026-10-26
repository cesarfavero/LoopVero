# `readSlackThreadParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735473-735493](../../../../../../../reference/runtime/host-main.cjs#L735473-L735493) | `FunctionDeclaration` | yes | `execute, route, threadTs, cache3` |
| [evaluation:541038-541058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541038-L541058) | `FunctionDeclaration` | yes | `execute, route, threadTs, cache3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735473-735493](../../../../../../../reference/runtime/host-main.cjs#L735473-L735493) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:541038-541058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541038-L541058) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:735473

Calls written directly in this body: `execute`, `parseThreadParent`, `slackVerificationFailure`.

SHA-256 of the source span: `273235bf9baafef878467b2f70cb4951345cf73abb25df968b8101827bc62d62`.

### evaluation:541038

Calls written directly in this body: `execute`, `parseThreadParent`, `slackVerificationFailure`.

SHA-256 of the source span: `273235bf9baafef878467b2f70cb4951345cf73abb25df968b8101827bc62d62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
