# `AgentLifecycle.setAgentDraftingDisabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733822-733824](../../../../../../../reference/runtime/host-main.cjs#L733822-L733824) | `method` | sim | `agentId, isDisabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733822-733824](../../../../../../../reference/runtime/host-main.cjs#L733822-L733824) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:733822

Chamadas escritas diretamente neste corpo: `this.tm.sessionStore.setSessionDraftingDisabled`.

SHA-256 do trecho: `785773d8a7f429cfcde38024791aedc1c527c5c4e03190e1f95abcb4c5c8d89c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
