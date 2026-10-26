# `withParentNoFollowSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453969-453984](../../../../../reference/runtime/host-main.cjs#L453969-L453984) | `FunctionDeclaration` | não | `path33, use` |
| [evaluation:627569-627584](../../../../../reference/runtime/sand-eval-runner.cjs#L627569-L627584) | `FunctionDeclaration` | não | `path33, use` |
| [state-worker:570-585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L570-L585) | `FunctionDeclaration` | não | `path, use` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453969-453984](../../../../../reference/runtime/host-main.cjs#L453969-L453984) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627569-627584](../../../../../reference/runtime/sand-eval-runner.cjs#L627569-L627584) | 0 | 1 | 0 | 1 | 0 | 0 |
| [state-worker:570-585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L570-L585) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:453969

Chamadas escritas diretamente neste corpo: `entryOf2`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`, `use`.

Alvos de atribuição ou incremento: `current2`, `fd`.

SHA-256 do trecho: `17c6432f6dfd9a3cc82df8327e4d14adb1ab69abbc5e5733178d02774ad49e20`.

### evaluation:627569

Chamadas escritas diretamente neste corpo: `entryOf`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow2`, `use`.

Alvos de atribuição ou incremento: `current2`, `fd`.

SHA-256 do trecho: `fa5bd482060cd7500650b62f79074e856ea27988ca0de719623a6b4ea096b53e`.

### state-worker:570

Chamadas escritas diretamente neste corpo: `entryOf`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`, `use`.

Alvos de atribuição ou incremento: `current`, `fd`.

SHA-256 do trecho: `4f85d8f88bf08d25f76be6933cfa0324904b19797d1dc670c20808e3601d9964`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
