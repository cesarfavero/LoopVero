# `ensureSandDataDirSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453839-453862](../../../../../reference/runtime/host-main.cjs#L453839-L453862) | `FunctionDeclaration` | não | `target, mode` |
| [evaluation:627535-627558](../../../../../reference/runtime/sand-eval-runner.cjs#L627535-L627558) | `FunctionDeclaration` | não | `target, mode` |
| [state-worker:492-515](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L492-L515) | `FunctionDeclaration` | não | `target, mode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453839-453862](../../../../../reference/runtime/host-main.cjs#L453839-L453862) | 3 | 1 | 0 | 0 | 1 | 1 |
| [evaluation:627535-627558](../../../../../reference/runtime/sand-eval-runner.cjs#L627535-L627558) | 3 | 1 | 0 | 0 | 1 | 1 |
| [state-worker:492-515](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L492-L515) | 3 | 1 | 0 | 0 | 1 | 1 |

### host:453839

Chamadas escritas diretamente neste corpo: `entryOf2`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`.

Alvos de atribuição ou incremento: `current2`, `fd`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `cfcd976e2dc4a2c253a6322a89dbe0da496d9231133c1f2433568e72039666e4`.

### evaluation:627535

Chamadas escritas diretamente neste corpo: `entryOf`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow2`.

Alvos de atribuição ou incremento: `current2`, `fd`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `26fdb60aa31b8efe687729bd1e128392cf8cf4aa27d1fda3108c79e365a9c548`.

### state-worker:492

Chamadas escritas diretamente neste corpo: `entryOf`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`.

Alvos de atribuição ou incremento: `current`, `fd`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `d8b1943cee08b21adf26263174b99d010dcbedcf35dbda3356a3715b715d0b0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
