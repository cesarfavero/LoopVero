# `refuseDuplicateAccountSignIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/duplicate-account-guard.ts` · [README do módulo](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779423-779429](../../../../../../reference/runtime/host-main.cjs#L779423-L779429) | `FunctionDeclaration` | não | `ctx, servers, request5` |
| [evaluation:579596-579602](../../../../../../reference/runtime/sand-eval-runner.cjs#L579596-L579602) | `FunctionDeclaration` | não | `ctx, servers, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779423-779429](../../../../../../reference/runtime/host-main.cjs#L779423-L779429) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579596-579602](../../../../../../reference/runtime/sand-eval-runner.cjs#L579596-L579602) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:779423

Chamadas escritas diretamente neste corpo: `describeDuplicateAccountRefusal`, `duplicateAccountGuardDecisions.increment`, `findDuplicateAccountSlots`, `request5.enforced`.

SHA-256 do trecho: `ea581cb52b74e6cc235894855f9b9c307e79814c9cace5507b97c2ab45bce0f1`.

### evaluation:579596

Chamadas escritas diretamente neste corpo: `describeDuplicateAccountRefusal`, `duplicateAccountGuardDecisions.increment`, `findDuplicateAccountSlots`, `request3.enforced`.

SHA-256 do trecho: `dea724abb1f5b4a4d19a6f5b513cf762a219b84f12152e133fc8c836a1bcd887`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
