# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/extension.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506287-506300](../../../../../../../reference/runtime/host-main.cjs#L506287-L506300) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506287-506300](../../../../../../../reference/runtime/host-main.cjs#L506287-L506300) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506287 uses an implicit arrow-function return.

### host:506287

Calls written directly in this body: `createBotTemplateShareService`, `createGrokBotTemplateStore`, `createSandCursorBackendClient`.

SHA-256 of the source span: `417463fd3a6f861cf95207b43ed529581052263f97c4ecf4ba50260b2b5ce1ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
