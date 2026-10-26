# `parseManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:576091-576098](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576091-L576098) | `FunctionDeclaration` | no | `json3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:576091-576098](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576091-L576098) | 1 | 0 | 0 | 2 | 0 | 1 |

### evaluation:576091

Calls written directly in this body: `JSON.parse`, `manifestSchema.safeParse`.

SHA-256 of the source span: `f4024efb04f3d1300c534a6ddf4fc207922057a18fece075b5537ec8e5e10dcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
