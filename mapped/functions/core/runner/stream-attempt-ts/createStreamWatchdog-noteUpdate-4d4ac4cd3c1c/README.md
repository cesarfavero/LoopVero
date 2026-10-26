# `createStreamWatchdog/noteUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-attempt.ts` · [README do módulo](../../../../../modules/core/runner/stream-attempt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590169-590174](../../../../../../reference/runtime/sand-eval-runner.cjs#L590169-L590174) | `ArrowFunctionExpression` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590169-590174](../../../../../../reference/runtime/sand-eval-runner.cjs#L590169-L590174) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590169

Chamadas escritas diretamente neste corpo: `classifyStreamActivity`, `deadlineHooks.noteStreamActivity`.

Alvos de atribuição ou incremento: `streamOutputProduced`.

SHA-256 do trecho: `8111a262bba7f78050cafd6690a89b9782538f71514a9f8c204d3e246d71bf3d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
