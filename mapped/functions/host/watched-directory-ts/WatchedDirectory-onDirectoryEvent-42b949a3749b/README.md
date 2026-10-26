# `WatchedDirectory.onDirectoryEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684463-684480](../../../../../reference/runtime/host-main.cjs#L684463-L684480) | `method` | não | `directory, filename` |
| [evaluation:627787-627804](../../../../../reference/runtime/sand-eval-runner.cjs#L627787-L627804) | `method` | não | `directory, filename` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684463-684480](../../../../../reference/runtime/host-main.cjs#L684463-L684480) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627787-627804](../../../../../reference/runtime/sand-eval-runner.cjs#L627787-L627804) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:684463

Chamadas escritas diretamente neste corpo: `filename.toString`, `this.scheduleNotify`, `this.unwatchSubtree`, `this.watchDirectoryTree`, `this.watchSubdirectoriesOf`.

SHA-256 do trecho: `2809f62841a9862fcccaf0a5626a974d573b6e3414672f6005f885a1c374c013`.

### evaluation:627787

Chamadas escritas diretamente neste corpo: `filename.toString`, `this.scheduleNotify`, `this.unwatchSubtree`, `this.watchDirectoryTree`, `this.watchSubdirectoriesOf`.

SHA-256 do trecho: `008d08c1f1db30c18641ae79920db167812c2a617c56e14ca0a33f6c80eba41f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
