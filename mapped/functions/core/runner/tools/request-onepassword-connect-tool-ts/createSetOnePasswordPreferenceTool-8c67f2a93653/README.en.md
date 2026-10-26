# `createSetOnePasswordPreferenceTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751695-751720](../../../../../../../reference/runtime/host-main.cjs#L751695-L751720) | `FunctionDeclaration` | no | `deps` |
| [evaluation:524762-524787](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524762-L524787) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751695-751720](../../../../../../../reference/runtime/host-main.cjs#L751695-L751720) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524762-524787](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524762-L524787) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751695

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `f54e5732250bb07c29ce9c643f15ecbce6d01f0268885523126f654f0cdb5db4`.

### evaluation:524762

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `f54e5732250bb07c29ce9c643f15ecbce6d01f0268885523126f654f0cdb5db4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
