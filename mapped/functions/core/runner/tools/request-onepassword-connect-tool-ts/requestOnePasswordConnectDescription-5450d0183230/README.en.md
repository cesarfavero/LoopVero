# `requestOnePasswordConnectDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751644-751649](../../../../../../../reference/runtime/host-main.cjs#L751644-L751649) | `FunctionDeclaration` | no | `brokered` |
| [evaluation:524711-524716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524711-L524716) | `FunctionDeclaration` | no | `brokered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751644-751649](../../../../../../../reference/runtime/host-main.cjs#L751644-L751649) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524711-524716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524711-L524716) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:751644

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `13e7785697a678c13566354a22e2e4ba06b15d020b81518e3e147737108d5c50`.

### evaluation:524711

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `13e7785697a678c13566354a22e2e4ba06b15d020b81518e3e147737108d5c50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
