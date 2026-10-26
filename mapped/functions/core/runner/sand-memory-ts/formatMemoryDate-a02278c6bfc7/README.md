# `formatMemoryDate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702662-702665](../../../../../../reference/runtime/host-main.cjs#L702662-L702665) | `FunctionDeclaration` | não | `createdAtMs2` |
| [evaluation:536164-536167](../../../../../../reference/runtime/sand-eval-runner.cjs#L536164-L536167) | `FunctionDeclaration` | não | `createdAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702662-702665](../../../../../../reference/runtime/host-main.cjs#L702662-L702665) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:536164-536167](../../../../../../reference/runtime/sand-eval-runner.cjs#L536164-L536167) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:702662

Chamadas escritas diretamente neste corpo: `.slice`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `4b745099865cf8dfb6f9ada25181df5094ce7a2154b5fe87f0d476bfae6194d2`.

### evaluation:536164

Chamadas escritas diretamente neste corpo: `.slice`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `08a0e148336ab2ddd2a844e11fc35a5b4838af19dfab45693485644b16f7d9f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
