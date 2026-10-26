# `unlinkFinalLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453579-453596](../../../../../reference/runtime/host-main.cjs#L453579-L453596) | `FunctionDeclaration` | yes | `path33, root, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453579-453596](../../../../../reference/runtime/host-main.cjs#L453579-L453596) | 2 | 0 | 4 | 1 | 0 | 0 |

### host:453579

Calls written directly in this body: `.catch`, `entryOf`, `info2.isSymbolicLink`, `openParentNoFollow2`, `parent.handle.close`.

SHA-256 of the source span: `5e907a265ff7b1c97221dc164693b549f248561d12859a9888028fbae789928c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
