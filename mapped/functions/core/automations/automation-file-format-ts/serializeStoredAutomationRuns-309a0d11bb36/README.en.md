# `serializeStoredAutomationRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716612-716615](../../../../../../reference/runtime/host-main.cjs#L716612-L716615) | `FunctionDeclaration` | no | `runs` |
| [evaluation:627326-627329](../../../../../../reference/runtime/sand-eval-runner.cjs#L627326-L627329) | `FunctionDeclaration` | no | `runs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716612-716615](../../../../../../reference/runtime/host-main.cjs#L716612-L716615) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627326-627329](../../../../../../reference/runtime/sand-eval-runner.cjs#L627326-L627329) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716612

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `72c9055654533ae96998f29fdef015f3039d7c21041ff43b64f33821fb71cad6`.

### evaluation:627326

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `72c9055654533ae96998f29fdef015f3039d7c21041ff43b64f33821fb71cad6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
