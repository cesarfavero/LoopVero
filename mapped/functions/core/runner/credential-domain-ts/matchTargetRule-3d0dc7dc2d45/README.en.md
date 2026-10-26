# `matchTargetRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546810-546824](../../../../../../reference/runtime/host-main.cjs#L546810-L546824) | `FunctionDeclaration` | no | `rule, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546810-546824](../../../../../../reference/runtime/host-main.cjs#L546810-L546824) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:546810

Calls written directly in this body: `.toLowerCase`, `normalizedHostname2`, `normalizedPort`, `rule.host.toLowerCase`, `rule.registrableDomain.toLowerCase`.

SHA-256 of the source span: `956fda44935e4b5cbcd9fba2e4ecad6b061f10917da5d1dd2235edec53f1aa07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
