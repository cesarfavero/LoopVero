# `writeSandDataFileSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453726-453731](../../../../../reference/runtime/host-main.cjs#L453726-L453731) | `FunctionDeclaration` | não | `path33, data2, options2 = {}` |
| [evaluation:627493-627498](../../../../../reference/runtime/sand-eval-runner.cjs#L627493-L627498) | `FunctionDeclaration` | não | `path33, data2, options2 = {}` |
| [state-worker:485-490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L485-L490) | `FunctionDeclaration` | não | `path, data, options = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453726-453731](../../../../../reference/runtime/host-main.cjs#L453726-L453731) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627493-627498](../../../../../reference/runtime/sand-eval-runner.cjs#L627493-L627498) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:485-490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L485-L490) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453726

Chamadas escritas diretamente neste corpo: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 do trecho: `48853fc7d78c47cde77e9f46cd79035a5176dc6dc70410d3ebe8501980df9d37`.

### evaluation:627493

Chamadas escritas diretamente neste corpo: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 do trecho: `48853fc7d78c47cde77e9f46cd79035a5176dc6dc70410d3ebe8501980df9d37`.

### state-worker:485

Chamadas escritas diretamente neste corpo: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 do trecho: `b9f04163e3f70383b321b5d8c2aebee9e12b7de56859adfda8d6a541e56e2a92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
