# `isCollapsibleWrapper`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742803-742810](../../../../../../reference/runtime/host-main.cjs#L742803-L742810) | `FunctionDeclaration` | não | `node2` |
| [evaluation:515465-515472](../../../../../../reference/runtime/sand-eval-runner.cjs#L515465-L515472) | `FunctionDeclaration` | não | `node2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742803-742810](../../../../../../reference/runtime/host-main.cjs#L742803-L742810) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515465-515472](../../../../../../reference/runtime/sand-eval-runner.cjs#L515465-L515472) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:742803

Chamadas escritas diretamente neste corpo: `WRAPPER_ROLES.has`, `only.role.startsWith`, `shownChildren`.

SHA-256 do trecho: `86e999c8266f560b95e646de0a0467e8c3dd31ea5f8a021a2383b2066ae04d34`.

### evaluation:515465

Chamadas escritas diretamente neste corpo: `WRAPPER_ROLES.has`, `only.role.startsWith`, `shownChildren`.

SHA-256 do trecho: `86e999c8266f560b95e646de0a0467e8c3dd31ea5f8a021a2383b2066ae04d34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
