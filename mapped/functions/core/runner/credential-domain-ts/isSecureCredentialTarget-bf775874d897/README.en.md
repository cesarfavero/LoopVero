# `isSecureCredentialTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546797-546801](../../../../../../reference/runtime/host-main.cjs#L546797-L546801) | `FunctionDeclaration` | no | `rawTarget` |
| [evaluation:481986-481990](../../../../../../reference/runtime/sand-eval-runner.cjs#L481986-L481990) | `FunctionDeclaration` | no | `rawTarget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546797-546801](../../../../../../reference/runtime/host-main.cjs#L546797-L546801) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481986-481990](../../../../../../reference/runtime/sand-eval-runner.cjs#L481986-L481990) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:546797

Calls written directly in this body: `isLoopbackHostname2`, `normalizedHostname2`, `parseHttpUrl`.

SHA-256 of the source span: `c347e040554d21dbac4213e46ac41101a5f88d6aae05072f06d37901578e2500`.

### evaluation:481986

Calls written directly in this body: `isLoopbackHostname`, `normalizedHostname`, `parseHttpUrl`.

SHA-256 of the source span: `6038389ad33e6d215af30373d68405fd746f6aa5fcdbb38a96cb26dd13eab63b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
