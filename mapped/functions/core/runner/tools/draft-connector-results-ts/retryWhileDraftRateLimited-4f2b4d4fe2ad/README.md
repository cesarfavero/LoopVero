# `retryWhileDraftRateLimited`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733015-733038](../../../../../../../reference/runtime/host-main.cjs#L733015-L733038) | `FunctionDeclaration` | sim | `args` |
| [evaluation:540537-540560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540537-L540560) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733015-733038](../../../../../../../reference/runtime/host-main.cjs#L733015-L733038) | 3 | 1 | 3 | 2 | 0 | 0 |
| [evaluation:540537-540560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540537-L540560) | 3 | 1 | 3 | 2 | 0 | 0 |

### host:733015

Chamadas escritas diretamente neste corpo: `args.onRetry`, `args.rateLimitOf`, `args.run`, `delay5.dispose`, `retry2.now`, `retry2.wait`.

Alvos de atribuição ou incremento: `attempt`.

SHA-256 do trecho: `4caef311847df1f340b32be2d5565ea170e38d20c466e3790449e9069612bda4`.

### evaluation:540537

Chamadas escritas diretamente neste corpo: `args.onRetry`, `args.rateLimitOf`, `args.run`, `delay3.dispose`, `retry2.now`, `retry2.wait`.

Alvos de atribuição ou incremento: `attempt`.

SHA-256 do trecho: `0bf49d2242a8cac2718f205bf06a75eec34be67f798da3f27dc6c6ff59eef568`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
