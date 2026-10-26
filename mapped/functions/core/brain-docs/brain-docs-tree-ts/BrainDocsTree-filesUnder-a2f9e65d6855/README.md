# `BrainDocsTree.filesUnder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-tree.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629157-629170](../../../../../../reference/runtime/sand-eval-runner.cjs#L629157-L629170) | `method` | não | `root` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629157-629170](../../../../../../reference/runtime/sand-eval-runner.cjs#L629157-L629170) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:629157

Chamadas escritas diretamente neste corpo: `out.push`, `pending.pop`, `pending.push`, `this.children.get`, `this.children.has`, `this.files.get`.

Alvos de atribuição ou incremento: `dir`.

SHA-256 do trecho: `daa41615dd7b658b06acb5372316d35cace33618ae3d72a1b7360370966bc1b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
