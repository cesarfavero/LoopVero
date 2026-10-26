# `splitKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742729-742746](../../../../../../reference/runtime/host-main.cjs#L742729-L742746) | `FunctionDeclaration` | não | `body` |
| [evaluation:515391-515408](../../../../../../reference/runtime/sand-eval-runner.cjs#L515391-L515408) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742729-742746](../../../../../../reference/runtime/host-main.cjs#L742729-L742746) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:515391-515408](../../../../../../reference/runtime/sand-eval-runner.cjs#L515391-L515408) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:742729

Chamadas escritas diretamente neste corpo: `.startsWith`, `body.slice`, `rest.search`, `rest.slice`, `rest.startsWith`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `fe027bf1a7f8092e53fec90304e28bb375b8a6dd50abed3fa653c7550ed0c687`.

### evaluation:515391

Chamadas escritas diretamente neste corpo: `.startsWith`, `body.slice`, `rest.search`, `rest.slice`, `rest.startsWith`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `fe027bf1a7f8092e53fec90304e28bb375b8a6dd50abed3fa653c7550ed0c687`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
