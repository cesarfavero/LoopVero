# `formatTrialLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-subscription-usage-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766629-766634](../../../../../../../reference/runtime/host-main.cjs#L766629-L766634) | `FunctionDeclaration` | não | `trialExpiresAtMs, nowMs2` |
| [evaluation:562142-562147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562142-L562147) | `FunctionDeclaration` | não | `trialExpiresAtMs, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766629-766634](../../../../../../../reference/runtime/host-main.cjs#L766629-L766634) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562142-562147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562142-L562147) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:766629

Chamadas escritas diretamente neste corpo: `formatCountdown`, `formatUtcTimestamp`.

SHA-256 do trecho: `a63febf5919c90102e835327ec5083fcdcb74e1c4857cd2515e08930807f5bc1`.

### evaluation:562142

Chamadas escritas diretamente neste corpo: `formatCountdown`, `formatUtcTimestamp`.

SHA-256 do trecho: `7c17e0ee48a72e4e7f37d0aca07eab018cb7727c19d0812e281dd278df5c1bfd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
