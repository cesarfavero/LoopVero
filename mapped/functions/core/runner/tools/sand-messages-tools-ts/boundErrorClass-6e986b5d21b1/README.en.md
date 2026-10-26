# `boundErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778132-778135](../../../../../../../reference/runtime/host-main.cjs#L778132-L778135) | `FunctionDeclaration` | no | `error64` |
| [evaluation:577867-577870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577867-L577870) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778132-778135](../../../../../../../reference/runtime/host-main.cjs#L778132-L778135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577867-577870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577867-L577870) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778132

Calls written directly in this body: `MESSAGES_ERROR_CLASSES.find`, `errorClassOf`.

SHA-256 of the source span: `c13c50b94d11eae34c553b7ef6a13e9302e4c191b15e7de270259a1217251db7`.

### evaluation:577867

Calls written directly in this body: `MESSAGES_ERROR_CLASSES.find`, `errorClassOf`.

SHA-256 of the source span: `44e742195b11d92924bcc74d0fb43c598b879720afd5fa6ada7f53ea16dbc72d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
