# `listMessagesGrantNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/messages/permissions.ts` · [README do módulo](../../../../../modules/shared/messages/permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487341-487346](../../../../../../reference/runtime/host-main.cjs#L487341-L487346) | `FunctionDeclaration` | não | `grants` |
| [evaluation:577551-577556](../../../../../../reference/runtime/sand-eval-runner.cjs#L577551-L577556) | `FunctionDeclaration` | não | `grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487341-487346](../../../../../../reference/runtime/host-main.cjs#L487341-L487346) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577551-577556](../../../../../../reference/runtime/sand-eval-runner.cjs#L577551-L577556) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:487341

Chamadas escritas diretamente neste corpo: `grants.map`, `names3.join`, `names3.pop`.

SHA-256 do trecho: `a6ff40f2b643cba0aa4393bf7f20b7fd88a94fff8cc507be14824a4066f4ee54`.

### evaluation:577551

Chamadas escritas diretamente neste corpo: `grants.map`, `names3.join`, `names3.pop`.

SHA-256 do trecho: `a6ff40f2b643cba0aa4393bf7f20b7fd88a94fff8cc507be14824a4066f4ee54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
