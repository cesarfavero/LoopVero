# `AgentLifecycle.deleteAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733622-733633](../../../../../../../reference/runtime/host-main.cjs#L733622-L733633) | `method` | sim | `agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733622-733633](../../../../../../../reference/runtime/host-main.cjs#L733622-L733633) | 2 | 1 | 1 | 2 | 1 | 1 |

### host:733622

Chamadas escritas diretamente neste corpo: `emptyDeleteStats`, `getTranscript`, `new Set`, `this.runDeleteAgents`, `this.tm.sessionStore.agentDirExists`, `this.tm.sessions.deletedAgentIds.delete`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `383fb87fb0acd3b28aecadc99f9fc9acef1eaf3cef1922b8bc701241b935e4d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
