# `createListAvailableSecureValuesTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767310-767347](../../../../../../../../reference/runtime/host-main.cjs#L767310-L767347) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:562829-562866](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562829-L562866) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767310-767347](../../../../../../../../reference/runtime/host-main.cjs#L767310-L767347) | 9 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:562829-562866](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562829-L562866) | 9 | 0 | 3 | 4 | 0 | 0 |

### host:767310

Calls written directly in this body: `.filter`, `.join`, `.reduce`, `Promise.all`, `String`, `d.secureValues.listMetadata`, `d.secureValues.listSavedCards`, `d.secureValues.listSavedLogins`, `listedSite`, `metadata3.filter`, `renderAvailableSecureValues`, `renderSavedCards`, `renderSavedLogins`, `savedCards.slice`, `secureValueLists.increment`, `secureValueResultCountBucket`.

SHA-256 of the source span: `dc65eede531ca818dfd8489efd9475ce90a9c17e3aeb26391dba04f6b5f051f8`.

### evaluation:562829

Calls written directly in this body: `.filter`, `.join`, `.reduce`, `Promise.all`, `String`, `d.secureValues.listMetadata`, `d.secureValues.listSavedCards`, `d.secureValues.listSavedLogins`, `listedSite`, `metadata3.filter`, `renderAvailableSecureValues`, `renderSavedCards`, `renderSavedLogins`, `savedCards.slice`, `secureValueLists.increment`, `secureValueResultCountBucket`.

SHA-256 of the source span: `dc65eede531ca818dfd8489efd9475ce90a9c17e3aeb26391dba04f6b5f051f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
