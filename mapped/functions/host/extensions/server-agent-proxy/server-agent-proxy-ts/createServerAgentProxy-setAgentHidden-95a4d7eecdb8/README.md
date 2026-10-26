# `createServerAgentProxy/setAgentHidden`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714885-714897](../../../../../../../reference/runtime/host-main.cjs#L714885-L714897) | `ArrowFunctionExpression` | sim | `agentId, isHidden` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714885-714897](../../../../../../../reference/runtime/host-main.cjs#L714885-L714897) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:714885

Chamadas escritas diretamente neste corpo: `actionClient.setGrokBotAgentClientState`, `classifyServerAgentActionError`, `ensureTailStarted`, `patchClientOverlay`.

SHA-256 do trecho: `494e40eba69379d62dd0995e79b30d69bb7f28762229ac5840c9dedbf1dd5ca2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
