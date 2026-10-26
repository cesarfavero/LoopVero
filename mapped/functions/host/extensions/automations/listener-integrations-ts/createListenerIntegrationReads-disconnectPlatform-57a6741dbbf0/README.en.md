# `createListenerIntegrationReads/disconnectPlatform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505520-505532](../../../../../../../reference/runtime/host-main.cjs#L505520-L505532) | `FunctionExpression` | yes | `platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505520-505532](../../../../../../../reference/runtime/host-main.cjs#L505520-L505532) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:505520

Calls written directly in this body: `.disconnectGithub`, `dashboard`, `invariant`, `new DisconnectGithubRequest`.

SHA-256 of the source span: `532d829e658ef2d95aff1784251e81104a0f8849f72685a51e46e6e87a7e2321`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
