# `resolveProjectDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:626997-627000](../../../../../../reference/runtime/sand-eval-runner.cjs#L626997-L627000) | `FunctionDeclaration` | no | `override` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:626997-627000](../../../../../../reference/runtime/sand-eval-runner.cjs#L626997-L627000) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:626997

Calls written directly in this body: `override.trim`.

SHA-256 of the source span: `cd20a29f686b17aa60768d1ffb389f221f3540cf044a02f5dc9b9b3a406386cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
