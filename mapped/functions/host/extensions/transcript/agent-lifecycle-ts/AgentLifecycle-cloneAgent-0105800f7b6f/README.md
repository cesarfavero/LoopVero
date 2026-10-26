# `AgentLifecycle.cloneAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733515-733559](../../../../../../../reference/runtime/host-main.cjs#L733515-L733559) | `method` | sim | `sourceId, provision` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733515-733559](../../../../../../../reference/runtime/host-main.cjs#L733515-L733559) | 3 | 0 | 4 | 1 | 2 | 0 |

### host:733515

Chamadas escritas diretamente neste corpo: `.find`, `cloneAgentDisplayName`, `new SandAgentLifecycleError`, `provision`, `this.commitOpenedSession`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.mintAgent`.

Alvos de lançamento explícito: `SandAgentLifecycleError`.

SHA-256 do trecho: `85bc256494e6216304a58e3109ad6ec2e12bdd4c7327c480928a3b0f8c27b0a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
