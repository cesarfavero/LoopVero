# `src/shared/errors/bounded.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155199-155285](../../../../../../reference/runtime/host-main.cjs#L155199-L155285) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155199-155285](../../../../../../reference/runtime/host-main.cjs#L155199-L155285) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:155199

Calls written directly in this body: `BOUNDED_TELEMETRY_ERROR_NAMES.flatMap`, `Math.max`, `brandedEnumOf`, `new RegExp`.

Assignment or increment targets: `BOUNDED_TELEMETRY_ERROR_NAMES`, `BOUNDED_TELEMETRY_TOKENS`, `CAPPED_TEXT_CAPS`, `CAPPED_TEXT_CEILING`, `CLIENT_FAILURE_TOKEN`, `CONNECT_CODE_FALLBACK`, `CONNECT_CODE_TAGS`, `DNS_LABEL`, `ERROR_CLASS`, `ERROR_TAG`, `HOST`, `LOCALE`, `OPAQUE_ID`, `SAND_ERRNO_FALLBACK`, `SAND_ERRNO_TAGS`, `VERSION`, `brandedConnectCode`, `brandedErrno`, `brandedTelemetryToken`.

SHA-256 of the source span: `00a515a2cdd7f8804074eecf372d749e2d24fbcb2c6889aac1c21fc3f1e3f980`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
