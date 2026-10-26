# `brainDocsRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629247-629252](../../../../../../reference/runtime/sand-eval-runner.cjs#L629247-L629252) | `FunctionDeclaration` | não | `layout, families = effectiveBrainDocsFamilies(layout)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629247-629252](../../../../../../reference/runtime/sand-eval-runner.cjs#L629247-L629252) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629247

Chamadas escritas diretamente neste corpo: `.flatMap`, `SAND_BRAIN_DOCS_FAMILIES.filter`, `brainDocsRootsByFamily`.

SHA-256 do trecho: `b6d1e9755f36c8bb0320084f8b9324f4bae621d45d6a8f1495d3147f27319aa2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
