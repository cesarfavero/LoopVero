# `takeoverUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725279-725288](../../../../../../../reference/runtime/host-main.cjs#L725279-L725288) | `FunctionDeclaration` | no | `raw` |
| [evaluation:560365-560374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560365-L560374) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725279-725288](../../../../../../../reference/runtime/host-main.cjs#L725279-L725288) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:560365-560374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560365-L560374) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:725279

Calls written directly in this body: `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `510fd72acfe20e0d3626ed2ee8c66878ef71296cef8a16534e2bb58681e792c6`.

### evaluation:560365

Calls written directly in this body: `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `510fd72acfe20e0d3626ed2ee8c66878ef71296cef8a16534e2bb58681e792c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
