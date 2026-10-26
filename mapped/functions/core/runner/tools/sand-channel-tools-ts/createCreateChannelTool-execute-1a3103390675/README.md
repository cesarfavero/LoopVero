# `createCreateChannelTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-channel-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771261-771265](../../../../../../../reference/runtime/host-main.cjs#L771261-L771265) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |
| [evaluation:570495-570499](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570495-L570499) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771261-771265](../../../../../../../reference/runtime/host-main.cjs#L771261-L771265) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:570495-570499](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570495-L570499) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:771261

Chamadas escritas diretamente neste corpo: `.join`, `m2.create`, `members2.map`.

SHA-256 do trecho: `3048e0c7def6d73977c52d8e25818ba6aee721965ff8ded18a190a86ee656dd3`.

### evaluation:570495

Chamadas escritas diretamente neste corpo: `.join`, `m2.create`, `members2.map`.

SHA-256 do trecho: `3048e0c7def6d73977c52d8e25818ba6aee721965ff8ded18a190a86ee656dd3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
