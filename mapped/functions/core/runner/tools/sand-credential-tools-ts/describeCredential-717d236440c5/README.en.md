# `describeCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751809-751816](../../../../../../../reference/runtime/host-main.cjs#L751809-L751816) | `FunctionDeclaration` | no | `view, vaultOnly` |
| [evaluation:524875-524882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524875-L524882) | `FunctionDeclaration` | no | `view, vaultOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751809-751816](../../../../../../../reference/runtime/host-main.cjs#L751809-L751816) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524875-524882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524875-L524882) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:751809

Calls written directly in this body: `.join`, `new Set`, `oneTimeCodeMark`, `siteHosts.slice`, `view.sites.map`.

SHA-256 of the source span: `b882eb0a03e45f04a640443d9c36e16f03ad2dabfd29992af233a271f7d9fc40`.

### evaluation:524875

Calls written directly in this body: `.join`, `new Set`, `oneTimeCodeMark`, `siteHosts.slice`, `view.sites.map`.

SHA-256 of the source span: `b882eb0a03e45f04a640443d9c36e16f03ad2dabfd29992af233a271f7d9fc40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
