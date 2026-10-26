# `isCalendarDate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682900-682903](../../../../../../reference/runtime/host-main.cjs#L682900-L682903) | `FunctionDeclaration` | não | `{ month, day }` |
| [evaluation:527124-527127](../../../../../../reference/runtime/sand-eval-runner.cjs#L527124-L527127) | `FunctionDeclaration` | não | `{ month, day }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682900-682903](../../../../../../reference/runtime/host-main.cjs#L682900-L682903) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527124-527127](../../../../../../reference/runtime/sand-eval-runner.cjs#L527124-L527127) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682900

Chamadas escritas diretamente neste corpo: `date6.getDate`, `date6.getMonth`, `new Date`.

SHA-256 do trecho: `f6b03fd6212abb8238c291a44db0ae62ffb186247f57349712e41a087e3180e3`.

### evaluation:527124

Chamadas escritas diretamente neste corpo: `date6.getDate`, `date6.getMonth`, `new Date`.

SHA-256 do trecho: `f6b03fd6212abb8238c291a44db0ae62ffb186247f57349712e41a087e3180e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
