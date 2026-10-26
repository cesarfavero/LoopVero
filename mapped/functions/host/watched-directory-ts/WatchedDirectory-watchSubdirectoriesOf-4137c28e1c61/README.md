# `WatchedDirectory.watchSubdirectoriesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684435-684439](../../../../../reference/runtime/host-main.cjs#L684435-L684439) | `method` | não | `directory` |
| [evaluation:627759-627763](../../../../../reference/runtime/sand-eval-runner.cjs#L627759-L627763) | `method` | não | `directory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684435-684439](../../../../../reference/runtime/host-main.cjs#L684435-L684439) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627759-627763](../../../../../reference/runtime/sand-eval-runner.cjs#L627759-L627763) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:684435

Chamadas escritas diretamente neste corpo: `this.listSubdirectoryNamesOf`, `this.watchDirectoryTree`.

SHA-256 do trecho: `88e8191ce336e5b846bec5bed12ef9f95b010d04dfdde24c7692e7871c2b0cec`.

### evaluation:627759

Chamadas escritas diretamente neste corpo: `this.listSubdirectoryNamesOf`, `this.watchDirectoryTree`.

SHA-256 do trecho: `05bec9f7b8a39fb4361fffb681e19f1392dbd68924f494b68b721a9c3e7a9edb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
