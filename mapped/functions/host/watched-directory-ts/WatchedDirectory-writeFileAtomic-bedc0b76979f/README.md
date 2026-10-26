# `WatchedDirectory.writeFileAtomic`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684499-684502](../../../../../reference/runtime/host-main.cjs#L684499-L684502) | `method` | não | `path33, contents` |
| [evaluation:627823-627826](../../../../../reference/runtime/sand-eval-runner.cjs#L627823-L627826) | `method` | não | `path33, contents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684499-684502](../../../../../reference/runtime/host-main.cjs#L684499-L684502) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627823-627826](../../../../../reference/runtime/sand-eval-runner.cjs#L627823-L627826) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684499

Chamadas escritas diretamente neste corpo: `this.scheduleNotify`, `writeSandDataFileSync`.

SHA-256 do trecho: `84b70d8787c7caf61d07deef01e89d196c1ff2b8495b2f1d477da0d39f41ca63`.

### evaluation:627823

Chamadas escritas diretamente neste corpo: `this.scheduleNotify`, `writeSandDataFileSync`.

SHA-256 do trecho: `84b70d8787c7caf61d07deef01e89d196c1ff2b8495b2f1d477da0d39f41ca63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
