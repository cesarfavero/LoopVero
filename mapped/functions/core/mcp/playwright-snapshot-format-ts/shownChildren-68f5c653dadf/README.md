# `shownChildren`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742800-742802](../../../../../../reference/runtime/host-main.cjs#L742800-L742802) | `FunctionDeclaration` | não | `node2` |
| [evaluation:515462-515464](../../../../../../reference/runtime/sand-eval-runner.cjs#L515462-L515464) | `FunctionDeclaration` | não | `node2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742800-742802](../../../../../../reference/runtime/host-main.cjs#L742800-L742802) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515462-515464](../../../../../../reference/runtime/sand-eval-runner.cjs#L515462-L515464) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742800

Chamadas escritas diretamente neste corpo: `node2.children.flatMap`.

SHA-256 do trecho: `2c035df1ce8876c0c8a8b2896877b3b347952b4a4a571a9b32f9b3a31705f6e0`.

### evaluation:515462

Chamadas escritas diretamente neste corpo: `node2.children.flatMap`.

SHA-256 do trecho: `2c035df1ce8876c0c8a8b2896877b3b347952b4a4a571a9b32f9b3a31705f6e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
