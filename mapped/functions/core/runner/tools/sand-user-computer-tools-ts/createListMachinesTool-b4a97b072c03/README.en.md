# `createListMachinesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-user-computer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778310-778333](../../../../../../../reference/runtime/host-main.cjs#L778310-L778333) | `FunctionDeclaration` | no | `userComputers` |
| [evaluation:578045-578068](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578045-L578068) | `FunctionDeclaration` | no | `userComputers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778310-778333](../../../../../../../reference/runtime/host-main.cjs#L778310-L778333) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578045-578068](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578045-L578068) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778310

Calls written directly in this body: `defineCommunicateTool`, `external_exports2.object`.

SHA-256 of the source span: `a95e5f614761db0ebccf4e9c3af50db33a0980fd345027915864ba53f149f83c`.

### evaluation:578045

Calls written directly in this body: `defineCommunicateTool`, `external_exports3.object`.

SHA-256 of the source span: `462d7f54b4f5b9361243b62ec0f7d5e697eea5a6f2b364ea8dda4d1f78ed0a30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
