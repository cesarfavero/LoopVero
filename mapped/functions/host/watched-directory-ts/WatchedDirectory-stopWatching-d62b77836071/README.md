# `WatchedDirectory.stopWatching`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684396-684403](../../../../../reference/runtime/host-main.cjs#L684396-L684403) | `method` | não | `(nenhum)` |
| [evaluation:627720-627727](../../../../../reference/runtime/sand-eval-runner.cjs#L627720-L627727) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684396-684403](../../../../../reference/runtime/host-main.cjs#L684396-L684403) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627720-627727](../../../../../reference/runtime/sand-eval-runner.cjs#L627720-L627727) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:684396

Chamadas escritas diretamente neste corpo: `armed.watcher.close`, `this.notify.dispose`, `this.watchers.clear`, `this.watchers.values`.

Alvos de atribuição ou incremento: `this.notify`.

SHA-256 do trecho: `3c531dfdc74db54c58ed60310ed01dfcd527ee658e6f5671bff68b0d89cb3553`.

### evaluation:627720

Chamadas escritas diretamente neste corpo: `armed.watcher.close`, `this.notify.dispose`, `this.watchers.clear`, `this.watchers.values`.

Alvos de atribuição ou incremento: `this.notify`.

SHA-256 do trecho: `3c531dfdc74db54c58ed60310ed01dfcd527ee658e6f5671bff68b0d89cb3553`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
