# `createIdleDestroyingAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714151-714156](../../../../../../../reference/runtime/host-main.cjs#L714151-L714156) | `FunctionDeclaration` | no | `{   baseUrl,   idleMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714151-714156](../../../../../../../reference/runtime/host-main.cjs#L714151-L714156) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:714151

Calls written directly in this body: `new IdleDestroyingHttpAgent`, `new IdleDestroyingHttpsAgent`, `new URL`.

SHA-256 of the source span: `e336dc6744f9b20ba911f9fa9c08e6fafba5f0f9c0386a48c3b2907114429adc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
