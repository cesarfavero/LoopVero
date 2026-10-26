# `WatchedDirectory.readDirectoryEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684440-684452](../../../../../reference/runtime/host-main.cjs#L684440-L684452) | `method` | não | `path33` |
| [evaluation:627764-627776](../../../../../reference/runtime/sand-eval-runner.cjs#L627764-L627776) | `method` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684440-684452](../../../../../reference/runtime/host-main.cjs#L684440-L684452) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:627764-627776](../../../../../reference/runtime/sand-eval-runner.cjs#L627764-L627776) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:684440

Chamadas escritas diretamente neste corpo: `reportFallbackUnlessAbsent`, `stats.isDirectory`, `this.lstat`.

SHA-256 do trecho: `8a0f407bc129d14d70a44b9c846785745f880a25f966b1fdfe2ef32180dc7d6a`.

### evaluation:627764

Chamadas escritas diretamente neste corpo: `reportFallbackUnlessAbsent`, `stats.isDirectory`, `this.lstat`.

SHA-256 do trecho: `28ab947b98c8262369a9975e399a7967107ec568c327a2149610a1bf725ef48e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
