# `normalizeHttpProxyName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/http-proxy-name-override.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731728-731734](../../../../../../../reference/runtime/host-main.cjs#L731728-L731734) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731728-731734](../../../../../../../reference/runtime/host-main.cjs#L731728-L731734) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:731728

Calls written directly in this body: `VISIBLE_ASCII.test`, `raw.trim`.

SHA-256 of the source span: `5401d06e2036cd1ed021cdadac27f4ec733ff7fd8140ec7cfc13aa69c4db6dca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
