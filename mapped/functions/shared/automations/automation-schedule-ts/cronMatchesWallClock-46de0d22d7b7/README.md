# `cronMatchesWallClock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682364-682368](../../../../../../reference/runtime/host-main.cjs#L682364-L682368) | `FunctionDeclaration` | não | `matcher, wall` |
| [evaluation:526578-526582](../../../../../../reference/runtime/sand-eval-runner.cjs#L526578-L526582) | `FunctionDeclaration` | não | `matcher, wall` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682364-682368](../../../../../../reference/runtime/host-main.cjs#L682364-L682368) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526578-526582](../../../../../../reference/runtime/sand-eval-runner.cjs#L526578-L526582) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:682364

Chamadas escritas diretamente neste corpo: `cronDayMatches`, `matcher.hour.has`, `matcher.minute.has`.

SHA-256 do trecho: `68d920ac1eb4d6b6a05932c433763bd9d0831aa614ee402d597d7fa3df098867`.

### evaluation:526578

Chamadas escritas diretamente neste corpo: `cronDayMatches`, `matcher.hour.has`, `matcher.minute.has`.

SHA-256 do trecho: `68d920ac1eb4d6b6a05932c433763bd9d0831aa614ee402d597d7fa3df098867`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
