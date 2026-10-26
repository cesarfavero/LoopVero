# `WatchedDirectory.reportWatchUnavailable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684490-684495](../../../../../reference/runtime/host-main.cjs#L684490-L684495) | `method` | não | `error64` |
| [evaluation:627814-627819](../../../../../reference/runtime/sand-eval-runner.cjs#L627814-L627819) | `method` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684490-684495](../../../../../reference/runtime/host-main.cjs#L684490-L684495) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627814-627819](../../../../../reference/runtime/sand-eval-runner.cjs#L627814-L627819) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684490

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`.

SHA-256 do trecho: `f889bb2e5313ea15bb60fcb8a4457fd050e0347e14c45bc0d1d644b0a8984cf5`.

### evaluation:627814

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`.

SHA-256 do trecho: `a08d3c0a75284ba063cefd89629ec9b2c965bbbcce38659397705a3c8f3838a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
