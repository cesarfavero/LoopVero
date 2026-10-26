# `createRequestCookieOriginApprovalTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775191-775231](../../../../../../../reference/runtime/host-main.cjs#L775191-L775231) | `FunctionDeclaration` | no | `deps` |
| [evaluation:574838-574878](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574838-L574878) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775191-775231](../../../../../../../reference/runtime/host-main.cjs#L775191-L775231) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574838-574878](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574838-L574878) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775191

Calls written directly in this body: `advertisedCardTaskIdSchema`, `cookieImportSkipToolNote`, `defineCommunicateTool`.

SHA-256 of the source span: `8d3acf51eafa3f76bd4b1328e9d630f3047b67dbb6d7bffb97525ba0e189f232`.

### evaluation:574838

Calls written directly in this body: `advertisedCardTaskIdSchema`, `cookieImportSkipToolNote`, `defineCommunicateTool`.

SHA-256 of the source span: `25317ad95721d2962b02589e0b2e3db79dd4ddfc5f5e3bff831539886b4d0d99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
