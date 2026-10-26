# `inviteTimesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763936-763968](../../../../../../../../reference/runtime/host-main.cjs#L763936-L763968) | `FunctionDeclaration` | não | `{   start,   end,   timeZone }` |
| [evaluation:557310-557342](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557310-L557342) | `FunctionDeclaration` | não | `{   start,   end,   timeZone }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763936-763968](../../../../../../../../reference/runtime/host-main.cjs#L763936-L763968) | 8 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:557310-557342](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557310-L557342) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:763936

Chamadas escritas diretamente neste corpo: `DATE_ONLY3.test`, `Date.parse`, `HAS_OFFSET.test`, `ISO_DATE_TIME.test`, `Number.isFinite`, `invalid`, `midnightMs`, `realDateOf`.

SHA-256 do trecho: `a52f3017f1ffa8bc24884e45ad9a3508f4e7b5b3fe96e6aea04503602bbd4ac0`.

### evaluation:557310

Chamadas escritas diretamente neste corpo: `DATE_ONLY3.test`, `Date.parse`, `HAS_OFFSET.test`, `ISO_DATE_TIME.test`, `Number.isFinite`, `invalid`, `midnightMs`, `realDateOf`.

SHA-256 do trecho: `a52f3017f1ffa8bc24884e45ad9a3508f4e7b5b3fe96e6aea04503602bbd4ac0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
