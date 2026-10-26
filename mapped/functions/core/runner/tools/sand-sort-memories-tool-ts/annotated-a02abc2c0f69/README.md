# `annotated`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-sort-memories-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754207-754223](../../../../../../../reference/runtime/host-main.cjs#L754207-L754223) | `FunctionDeclaration` | não | `found, named2` |
| [evaluation:536675-536691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536675-L536691) | `FunctionDeclaration` | não | `found, named2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754207-754223](../../../../../../../reference/runtime/host-main.cjs#L754207-L754223) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536675-536691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536675-L536691) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754207

Chamadas escritas diretamente neste corpo: `found.map`, `named2.flatMap`, `new Map`, `themesOf`.

SHA-256 do trecho: `48d6641af2a1b46c45a6ed6ea4db233a048d195a2f89d2b1013f28a314b3aa57`.

### evaluation:536675

Chamadas escritas diretamente neste corpo: `found.map`, `named2.flatMap`, `new Map`, `themesOf`.

SHA-256 do trecho: `65bc5ecff827ed811ea522f5bfb5ea7645705e2ca4f7a5e9cb498133faaa1341`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
