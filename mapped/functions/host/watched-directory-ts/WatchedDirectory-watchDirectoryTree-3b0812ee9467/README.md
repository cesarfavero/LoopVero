# `WatchedDirectory.watchDirectoryTree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684404-684417](../../../../../reference/runtime/host-main.cjs#L684404-L684417) | `method` | não | `directory` |
| [evaluation:627728-627741](../../../../../reference/runtime/sand-eval-runner.cjs#L627728-L627741) | `method` | não | `directory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684404-684417](../../../../../reference/runtime/host-main.cjs#L684404-L684417) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627728-627741](../../../../../reference/runtime/sand-eval-runner.cjs#L627728-L627741) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:684404

Chamadas escritas diretamente neste corpo: `isSameDirectory`, `this.armDirectory`, `this.readDirectoryEntry`, `this.unwatchSubtree`, `this.watchers.get`.

SHA-256 do trecho: `93464a69e70648333f41b0a6bb69f2b418e3e8d7e50d31d2dc1a42b589a75a2d`.

### evaluation:627728

Chamadas escritas diretamente neste corpo: `isSameDirectory`, `this.armDirectory`, `this.readDirectoryEntry`, `this.unwatchSubtree`, `this.watchers.get`.

SHA-256 do trecho: `93464a69e70648333f41b0a6bb69f2b418e3e8d7e50d31d2dc1a42b589a75a2d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
