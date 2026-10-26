# `handleRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493851-493962](../../../../../reference/runtime/host-main.cjs#L493851-L493962) | `FunctionDeclaration` | sim | `deps, req, res, eventStreamEchoes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493851-493962](../../../../../reference/runtime/host-main.cjs#L493851-L493962) | 25 | 1 | 5 | 21 | 0 | 0 |

### host:493851

Chamadas escritas diretamente neste corpo: `GATEWAY_EVENTS_ECHO_NONCE_PATTERN.test`, `SECRET_VALUE_COMMANDS.has`, `deps.getHealth`, `deps.isWebAuthnProxyCredentialLive`, `deps.onDesktopContact`, `deps.onWebAuthnProxyRefused`, `deps.prepareForUpgrade`, `echo`, `handleAttachmentStream`, `handleAvatarImage`, `handleCookieOriginApprovalRequests`, `handleCookieOriginApprovalResponses`, `handleEvents`, `handleLocalExecRequests`, `handleLocalExecResponses`, `handleWebAuthnRequests`, `handleWebAuthnResponses`, `isAuthorized`, `new URL`, `readBody`, `rejectUntrustedBrowserRequest`, `respondError`, `respondJson`, `routeCommand`, `url2.pathname.slice`, `url2.pathname.startsWith`, `url2.searchParams.get`, `webAuthnProxyRefusal`, `webAuthnProxyRefusalMessage`.

SHA-256 do trecho: `e7f28ace14ccff22dfec3b4dda078a57eec40567db52c31d34efdb061a8b3879`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
