# `SandBrainDocsStore.removeTree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629407-629412](../../../../../../reference/runtime/sand-eval-runner.cjs#L629407-L629412) | `method` | sim | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629407-629412](../../../../../../reference/runtime/sand-eval-runner.cjs#L629407-L629412) | 0 | 1 | 1 | 1 | 0 | 0 |

### evaluation:629407

Chamadas escritas diretamente neste corpo: `this.filesUnder`, `this.options.fs.removePath`, `this.tree.delete`, `this.tree.hasFilesUnder`.

SHA-256 do trecho: `0edcf315551bc16367b1736f8b58894214c2a16d8f36f295316c816fa0d82d46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
