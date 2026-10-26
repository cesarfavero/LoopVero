# `src/shared/node/cursor-token.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175772-175790](../../../../../../reference/runtime/host-main.cjs#L175772-L175790) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175772-175790](../../../../../../reference/runtime/host-main.cjs#L175772-L175790) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:175772

Calls written directly in this body: `.optional`, `.passthrough`, `init_dev_login`, `init_loopback_host`, `init_v4`, `number2`, `object`, `require`, `string2`.

Assignment or increment targets: `DEFAULT_CURSOR_BACKEND_URL`, `DEFAULT_CURSOR_DASHBOARD_URL`, `DEFAULT_LOCAL_DASHBOARD_URL`, `DEFAULT_ORIGIN_BACKEND_URL`, `DEV_AUTH_CLIENT_ID`, `PROD_AUTH_CLIENT_ID`, `TOKEN_REFRESH_LEEWAY_MS`, `import_node_crypto7`, `jwtPayloadSchema`.

SHA-256 of the source span: `6bcc521a96da121f8abf84c012a6dad4ec197528ece5101ddbb608d2254527b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
