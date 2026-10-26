# `themesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754224-754233](../../../../../../../reference/runtime/host-main.cjs#L754224-L754233) | `FunctionDeclaration` | não | `named2` |
| [evaluation:536692-536701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536692-L536701) | `FunctionDeclaration` | não | `named2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754224-754233](../../../../../../../reference/runtime/host-main.cjs#L754224-L754233) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:536692-536701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536692-L536701) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:754224

Chamadas escritas diretamente neste corpo: `new Map`, `spellings.has`, `spellings.set`, `theme.toLowerCase`.

SHA-256 do trecho: `ae003c1e190f94cc93c59e53e236f218c7c115fc3c67e5b3c0646993641bc05e`.

### evaluation:536692

Chamadas escritas diretamente neste corpo: `new Map`, `spellings.has`, `spellings.set`, `theme.toLowerCase`.

SHA-256 do trecho: `ae003c1e190f94cc93c59e53e236f218c7c115fc3c67e5b3c0646993641bc05e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
