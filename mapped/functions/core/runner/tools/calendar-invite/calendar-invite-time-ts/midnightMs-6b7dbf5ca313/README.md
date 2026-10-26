# `midnightMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764003-764006](../../../../../../../../reference/runtime/host-main.cjs#L764003-L764006) | `FunctionDeclaration` | não | `date6, timeZone` |
| [evaluation:557377-557380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557377-L557380) | `FunctionDeclaration` | não | `date6, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764003-764006](../../../../../../../../reference/runtime/host-main.cjs#L764003-L764006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557377-557380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557377-L557380) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764003

Chamadas escritas diretamente neste corpo: `Date.UTC`, `zoneOffsetMs`.

SHA-256 do trecho: `84e8c46130f644ca301234a009e0ada1d8aa3a5cc47d5d699ca39850f1c94b58`.

### evaluation:557377

Chamadas escritas diretamente neste corpo: `Date.UTC`, `zoneOffsetMs`.

SHA-256 do trecho: `84e8c46130f644ca301234a009e0ada1d8aa3a5cc47d5d699ca39850f1c94b58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
