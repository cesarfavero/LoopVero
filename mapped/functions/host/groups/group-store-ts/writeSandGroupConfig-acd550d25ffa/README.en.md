# `writeSandGroupConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `host/groups/group-store.ts` · [Module README](../../../../../modules/host/groups/group-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491475-491488](../../../../../../reference/runtime/host-main.cjs#L491475-L491488) | `FunctionDeclaration` | no | `agentDir, config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491475-491488](../../../../../../reference/runtime/host-main.cjs#L491475-L491488) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491475

Calls written directly in this body: `JSON.stringify`, `ensureSandDataDirSync`, `getSandGroupPath`, `normalizeMemberIds`, `writeSandDataFileSync`.

SHA-256 of the source span: `8bde8d066849a6e1ec69098b3a32413a5e26172d615562d98adad3d25c4b02d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
