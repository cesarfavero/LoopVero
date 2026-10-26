# `WidgetResponses.reactToMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783135-783145](../../../../../../../reference/runtime/host-main.cjs#L783135-L783145) | `method` | sim | `entryId, emoji3, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783135-783145](../../../../../../../reference/runtime/host-main.cjs#L783135-L783145) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:783135

Chamadas escritas diretamente neste corpo: `emoji3.trim`, `this.applyReaction`, `this.tm.sessions.ensureActionTarget`.

SHA-256 do trecho: `d38be99caa747d180bd613314e34bdda4aa8510cf58e4dac7327e31635955c7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
