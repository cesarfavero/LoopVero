# `SandBrainDocsStore.load`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629366-629380](../../../../../../reference/runtime/sand-eval-runner.cjs#L629366-L629380) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629366-629380](../../../../../../reference/runtime/sand-eval-runner.cjs#L629366-L629380) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:629366

Chamadas escritas diretamente neste corpo: `.finally`, `.then`, `brainDocsRoots`, `new BrainDocsTree`, `this.options.fs.readTree`.

Alvos de atribuição ou incremento: `this.loaded`, `this.loading`, `this.tree`.

SHA-256 do trecho: `e74eded193ac55495dea98ac50a77bfc360067332022d8dbb331fd44d9ae9efe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
