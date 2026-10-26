# `fetchAgentStoreObjectToFileFromUrl/transform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474424-474436](../../../../../../../reference/runtime/host-main.cjs#L474424-L474436) | `FunctionExpression` | no | `chunk, _encoding, callback` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474424-474436](../../../../../../../reference/runtime/host-main.cjs#L474424-L474436) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:474424

Calls written directly in this body: `Buffer.from`, `Buffer.isBuffer`, `callback`, `new SandBoxStoreSyncError`.

Assignment or increment targets: `written`.

SHA-256 of the source span: `10cda1ae885964eb2379fffd4c89e889f7b536fef80df55a5d6e9aa3c1d1a430`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
