# `cleanupLegacyGroupMemberDirs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-maintenance.ts` · [Module README](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720353-720373](../../../../../../../reference/runtime/host-main.cjs#L720353-L720373) | `FunctionDeclaration` | yes | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720353-720373](../../../../../../../reference/runtime/host-main.cjs#L720353-L720373) | 1 | 1 | 2 | 1 | 0 | 2 |

### host:720353

Calls written directly in this body: `entry.isDirectory`, `errorLogTag`, `removeSandDataTree`, `reportSessionDiagnostic`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `a5eba9e475dca000413db14479ddbe148fa29bf7c3b4b5667cd51516211f713b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
