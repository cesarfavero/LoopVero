# `putAgentStoreObjectContentAddressed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474282-474306](../../../../../../../reference/runtime/host-main.cjs#L474282-L474306) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474282-474306](../../../../../../../reference/runtime/host-main.cjs#L474282-L474306) | 3 | 0 | 3 | 1 | 1 | 0 |

### host:474282

Calls written directly in this body: `classifyConditionalPutStatus`, `new SandBoxStoreSyncError`, `presignSingleWrite`, `put`, `sha256Hex`, `warnIfConflictProtectionDowngraded`.

Assignment or increment targets: `response`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `40363776f9cda969807a4fe3f1e51a7384070fd2b3ec2672d83acdcf30c6f631`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
