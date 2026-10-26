# `isSqliteCantOpenError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-busy.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-busy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480289-480291](../../../../../../reference/runtime/host-main.cjs#L480289-L480291) | `FunctionDeclaration` | não | `error64` |
| [state-worker:698-700](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L698-L700) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480289-480291](../../../../../../reference/runtime/host-main.cjs#L480289-L480291) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:698-700](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L698-L700) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480289

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `abcbcf8db921f95123e4e49af5d413bbb5d5ac35a8a844bd9a2f45c08b6a6c0a`.

### state-worker:698

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `3ed4e7bd0f81eeafabba86728a5e121f8cff0e9d54b8a9f57dae5d0691fe9b51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
