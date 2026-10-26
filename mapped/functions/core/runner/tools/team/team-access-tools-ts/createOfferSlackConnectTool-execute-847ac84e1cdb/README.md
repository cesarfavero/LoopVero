# `createOfferSlackConnectTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/team-access-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781679-781685](../../../../../../../../reference/runtime/host-main.cjs#L781679-L781685) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:582026-582032](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582026-L582032) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781679-781685](../../../../../../../../reference/runtime/host-main.cjs#L781679-L781685) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582026-582032](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582026-L582032) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781679

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`.

SHA-256 do trecho: `3aa1fcf976b7a8ef214c45f05a21ab8ace011137024ce605c6526ca2cb32adc0`.

### evaluation:582026

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`.

SHA-256 do trecho: `3aa1fcf976b7a8ef214c45f05a21ab8ace011137024ce605c6526ca2cb32adc0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
