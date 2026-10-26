# `requirePresent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755237-755243](../../../../../../../reference/runtime/host-main.cjs#L755237-L755243) | `FunctionDeclaration` | no | `value, field, platform2` |
| [evaluation:541117-541123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541117-L541123) | `FunctionDeclaration` | no | `value, field, platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755237-755243](../../../../../../../reference/runtime/host-main.cjs#L755237-L755243) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541117-541123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541117-L541123) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755237

Calls written directly in this body: `invariant`.

SHA-256 of the source span: `c16289a48a812c5ec650ee7b89cf32819d88e16be1b9134c02bed9000a9270fe`.

### evaluation:541117

Calls written directly in this body: `invariant`.

SHA-256 of the source span: `9cddcf06e06c5549e8689494b019abd2a9c7d1817cd2e751ce8ae20b8ca5a8f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
