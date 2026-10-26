# `joinWithOr`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485568-485572](../../../../../../reference/runtime/host-main.cjs#L485568-L485572) | `FunctionDeclaration` | no | `parts` |
| [evaluation:475298-475302](../../../../../../reference/runtime/sand-eval-runner.cjs#L475298-L475302) | `FunctionDeclaration` | no | `parts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485568-485572](../../../../../../reference/runtime/host-main.cjs#L485568-L485572) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:475298-475302](../../../../../../reference/runtime/sand-eval-runner.cjs#L475298-L475302) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:485568

Calls written directly in this body: `.join`, `parts.slice`.

SHA-256 of the source span: `ff7d80de541aaf1ab65d87a1b49d4e73156f7b6ef3dc89789ef6cfcdac530f0d`.

### evaluation:475298

Calls written directly in this body: `.join`, `parts.slice`.

SHA-256 of the source span: `ff7d80de541aaf1ab65d87a1b49d4e73156f7b6ef3dc89789ef6cfcdac530f0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
