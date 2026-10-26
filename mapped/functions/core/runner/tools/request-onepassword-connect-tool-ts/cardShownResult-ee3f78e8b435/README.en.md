# `cardShownResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751650-751653](../../../../../../../reference/runtime/host-main.cjs#L751650-L751653) | `FunctionDeclaration` | no | `brokered` |
| [evaluation:524717-524720](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524717-L524720) | `FunctionDeclaration` | no | `brokered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751650-751653](../../../../../../../reference/runtime/host-main.cjs#L751650-L751653) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524717-524720](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524717-L524720) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751650

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `972a1ef7ce5288565655c573f7ce4dcc939d58d0a4fd5cfff10f9bb2a1e1c4dd`.

### evaluation:524717

Calls written directly in this body: `credentialLoginRoutingTool`.

SHA-256 of the source span: `972a1ef7ce5288565655c573f7ce4dcc939d58d0a4fd5cfff10f9bb2a1e1c4dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
