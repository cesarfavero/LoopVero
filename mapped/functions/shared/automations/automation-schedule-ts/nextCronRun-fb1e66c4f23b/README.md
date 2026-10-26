# `nextCronRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682430-682456](../../../../../../reference/runtime/host-main.cjs#L682430-L682456) | `FunctionDeclaration` | não | `matcher, afterMs, wallClockOf` |
| [evaluation:526644-526670](../../../../../../reference/runtime/sand-eval-runner.cjs#L526644-L526670) | `FunctionDeclaration` | não | `matcher, afterMs, wallClockOf` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682430-682456](../../../../../../reference/runtime/host-main.cjs#L682430-L682456) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:526644-526670](../../../../../../reference/runtime/sand-eval-runner.cjs#L526644-L526670) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:682430

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `cronDayMatches`, `cronMatchesWallClock`, `isSameWallClockDay`, `new Date`, `wallClockOf`.

Alvos de atribuição ou incremento: `cursorMs`.

SHA-256 do trecho: `304d10ce7243262afeaa7cf11c5905c9995aa26f08ce004684a0cc0b47e95f68`.

### evaluation:526644

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `cronDayMatches`, `cronMatchesWallClock`, `isSameWallClockDay`, `new Date`, `wallClockOf`.

Alvos de atribuição ou incremento: `cursorMs`.

SHA-256 do trecho: `b8017bbe5ba1e19d04bd2e23a835c4b8d7d573313108cb8eb5a081c95e1e13b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
