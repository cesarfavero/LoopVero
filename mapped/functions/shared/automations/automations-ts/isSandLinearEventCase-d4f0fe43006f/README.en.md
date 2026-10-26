# `isSandLinearEventCase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485431-485433](../../../../../../reference/runtime/host-main.cjs#L485431-L485433) | `FunctionDeclaration` | no | `value` |
| [evaluation:475163-475165](../../../../../../reference/runtime/sand-eval-runner.cjs#L475163-L475165) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485431-485433](../../../../../../reference/runtime/host-main.cjs#L485431-L485433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475163-475165](../../../../../../reference/runtime/sand-eval-runner.cjs#L475163-L475165) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485431

Calls written directly in this body: `isKeyOf`.

SHA-256 of the source span: `42b8e043c4edd038fe378141df60d16e8da07f25bfc067850d47037e73011151`.

### evaluation:475163

Calls written directly in this body: `isKeyOf`.

SHA-256 of the source span: `42b8e043c4edd038fe378141df60d16e8da07f25bfc067850d47037e73011151`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
