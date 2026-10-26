# `getZonedFormatter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682389-682409](../../../../../../reference/runtime/host-main.cjs#L682389-L682409) | `FunctionDeclaration` | não | `timeZone` |
| [evaluation:526603-526623](../../../../../../reference/runtime/sand-eval-runner.cjs#L526603-L526623) | `FunctionDeclaration` | não | `timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682389-682409](../../../../../../reference/runtime/host-main.cjs#L682389-L682409) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:526603-526623](../../../../../../reference/runtime/sand-eval-runner.cjs#L526603-L526623) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:682389

Chamadas escritas diretamente neste corpo: `new Intl.DateTimeFormat`, `zonedFormatterCache.get`, `zonedFormatterCache.set`.

Alvos de atribuição ou incremento: `formatter`.

SHA-256 do trecho: `c948f6b17287067997329ff8d221c0ce3491513609355fdb6c2791781c601487`.

### evaluation:526603

Chamadas escritas diretamente neste corpo: `new Intl.DateTimeFormat`, `zonedFormatterCache.get`, `zonedFormatterCache.set`.

Alvos de atribuição ou incremento: `formatter`.

SHA-256 do trecho: `c948f6b17287067997329ff8d221c0ce3491513609355fdb6c2791781c601487`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
