# `WatchedDirectory.startWatching`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684382-684395](../../../../../reference/runtime/host-main.cjs#L684382-L684395) | `method` | não | `(nenhum)` |
| [evaluation:627706-627719](../../../../../reference/runtime/sand-eval-runner.cjs#L627706-L627719) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684382-684395](../../../../../reference/runtime/host-main.cjs#L684382-L684395) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627706-627719](../../../../../reference/runtime/sand-eval-runner.cjs#L627706-L627719) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:684382

Chamadas escritas diretamente neste corpo: `ensureSandDataDirSync`, `isSandDataPath`, `this.reportWatchUnavailable`, `this.watchDirectoryTree`.

SHA-256 do trecho: `61286d67a629cd1b1deec2f9edfed3f2e9b3455a3fcd863921a9ca0cf05884ac`.

### evaluation:627706

Chamadas escritas diretamente neste corpo: `ensureSandDataDirSync`, `isSandDataPath`, `this.reportWatchUnavailable`, `this.watchDirectoryTree`.

SHA-256 do trecho: `1c9f062c10f89fe4d8ba2dd23e0592ddf3b4950d4faada9c58980df78e3959b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
