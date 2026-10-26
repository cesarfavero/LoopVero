# `createServerAgentProxy/stopTailAfterLinger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714767-714776](../../../../../../../reference/runtime/host-main.cjs#L714767-L714776) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714767-714776](../../../../../../../reference/runtime/host-main.cjs#L714767-L714776) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714767

Calls written directly in this body: `cancelLinger`, `clock.schedule`.

Assignment or increment targets: `lingerWait`.

SHA-256 of the source span: `2b8328570005cc70106d5e81f4b74b5ac705b960bc0071e39554294e5d892ce5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
