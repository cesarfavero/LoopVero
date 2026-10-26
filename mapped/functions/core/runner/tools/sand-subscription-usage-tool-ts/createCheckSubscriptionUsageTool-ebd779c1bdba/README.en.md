# `createCheckSubscriptionUsageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766651-766668](../../../../../../../reference/runtime/host-main.cjs#L766651-L766668) | `FunctionDeclaration` | no | `deps` |
| [evaluation:562164-562181](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562164-L562181) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766651-766668](../../../../../../../reference/runtime/host-main.cjs#L766651-L766668) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562164-562181](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562164-L562181) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766651

Calls written directly in this body: `defineCommunicateTool`, `external_exports2.object`.

SHA-256 of the source span: `553d359a19dd37abbcdaa9593dd9341de2a78cc9131074fbfbd1097fb7e93006`.

### evaluation:562164

Calls written directly in this body: `defineCommunicateTool`, `external_exports3.object`.

SHA-256 of the source span: `2e9c957433c87fd53a35cebe4ee9128c770bb34b539edc9a8a61350857a3ff7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
