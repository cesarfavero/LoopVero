# `normalizeMerchantUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775286-775300](../../../../../../../reference/runtime/host-main.cjs#L775286-L775300) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574931-574945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574931-L574945) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775286-775300](../../../../../../../reference/runtime/host-main.cjs#L775286-L775300) | 3 | 0 | 0 | 1 | 2 | 0 |
| [evaluation:574931-574945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574931-L574945) | 3 | 0 | 0 | 1 | 2 | 0 |

### host:775286

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `parseMerchantUrl`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `e57a6959a8404a02cfe72e4274af64e0bc38405449f6f815df9408938772dcf1`.

### evaluation:574931

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `parseMerchantUrl`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `484f8406f8dfa8a05937cd60f3142aaa3796ac9d07e5433c3dd2e21c5710ff1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
