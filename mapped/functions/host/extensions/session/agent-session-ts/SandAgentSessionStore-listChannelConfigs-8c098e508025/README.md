# `SandAgentSessionStore.listChannelConfigs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723648-723661](../../../../../../../reference/runtime/host-main.cjs#L723648-L723661) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723648-723661](../../../../../../../reference/runtime/host-main.cjs#L723648-L723661) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:723648

Chamadas escritas diretamente neste corpo: `configs.push`, `store.listPlatforms`, `store.readLabel`, `this.connectorSecrets.getSecret`, `this.openChannelStore`.

SHA-256 do trecho: `bbefbb1a790f7b465f8940144306a095a5d843b906acc202055c04a1733ea029`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
