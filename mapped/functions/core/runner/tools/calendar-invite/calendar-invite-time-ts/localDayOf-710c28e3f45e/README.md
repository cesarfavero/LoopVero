# `localDayOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763969-763976](../../../../../../../../reference/runtime/host-main.cjs#L763969-L763976) | `FunctionDeclaration` | não | `instantMs, timeZone` |
| [evaluation:557343-557350](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557343-L557350) | `FunctionDeclaration` | não | `instantMs, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763969-763976](../../../../../../../../reference/runtime/host-main.cjs#L763969-L763976) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557343-557350](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557343-L557350) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763969

Chamadas escritas diretamente neste corpo: `midnightMs`, `wallClockOfInstant`.

SHA-256 do trecho: `a38844cc31126384dd19a933289889316eb03d5adfe217a4a5a7ef4724d6a9c8`.

### evaluation:557343

Chamadas escritas diretamente neste corpo: `midnightMs`, `wallClockOfInstant`.

SHA-256 do trecho: `a38844cc31126384dd19a933289889316eb03d5adfe217a4a5a7ef4724d6a9c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
