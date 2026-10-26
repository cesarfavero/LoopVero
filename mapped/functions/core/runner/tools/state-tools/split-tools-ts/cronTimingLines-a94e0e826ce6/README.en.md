# `cronTimingLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771894-771910](../../../../../../../../reference/runtime/host-main.cjs#L771894-L771910) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:571127-571143](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571127-L571143) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771894-771910](../../../../../../../../reference/runtime/host-main.cjs#L771894-L771910) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571127-571143](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571127-L571143) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:771894

Calls written directly in this body: `JSON.stringify`, `lines2.push`.

SHA-256 of the source span: `8f561e965418daafc0ea5f1cdd8076b92f6779a9dfe73fedb58c5868e3cdcc10`.

### evaluation:571127

Calls written directly in this body: `JSON.stringify`, `lines2.push`.

SHA-256 of the source span: `4d523cc5c37ce03801c9dcd616b2eab46889a9dfcb30736fd9a30520b7fafa10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
