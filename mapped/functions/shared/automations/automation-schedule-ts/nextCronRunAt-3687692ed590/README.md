# `nextCronRunAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682591-682596](../../../../../../reference/runtime/host-main.cjs#L682591-L682596) | `FunctionDeclaration` | não | `matcher, afterMs, timeZone` |
| [evaluation:526815-526820](../../../../../../reference/runtime/sand-eval-runner.cjs#L526815-L526820) | `FunctionDeclaration` | não | `matcher, afterMs, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682591-682596](../../../../../../reference/runtime/host-main.cjs#L682591-L682596) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526815-526820](../../../../../../reference/runtime/sand-eval-runner.cjs#L526815-L526820) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:682591

Chamadas escritas diretamente neste corpo: `getZonedFormatter`, `nextCronRun`.

SHA-256 do trecho: `6322554128f5a8c79b3d7eb972533bed55330f3fd74466fe472445552741358f`.

### evaluation:526815

Chamadas escritas diretamente neste corpo: `getZonedFormatter`, `nextCronRun`.

SHA-256 do trecho: `6322554128f5a8c79b3d7eb972533bed55330f3fd74466fe472445552741358f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
