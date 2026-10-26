# `start/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714992-714992](../../../../../../../reference/runtime/host-main.cjs#L714992-L714992) | `ArrowFunctionExpression` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714992-714992](../../../../../../../reference/runtime/host-main.cjs#L714992-L714992) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714992 uses an implicit arrow-function return.

### host:714992

Calls written directly in this body: `context2.host.log`.

SHA-256 of the source span: `e7d5fbb2f93f2bea891b91a44303c37461a9e73c95652e205f4e0979d073e5c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
