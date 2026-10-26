# `BrainDocsTree.unlink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-tree.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629197-629208](../../../../../../reference/runtime/sand-eval-runner.cjs#L629197-L629208) | `method` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629197-629208](../../../../../../reference/runtime/sand-eval-runner.cjs#L629197-L629208) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:629197

Chamadas escritas diretamente neste corpo: `siblings.delete`, `this.children.delete`, `this.children.get`, `this.children.has`, `this.files.has`.

Alvos de atribuição ou incremento: `child`.

SHA-256 do trecho: `0942ecf985179c66d7410de6bd58ce111ee0f5f8a74069109b2dfb76a99899c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
