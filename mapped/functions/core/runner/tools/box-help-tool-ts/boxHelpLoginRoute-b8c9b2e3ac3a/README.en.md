# `boxHelpLoginRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725314-725317](../../../../../../../reference/runtime/host-main.cjs#L725314-L725317) | `FunctionDeclaration` | no | `brokered` |
| [evaluation:560417-560420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560417-L560420) | `FunctionDeclaration` | no | `brokered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725314-725317](../../../../../../../reference/runtime/host-main.cjs#L725314-L725317) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560417-560420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560417-L560420) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725314

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `89ef166317bce7aea9fddf86ce5f07445c19046c7b21e2cc9c9ce89cdd5e68ad`.

### evaluation:560417

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `89ef166317bce7aea9fddf86ce5f07445c19046c7b21e2cc9c9ce89cdd5e68ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
