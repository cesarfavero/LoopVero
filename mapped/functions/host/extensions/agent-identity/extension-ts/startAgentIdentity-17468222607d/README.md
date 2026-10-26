# `startAgentIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496566-496953](../../../../../../../reference/runtime/host-main.cjs#L496566-L496953) | `FunctionDeclaration` | não | `{   context: context2,   client = createSandCursorBackendClient(GrokBotService, {     backend: context2.host.environment.backend,     getAccessToken: context2.deps.auth.getAccessToken,     getTeamId: context2.deps.auth.getTeamId,     getMachineId: context2.deps.auth.getMachineId   }) }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496566-496953](../../../../../../../reference/runtime/host-main.cjs#L496566-L496953) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496566

Chamadas escritas diretamente neste corpo: `.catch`, `context2.deps.auth.subscribeToRenewal`, `context2.deps.transcript.subscribeProfileChanged`, `context2.onStop`, `createDeadlinePolicy`, `createRetryPolicy`, `createSingleFlight`, `initialize`, `new AbortController`, `new Map`, `new SandAgentIdentityService`, `new Set`.

SHA-256 do trecho: `f287a246069ac3ff32b3b688f57dc0b03e1d47cb0eade1e74c9fdb58599d4ff1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
