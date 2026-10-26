# `defineCommunicateTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725101-725112](../../../../../../../reference/runtime/host-main.cjs#L725101-L725112) | `FunctionDeclaration` | no | `deps, spec` |
| [evaluation:480072-480083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480072-L480083) | `FunctionDeclaration` | no | `deps, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725101-725112](../../../../../../../reference/runtime/host-main.cjs#L725101-L725112) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480072-480083](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480072-L480083) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725101

Calls written directly in this body: `buildCommunicateTool`, `external_exports2.preprocess`, `topLevelArgKeysOf`.

SHA-256 of the source span: `1192896d3e05cb625aa8a9b35bf1c76be8b5790af658334fa3fdde4688f0d480`.

### evaluation:480072

Calls written directly in this body: `buildCommunicateTool`, `external_exports3.preprocess`, `topLevelArgKeysOf`.

SHA-256 of the source span: `7472692790fa7f41a36bc2e7565c6de996cd9202deb8490bc4f34af0e53555e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
