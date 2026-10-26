# `createSentLinkChecks/checksFor/checkedVia`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583474-583483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583474-L583483) | `ArrowFunctionExpression` | não | `key, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583474-583483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583474-L583483) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:583474

Chamadas escritas diretamente neste corpo: `asWritten`, `command.includes`, `fetchedKeys.has`.

SHA-256 do trecho: `304d5b895b83b3ffc264e550a112d8588441723c37a9afbd8a1719c674145777`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
