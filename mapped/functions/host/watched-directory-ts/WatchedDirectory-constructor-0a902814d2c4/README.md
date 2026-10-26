# `WatchedDirectory.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684355-684360](../../../../../reference/runtime/host-main.cjs#L684355-L684360) | `method` | não | `root, debounce, watchDirectory = watchDirectoryWithNodeFs, lstat13 = import_node_fs70.lstatSync` |
| [evaluation:627679-627684](../../../../../reference/runtime/sand-eval-runner.cjs#L627679-L627684) | `method` | não | `root, debounce, watchDirectory = watchDirectoryWithNodeFs, lstat2 = import_node_fs30.lstatSync` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684355-684360](../../../../../reference/runtime/host-main.cjs#L684355-L684360) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627679-627684](../../../../../reference/runtime/sand-eval-runner.cjs#L627679-L627684) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684355

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.debounce`, `this.lstat`, `this.root`, `this.watchDirectory`.

SHA-256 do trecho: `45b600a4db3907a68b95d1df60eb794fe9c9bcf81d253fe12a89cdfb2a51390e`.

### evaluation:627679

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.debounce`, `this.lstat`, `this.root`, `this.watchDirectory`.

SHA-256 do trecho: `021a08d26ea099d846816074b78161a783f2d50179244a0db6dbe327bebc4871`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
