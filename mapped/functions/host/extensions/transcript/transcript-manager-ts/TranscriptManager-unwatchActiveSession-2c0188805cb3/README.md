# `TranscriptManager.unwatchActiveSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-manager.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783387-783393](../../../../../../../reference/runtime/host-main.cjs#L783387-L783393) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783387-783393](../../../../../../../reference/runtime/host-main.cjs#L783387-L783393) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:783387

Chamadas escritas diretamente neste corpo: `this.automationRuntime.watchedAutomations.setOnChange`, `this.roster.stopWatchingProfile`, `this.skillCommands.watchedSkills.setOnChange`.

Alvos de atribuição ou incremento: `this.automationRuntime.watchedAutomations`, `this.skillCommands.watchedSkills`.

SHA-256 do trecho: `7205bf788f4516d2e195246a959280602f12fc75fac8718da611c0494e905084`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
