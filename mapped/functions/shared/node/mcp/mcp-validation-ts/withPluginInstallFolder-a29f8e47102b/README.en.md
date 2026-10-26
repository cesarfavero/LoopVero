# `withPluginInstallFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-validation.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686537-686552](../../../../../../../reference/runtime/host-main.cjs#L686537-L686552) | `FunctionDeclaration` | no | `config2, installFolder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686537-686552](../../../../../../../reference/runtime/host-main.cjs#L686537-L686552) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:686537

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `config2.args.map`, `expand2`.

SHA-256 of the source span: `620968213825598d20d0662fa42bb6920b30194a71d4e99a0bc71acfe2f5aa07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
