# `triggerFiringSchedules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485502-485506](../../../../../../reference/runtime/host-main.cjs#L485502-L485506) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:475232-475236](../../../../../../reference/runtime/sand-eval-runner.cjs#L475232-L475236) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485502-485506](../../../../../../reference/runtime/host-main.cjs#L485502-L485506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475232-475236](../../../../../../reference/runtime/sand-eval-runner.cjs#L475232-L475236) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485502

Calls written directly in this body: `.flatMap`, `triggerList`.

SHA-256 of the source span: `4ee69a1f40f46565d38c72e66bebd4e3a74f7a4a02ad74d0e239b73e67954dc0`.

### evaluation:475232

Calls written directly in this body: `.flatMap`, `triggerList`.

SHA-256 of the source span: `8dad3af9cb8b5fdf7eef9dee7fee4441fb1044335cd20c96206b75f0de578539`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
