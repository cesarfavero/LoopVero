# `isAgentOnHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498552-498560](../../../../../../../reference/runtime/host-main.cjs#L498552-L498560) | `FunctionDeclaration` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498552-498560](../../../../../../../reference/runtime/host-main.cjs#L498552-L498560) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:498552

Calls written directly in this body: `.isDirectory`, `import_node_fs43.promises.stat`, `reportFallbackUnlessAbsent`, `resolveSandAgentDir`.

SHA-256 of the source span: `cbb8e8b6f1a892bc4bd94a473973f542600f23a3d17cee57927270ea53a6372d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
