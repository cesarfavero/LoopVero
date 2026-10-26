# `readBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453806-453821](../../../../../reference/runtime/host-main.cjs#L453806-L453821) | `FunctionDeclaration` | yes | `file2, path33, maxBytes, sizeHint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453806-453821](../../../../../reference/runtime/host-main.cjs#L453806-L453821) | 3 | 1 | 1 | 1 | 1 | 0 |

### host:453806

Calls written directly in this body: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `file2.read`, `oversizedSandDataFile`.

Assignment or increment targets: `buffer`, `length`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `37f2a447efbb2754b67b186f19f93e4b2e2d29201a31e7b11db93318f35b099b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
