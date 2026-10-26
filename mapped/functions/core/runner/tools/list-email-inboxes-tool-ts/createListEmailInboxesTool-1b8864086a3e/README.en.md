# `createListEmailInboxesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/list-email-inboxes-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764905-764913](../../../../../../../reference/runtime/host-main.cjs#L764905-L764913) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558273-558281](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558273-L558281) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764905-764913](../../../../../../../reference/runtime/host-main.cjs#L764905-L764913) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558273-558281](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558273-L558281) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764905

Calls written directly in this body: `defineCommunicateTool`, `describeListEmailInboxes`, `external_exports2.object`.

SHA-256 of the source span: `f89d22636077ebe9a81efab8349e2287b316ec7c5f0c30814e3beea22a0448c2`.

### evaluation:558273

Calls written directly in this body: `defineCommunicateTool`, `describeListEmailInboxes`, `external_exports3.object`.

SHA-256 of the source span: `ab83cac3a3847e4a557f2883355db072d750191198b5b32a66121223c93f02ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
