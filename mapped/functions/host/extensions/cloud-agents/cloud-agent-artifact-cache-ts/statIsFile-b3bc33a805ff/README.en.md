# `statIsFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538208-538217](../../../../../../../reference/runtime/host-main.cjs#L538208-L538217) | `FunctionDeclaration` | yes | `boxPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538208-538217](../../../../../../../reference/runtime/host-main.cjs#L538208-L538217) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:538208

Calls written directly in this body: `.isFile`, `findSystemErrno`, `import_node_fs46.promises.stat`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `21979f65a9eae66ace1a9f398100cdc2301a6a98b2f1ff9641a69259e4accd40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
