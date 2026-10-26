# `memoryParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771622-771650](../../../../../../../../reference/runtime/host-main.cjs#L771622-L771650) | `FunctionDeclaration` | no | `memoryTypes, teamBot` |
| [evaluation:570855-570883](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570855-L570883) | `FunctionDeclaration` | no | `memoryTypes, teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771622-771650](../../../../../../../../reference/runtime/host-main.cjs#L771622-L771650) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:570855-570883](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570855-L570883) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:771622

Calls written directly in this body: `.describe`, `.min`, `.trim`, `base.extend`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`, `nonEmptyTuple`, `offered.map`, `offered.some`, `offeredMemoryTypes`, `withMetaParameter.extend`.

SHA-256 of the source span: `75be84d5b87770cd6720e73f29e218c261bebed6f4eba98937341a50679bb576`.

### evaluation:570855

Calls written directly in this body: `.describe`, `.min`, `.trim`, `base.extend`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`, `nonEmptyTuple`, `offered.map`, `offered.some`, `offeredMemoryTypes`, `withMetaParameter.extend`.

SHA-256 of the source span: `f747def2ed04ac499375d63a2cce00bf03fbf56596821539977526e0858e8a6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
