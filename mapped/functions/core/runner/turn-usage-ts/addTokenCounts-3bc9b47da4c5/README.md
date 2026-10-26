# `addTokenCounts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-usage.ts` · [README do módulo](../../../../../modules/core/runner/turn-usage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525221-525223](../../../../../../reference/runtime/sand-eval-runner.cjs#L525221-L525223) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525221-525223](../../../../../../reference/runtime/sand-eval-runner.cjs#L525221-L525223) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525221

Chamadas escritas diretamente neste corpo: `Math.min`.

SHA-256 do trecho: `ba0177c079f32dc0e9050f696c709bb83888cd587186200b0f2a384b98f7d0fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
