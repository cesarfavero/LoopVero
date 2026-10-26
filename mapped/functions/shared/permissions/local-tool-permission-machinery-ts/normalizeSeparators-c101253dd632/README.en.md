# `normalizeSeparators`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `shared/permissions/local-tool-permission-machinery.ts` · [Module README](../../../../../modules/shared/permissions/local-tool-permission-machinery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590166-590168](../../../../../../reference/runtime/host-main.cjs#L590166-L590168) | `FunctionDeclaration` | no | `path33` |
| [evaluation:529931-529933](../../../../../../reference/runtime/sand-eval-runner.cjs#L529931-L529933) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590166-590168](../../../../../../reference/runtime/host-main.cjs#L590166-L590168) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529931-529933](../../../../../../reference/runtime/sand-eval-runner.cjs#L529931-L529933) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:590166

Calls written directly in this body: `.replace`, `path33.replace`.

SHA-256 of the source span: `cd830192671a362732a4d5e0f7c2c0d05394ec23ccfe67433c117f648c20bc38`.

### evaluation:529931

Calls written directly in this body: `.replace`, `path33.replace`.

SHA-256 of the source span: `cd830192671a362732a4d5e0f7c2c0d05394ec23ccfe67433c117f648c20bc38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
