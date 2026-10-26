# `createCloudAgentsClient/listInstallationUnits/byPosition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513373-513382](../../../../../../reference/runtime/host-main.cjs#L513373-L513382) | `ArrowFunctionExpression` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513373-513382](../../../../../../reference/runtime/host-main.cjs#L513373-L513382) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:513373

Calls written directly in this body: `.localeCompare`, `rank`.

SHA-256 of the source span: `efaae0356143e5c7b6dba4b49a562c5bf360efd90d8ec4ec4c73f7299b043fe6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
