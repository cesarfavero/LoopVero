# `triggerListeners`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485487-485491](../../../../../../reference/runtime/host-main.cjs#L485487-L485491) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:475219-475223](../../../../../../reference/runtime/sand-eval-runner.cjs#L475219-L475223) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485487-485491](../../../../../../reference/runtime/host-main.cjs#L485487-L485491) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475219-475223](../../../../../../reference/runtime/sand-eval-runner.cjs#L475219-L475223) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485487

Calls written directly in this body: `.filter`, `triggerList`.

SHA-256 of the source span: `8644b017d03ab8adcd633265f0e0dc2fb1067aa1beb36ca598f531a2088d5937`.

### evaluation:475219

Calls written directly in this body: `.filter`, `triggerList`.

SHA-256 of the source span: `be24e4e7522759cee9d38c08caba664015a652d37bdd3b4cee4dc56d0af2c8e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
