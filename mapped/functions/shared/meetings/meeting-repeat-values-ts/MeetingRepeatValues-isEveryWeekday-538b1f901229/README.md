# `_MeetingRepeatValues.isEveryWeekday`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-repeat-values.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-repeat-values-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:694004-694007](../../../../../../reference/runtime/host-main.cjs#L694004-L694007) | `method` | não | `days` |
| [evaluation:490075-490078](../../../../../../reference/runtime/sand-eval-runner.cjs#L490075-L490078) | `method` | não | `days` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694004-694007](../../../../../../reference/runtime/host-main.cjs#L694004-L694007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490075-490078](../../../../../../reference/runtime/sand-eval-runner.cjs#L490075-L490078) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694004

Chamadas escritas diretamente neste corpo: `workweek.every`.

SHA-256 do trecho: `c7639ba7d6aeb83e0756e6eec2e787b658bef450d2127b5ec75061a90f780daf`.

### evaluation:490075

Chamadas escritas diretamente neste corpo: `workweek.every`.

SHA-256 do trecho: `c7639ba7d6aeb83e0756e6eec2e787b658bef450d2127b5ec75061a90f780daf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
