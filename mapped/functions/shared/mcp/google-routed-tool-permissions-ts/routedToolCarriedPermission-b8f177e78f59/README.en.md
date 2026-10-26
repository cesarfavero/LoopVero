# `routedToolCarriedPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687168-687181](../../../../../../reference/runtime/host-main.cjs#L687168-L687181) | `FunctionDeclaration` | no | `args` |
| [evaluation:579289-579302](../../../../../../reference/runtime/sand-eval-runner.cjs#L579289-L579302) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687168-687181](../../../../../../reference/runtime/host-main.cjs#L687168-L687181) | 4 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:579289-579302](../../../../../../reference/runtime/sand-eval-runner.cjs#L579289-L579302) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:687168

Calls written directly in this body: `.some`, `args.isDisabled`, `routedToolCarry`, `sourceToolPermission`, `stricterDenial`.

Assignment or increment targets: `strictest`.

SHA-256 of the source span: `b07fb81612d59674c1a75a9ba0ce8f18da33b99d523b14a99772c8e407e1fc9a`.

### evaluation:579289

Calls written directly in this body: `.some`, `args.isDisabled`, `routedToolCarry`, `sourceToolPermission`, `stricterDenial`.

Assignment or increment targets: `strictest`.

SHA-256 of the source span: `b07fb81612d59674c1a75a9ba0ce8f18da33b99d523b14a99772c8e407e1fc9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
