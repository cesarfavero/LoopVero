# `clampAgentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-messaging.ts` · [Module README](../../../../../modules/core/agents/agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734315-734317](../../../../../../reference/runtime/host-main.cjs#L734315-L734317) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734315-734317](../../../../../../reference/runtime/host-main.cjs#L734315-L734317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734315

Calls written directly in this body: `clampBlock`.

SHA-256 of the source span: `d42e2ba502c939ed16efb1a3dd24b771caa0893dad31bdc1af17204e57d4b772`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
