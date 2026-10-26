# `fetchAgentStoreObjectToFileFromUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474403-474451](../../../../../../../reference/runtime/host-main.cjs#L474403-L474451) | `FunctionDeclaration` | yes | `url2, label, destPath, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474403-474451](../../../../../../../reference/runtime/host-main.cjs#L474403-L474451) | 3 | 0 | 4 | 2 | 2 | 0 |

### host:474403

Calls written directly in this body: `.catch`, `destination.createWriteStream`, `fetch`, `import_node_stream3.Readable.fromWeb`, `new SandBoxStoreSyncError`, `new import_node_stream3.Transform`, `openFreshDestination`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `594509e9377ee8193a99e2e6b37d6a3879e788eb40ef4bde4ee675b2d413b36e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
