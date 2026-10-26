# `compileWorkspaceIgnore/ignores`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/workspace-ignore.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482266-482272](../../../../../../../reference/runtime/host-main.cjs#L482266-L482272) | `FunctionExpression` | no | `relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482266-482272](../../../../../../../reference/runtime/host-main.cjs#L482266-L482272) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:482266

Calls written directly in this body: `rule.fileRe.test`.

Assignment or increment targets: `ignored`.

SHA-256 of the source span: `8191aba8cd8a86bb65bde009feeffb2d80cf56a51a7e9337edc16e1fca0d27ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
