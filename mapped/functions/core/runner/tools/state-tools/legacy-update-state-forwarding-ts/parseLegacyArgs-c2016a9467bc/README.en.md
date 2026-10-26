# `parseLegacyArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555706-555713](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555706-L555713) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555706-555713](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555706-L555713) | 1 | 0 | 0 | 2 | 0 | 1 |

### evaluation:555706

Calls written directly in this body: `JSON.parse`, `legacyUpdateStateArgs.safeParse`.

SHA-256 of the source span: `2ae7e2250de54ceeeeed2146ea7242446bd7fd86df82783947064dd332b437ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
