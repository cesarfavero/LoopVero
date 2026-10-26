# `SandAgentSessionStore.readConversationBlobsByHexIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723189-723199](../../../../../../../reference/runtime/host-main.cjs#L723189-L723199) | `method` | sim | `agentId, blobIdsHex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723189-723199](../../../../../../../reference/runtime/host-main.cjs#L723189-L723199) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723189

Chamadas escritas diretamente neste corpo: `.getConversationBlobsByHexIds`, `getAgentDbPath`, `this.materialization.requireWorkerPool`.

SHA-256 do trecho: `8c75c90f0a7beec3b064f7f48750204c15bc14cbaee0475585650df7273ff8b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
