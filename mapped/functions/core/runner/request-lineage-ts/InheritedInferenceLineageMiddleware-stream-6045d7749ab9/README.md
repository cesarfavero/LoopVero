# `InheritedInferenceLineageMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/request-lineage.ts` · [README do módulo](../../../../../modules/core/runner/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534778-534785](../../../../../../reference/runtime/sand-eval-runner.cjs#L534778-L534785) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534778-534785](../../../../../../reference/runtime/sand-eval-runner.cjs#L534778-L534785) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534778

Chamadas escritas diretamente neste corpo: `bindInheritedInferenceLineage`, `this.innerExecutor.stream`.

SHA-256 do trecho: `21008778aa87e3f54e51e0c0b6d3af41aa7f788a1a606ed47a23d4cd0d5112d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
