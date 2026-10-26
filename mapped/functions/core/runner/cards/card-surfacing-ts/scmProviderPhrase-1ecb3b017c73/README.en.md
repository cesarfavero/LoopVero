# `scmProviderPhrase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763866-763869](../../../../../../../reference/runtime/host-main.cjs#L763866-L763869) | `FunctionDeclaration` | no | `card` |
| [evaluation:557209-557212](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557209-L557212) | `FunctionDeclaration` | no | `card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763866-763869](../../../../../../../reference/runtime/host-main.cjs#L763866-L763869) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557209-557212](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557209-L557212) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763866

Calls written directly in this body: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `scmProviderDisplayName`.

SHA-256 of the source span: `cce76edcfd3233a700dae1792de3e4efbe431686823fd0fec4c8547b1239d792`.

### evaluation:557209

Calls written directly in this body: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `scmProviderDisplayName`.

SHA-256 of the source span: `cce76edcfd3233a700dae1792de3e4efbe431686823fd0fec4c8547b1239d792`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
