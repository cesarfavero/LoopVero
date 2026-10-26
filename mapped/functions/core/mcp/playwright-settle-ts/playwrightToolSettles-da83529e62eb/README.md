# `playwrightToolSettles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-settle.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742631-742633](../../../../../../reference/runtime/host-main.cjs#L742631-L742633) | `FunctionDeclaration` | não | `toolName, args` |
| [evaluation:515294-515296](../../../../../../reference/runtime/sand-eval-runner.cjs#L515294-L515296) | `FunctionDeclaration` | não | `toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742631-742633](../../../../../../reference/runtime/host-main.cjs#L742631-L742633) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515294-515296](../../../../../../reference/runtime/sand-eval-runner.cjs#L515294-L515296) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742631

Chamadas escritas diretamente neste corpo: `SETTLING_TOOLS[computed]`.

SHA-256 do trecho: `09a11db64147de04cc78c438d297c66fc14fc3397e0cf0de8c60253e1750379d`.

### evaluation:515294

Chamadas escritas diretamente neste corpo: `SETTLING_TOOLS[computed]`.

SHA-256 do trecho: `09a11db64147de04cc78c438d297c66fc14fc3397e0cf0de8c60253e1750379d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
