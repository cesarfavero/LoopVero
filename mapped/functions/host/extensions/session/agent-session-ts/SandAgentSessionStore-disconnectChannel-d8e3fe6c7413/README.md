# `SandAgentSessionStore.disconnectChannel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723693-723703](../../../../../../../reference/runtime/host-main.cjs#L723693-L723703) | `method` | não | `agentId, platform2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723693-723703](../../../../../../../reference/runtime/host-main.cjs#L723693-L723703) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:723693

Chamadas escritas diretamente neste corpo: `channels.remove`, `channels.writeMetadata`, `this.connectorSecrets.removeAgentPlatform`, `this.openChannelStore`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `433d84c11b5573c76c8dda27f2ddd9e10781236e617c73687630ff63e2ed4b55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
