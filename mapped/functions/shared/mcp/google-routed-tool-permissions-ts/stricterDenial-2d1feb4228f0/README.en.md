# `stricterDenial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687163-687167](../../../../../../reference/runtime/host-main.cjs#L687163-L687167) | `FunctionDeclaration` | no | `current2, next` |
| [evaluation:579284-579288](../../../../../../reference/runtime/sand-eval-runner.cjs#L579284-L579288) | `FunctionDeclaration` | no | `current2, next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687163-687167](../../../../../../reference/runtime/host-main.cjs#L687163-L687167) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579284-579288](../../../../../../reference/runtime/sand-eval-runner.cjs#L579284-L579288) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:687163

Calls written directly in this body: `restrictiveness`.

SHA-256 of the source span: `74177f76b5b6eedc2bec4198d5f46ed2d6199e4d90a878b476d534254c436a53`.

### evaluation:579284

Calls written directly in this body: `restrictiveness`.

SHA-256 of the source span: `74177f76b5b6eedc2bec4198d5f46ed2d6199e4d90a878b476d534254c436a53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
