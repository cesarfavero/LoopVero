# `oneTimeCodeGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751818-751821](../../../../../../../reference/runtime/host-main.cjs#L751818-L751821) | `FunctionDeclaration` | no | `vaultOnly` |
| [evaluation:524884-524887](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524884-L524887) | `FunctionDeclaration` | no | `vaultOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751818-751821](../../../../../../../reference/runtime/host-main.cjs#L751818-L751821) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524884-524887](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524884-L524887) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751818

Calls written directly in this body: `oneTimeCodeMark`.

SHA-256 of the source span: `b071b8d71b24a17e41d7042d93630dcc0874bcd4937ec1573732186b3c256eeb`.

### evaluation:524884

Calls written directly in this body: `oneTimeCodeMark`.

SHA-256 of the source span: `b071b8d71b24a17e41d7042d93630dcc0874bcd4937ec1573732186b3c256eeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
