# `scmProviderOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-tool-error-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585790-585793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585790-L585793) | `FunctionDeclaration` | no | `provider` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585790-585793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585790-L585793) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585790

Calls written directly in this body: `DASHBOARD_CONNECTABLE_PROVIDERS.find`.

SHA-256 of the source span: `62eebbbaad02ee8107cfee0df5cd1e7b4e20d80d82325353c8cb6cc810bb0a5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
