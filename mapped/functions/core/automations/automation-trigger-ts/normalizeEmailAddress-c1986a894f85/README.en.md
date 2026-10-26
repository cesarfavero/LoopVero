# `normalizeEmailAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716259-716262](../../../../../../reference/runtime/host-main.cjs#L716259-L716262) | `FunctionDeclaration` | no | `raw` |
| [evaluation:527942-527945](../../../../../../reference/runtime/sand-eval-runner.cjs#L527942-L527945) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716259-716262](../../../../../../reference/runtime/host-main.cjs#L716259-L716262) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527942-527945](../../../../../../reference/runtime/sand-eval-runner.cjs#L527942-L527945) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716259

Calls written directly in this body: `normalizeScopeToken`, `token.toLowerCase`.

SHA-256 of the source span: `1a08832196f8a6506c9c4840071d7a04dd8385f884faee986bf351ba590242db`.

### evaluation:527942

Calls written directly in this body: `normalizeScopeToken`, `token.toLowerCase`.

SHA-256 of the source span: `1a08832196f8a6506c9c4840071d7a04dd8385f884faee986bf351ba590242db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
