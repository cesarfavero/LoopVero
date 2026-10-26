# `cronIntervalIsAtLeast`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682495-682521](../../../../../../reference/runtime/host-main.cjs#L682495-L682521) | `FunctionDeclaration` | não | `matcher, minimumIntervalMs` |
| [evaluation:526719-526745](../../../../../../reference/runtime/sand-eval-runner.cjs#L526719-L526745) | `FunctionDeclaration` | não | `matcher, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682495-682521](../../../../../../reference/runtime/host-main.cjs#L682495-L682521) | 3 | 2 | 0 | 4 | 0 | 0 |
| [evaluation:526719-526745](../../../../../../reference/runtime/sand-eval-runner.cjs#L526719-L526745) | 3 | 2 | 0 | 4 | 0 | 0 |

### host:682495

Chamadas escritas diretamente neste corpo: `.flatMap`, `.sort`, `Date.UTC`, `cronDayMatches`, `date6.getUTCDate`, `date6.getUTCDay`, `date6.getUTCMonth`, `new Date`.

Alvos de atribuição ou incremento: `dayMs`, `index`, `previousDayMatches`.

SHA-256 do trecho: `759f12dcceb3e4f925b7a05a038668511d211547dbc662fbdc01aa205eb6472b`.

### evaluation:526719

Chamadas escritas diretamente neste corpo: `.flatMap`, `.sort`, `Date.UTC`, `cronDayMatches`, `date6.getUTCDate`, `date6.getUTCDay`, `date6.getUTCMonth`, `new Date`.

Alvos de atribuição ou incremento: `dayMs`, `index`, `previousDayMatches`.

SHA-256 do trecho: `a721d8cc6b6b7b8075a10b891035d3076efd337b6ec07ab235cb5a1b114a29d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
