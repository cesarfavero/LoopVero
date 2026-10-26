# `findDuplicateAccountSlots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/duplicate-account-guard.ts` · [README do módulo](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779401-779417](../../../../../../reference/runtime/host-main.cjs#L779401-L779417) | `FunctionDeclaration` | não | `servers, request5` |
| [evaluation:579574-579590](../../../../../../reference/runtime/sand-eval-runner.cjs#L579574-L579590) | `FunctionDeclaration` | não | `servers, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779401-779417](../../../../../../reference/runtime/host-main.cjs#L779401-L779417) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:579574-579590](../../../../../../reference/runtime/sand-eval-runner.cjs#L579574-L579590) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:779401

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `.toLowerCase`, `accountKeys.add`, `accountKeysByIdentity.get`, `accountKeysByIdentity.set`, `accountKeysByIdentity.values`, `new Map`, `new Set`, `normalizeMcpAccountLabel`, `servers.filter`, `slot.accountEmail.trim`, `slots.some`.

SHA-256 do trecho: `993ad138ad7c616459cd715dce4d38e4c91689ba2215e040b60e0adf478b3526`.

### evaluation:579574

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `.toLowerCase`, `accountKeys.add`, `accountKeysByIdentity.get`, `accountKeysByIdentity.set`, `accountKeysByIdentity.values`, `new Map`, `new Set`, `normalizeMcpAccountLabel`, `servers.filter`, `slot.accountEmail.trim`, `slots.some`.

SHA-256 do trecho: `08ad9ec96bc20f8f03c56e232dd195b51ef4b707e94bb8c98aaeff231fb42efc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
