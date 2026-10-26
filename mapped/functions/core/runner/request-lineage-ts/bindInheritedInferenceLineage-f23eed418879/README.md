# `bindInheritedInferenceLineage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/request-lineage.ts` · [README do módulo](../../../../../modules/core/runner/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534762-534776](../../../../../../reference/runtime/sand-eval-runner.cjs#L534762-L534776) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534762-534776](../../../../../../reference/runtime/sand-eval-runner.cjs#L534762-L534776) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534762

Chamadas escritas diretamente neste corpo: `.with`, `ctx.get`, `ctx.with`, `withLineage.with`.

SHA-256 do trecho: `85ec4983af3adaa51d1e4b126c795336d0572b2b4ee820100cb7e0ee6cd8e0b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
