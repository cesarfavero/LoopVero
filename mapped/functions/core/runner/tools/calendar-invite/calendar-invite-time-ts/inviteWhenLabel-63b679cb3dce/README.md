# `inviteWhenLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763977-763992](../../../../../../../../reference/runtime/host-main.cjs#L763977-L763992) | `FunctionDeclaration` | não | `times, timeZone` |
| [evaluation:557351-557366](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557351-L557366) | `FunctionDeclaration` | não | `times, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763977-763992](../../../../../../../../reference/runtime/host-main.cjs#L763977-L763992) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557351-557366](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557351-L557366) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:763977

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.DateTimeFormat`, `wallClockOfInstant`.

SHA-256 do trecho: `91b350705cba24e432e813535b4bea3fb7702725bba619c82870cf6aaa57127e`.

### evaluation:557351

Chamadas escritas diretamente neste corpo: `.format`, `new Intl.DateTimeFormat`, `wallClockOfInstant`.

SHA-256 do trecho: `91b350705cba24e432e813535b4bea3fb7702725bba619c82870cf6aaa57127e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
