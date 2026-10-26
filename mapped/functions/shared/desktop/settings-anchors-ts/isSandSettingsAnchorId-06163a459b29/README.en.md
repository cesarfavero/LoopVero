# `isSandSettingsAnchorId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/settings-anchors.ts` · [Module README](../../../../../modules/shared/desktop/settings-anchors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489316-489318](../../../../../../reference/runtime/host-main.cjs#L489316-L489318) | `FunctionDeclaration` | no | `value` |
| [evaluation:475444-475446](../../../../../../reference/runtime/sand-eval-runner.cjs#L475444-L475446) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489316-489318](../../../../../../reference/runtime/host-main.cjs#L489316-L489318) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475444-475446](../../../../../../reference/runtime/sand-eval-runner.cjs#L475444-L475446) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489316

Calls written directly in this body: `ANCHOR_ID_SET.has`.

SHA-256 of the source span: `7b98458d275a18bae96fda460e4279db183e5f9b4d6fe7cec5ff8cdfd8a3e2d7`.

### evaluation:475444

Calls written directly in this body: `ANCHOR_ID_SET.has`.

SHA-256 of the source span: `7b98458d275a18bae96fda460e4279db183e5f9b4d6fe7cec5ff8cdfd8a3e2d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
