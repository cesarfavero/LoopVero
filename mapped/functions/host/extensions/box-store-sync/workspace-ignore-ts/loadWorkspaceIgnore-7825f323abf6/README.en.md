# `loadWorkspaceIgnore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/workspace-ignore.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482282-482290](../../../../../../../reference/runtime/host-main.cjs#L482282-L482290) | `FunctionDeclaration` | no | `workspaceDir, defaults2 = SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482282-482290](../../../../../../../reference/runtime/host-main.cjs#L482282-L482290) | 0 | 0 | 0 | 1 | 0 | 1 |

### host:482282

Calls written directly in this body: `compileWorkspaceIgnore`, `parseIgnorePatterns`, `patterns.push`.

SHA-256 of the source span: `447d04466fc4758edca6a8ec5e4cce936a6f1f5fab4f64a4309e3d19b136df23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
