# `SandAgentSessionStore.storeConnectorCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723662-723692](../../../../../../../reference/runtime/host-main.cjs#L723662-L723692) | `method` | não | `agentId, platform2, field, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723662-723692](../../../../../../../reference/runtime/host-main.cjs#L723662-L723692) | 9 | 0 | 0 | 7 | 1 | 2 |

### host:723662

Chamadas escritas diretamente neste corpo: `channels.metadataPresence`, `channels.remove`, `channels.writeMetadata`, `isSafeFolderId`, `reportFallback`, `this.connectorSecrets.setSecret`, `this.openChannelStore`.

Alvos de atribuição ou incremento: `write4`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `7f9af3f03e196ca71d6ee4f76a1ddb9e3aa90a7bc059f549b37537b48b65a56c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
