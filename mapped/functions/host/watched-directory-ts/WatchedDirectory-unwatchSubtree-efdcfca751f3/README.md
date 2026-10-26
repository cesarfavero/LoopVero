# `WatchedDirectory.unwatchSubtree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684481-684489](../../../../../reference/runtime/host-main.cjs#L684481-L684489) | `method` | não | `path33` |
| [evaluation:627805-627813](../../../../../reference/runtime/sand-eval-runner.cjs#L627805-L627813) | `method` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684481-684489](../../../../../reference/runtime/host-main.cjs#L684481-L684489) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627805-627813](../../../../../reference/runtime/sand-eval-runner.cjs#L627805-L627813) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:684481

Chamadas escritas diretamente neste corpo: `armed.watcher.close`, `this.watchers.delete`, `watched.startsWith`.

SHA-256 do trecho: `34ba792a07db576b2acc40ce2095145a753206b3f7ccb95f9c8df7303f8b2f4d`.

### evaluation:627805

Chamadas escritas diretamente neste corpo: `armed.watcher.close`, `this.watchers.delete`, `watched.startsWith`.

SHA-256 do trecho: `70ad55d65de57d37488e004c71a6172ecfcabe7c50cb1abc34212b8358427913`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
