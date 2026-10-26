# `chatValuesBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767891-767897](../../../../../../../../reference/runtime/host-main.cjs#L767891-L767897) | `FunctionDeclaration` | no | `names3` |
| [evaluation:563407-563413](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563407-L563413) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767891-767897](../../../../../../../../reference/runtime/host-main.cjs#L767891-L767897) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563407-563413](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563407-L563413) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767891

Calls written directly in this body: `names3.map`.

SHA-256 of the source span: `e4a1c5d545909a624f4e010235dd08e980244fdc94b56905ef22d6b87cedf80f`.

### evaluation:563407

Calls written directly in this body: `names3.map`.

SHA-256 of the source span: `e4a1c5d545909a624f4e010235dd08e980244fdc94b56905ef22d6b87cedf80f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
