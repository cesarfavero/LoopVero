# `titleNamesUrlOrLowercaseDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726289-726295](../../../../../../../reference/runtime/host-main.cjs#L726289-L726295) | `FunctionDeclaration` | no | `title` |
| [evaluation:560904-560910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560904-L560910) | `FunctionDeclaration` | no | `title` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726289-726295](../../../../../../../reference/runtime/host-main.cjs#L726289-L726295) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560904-560910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560904-L560910) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726289

Calls written directly in this body: `.some`, `title.includes`, `title.split`.

SHA-256 of the source span: `f9c3014f00208302f01270d36d1f6335f2aac2d963800adff3e401e391ce4777`.

### evaluation:560904

Calls written directly in this body: `.some`, `title.includes`, `title.split`.

SHA-256 of the source span: `f9c3014f00208302f01270d36d1f6335f2aac2d963800adff3e401e391ce4777`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
