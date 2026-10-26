# `encodeRepositoriesCursor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/repositories-cursor.ts` · [Module README](../../../../../modules/core/cloud-agents/repositories-cursor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512435-512452](../../../../../../reference/runtime/host-main.cjs#L512435-L512452) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512435-512452](../../../../../../reference/runtime/host-main.cjs#L512435-L512452) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:512435

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.stringify`, `encodeOriginWalk`, `state.units.map`.

SHA-256 of the source span: `2bdec2f55001c20d9700edb51e6f9057ba0f01804d5f105649bad441143904e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
