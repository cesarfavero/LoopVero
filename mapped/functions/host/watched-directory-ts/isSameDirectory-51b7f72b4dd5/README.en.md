# `isSameDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684351-684353](../../../../../reference/runtime/host-main.cjs#L684351-L684353) | `FunctionDeclaration` | no | `armed, onDisk` |
| [evaluation:627675-627677](../../../../../reference/runtime/sand-eval-runner.cjs#L627675-L627677) | `FunctionDeclaration` | no | `armed, onDisk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684351-684353](../../../../../reference/runtime/host-main.cjs#L684351-L684353) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627675-627677](../../../../../reference/runtime/sand-eval-runner.cjs#L627675-L627677) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684351

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f6f718f6aab30ac591d2b1c1a1fd9a9ead2235747d913c9be633e6c24a114a1f`.

### evaluation:627675

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f6f718f6aab30ac591d2b1c1a1fd9a9ead2235747d913c9be633e6c24a114a1f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
