# `startAgentIdentity/adoptServerAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496941-496941](../../../../../../../reference/runtime/host-main.cjs#L496941-L496941) | `ArrowFunctionExpression` | no | `wire` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496941-496941](../../../../../../../reference/runtime/host-main.cjs#L496941-L496941) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496941 uses an implicit arrow-function return.

### host:496941

Calls written directly in this body: `service.adoptServerAgent`.

SHA-256 of the source span: `90b66da9b8c130dd13c84a9b6add6b9434e3257f5b3f8252482712c04daca001`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
