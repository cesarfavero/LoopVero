# `createNeedsAuthHold/heldError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-hold.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-hold-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584846-584856](../../../../../../reference/runtime/sand-eval-runner.cjs#L584846-L584856) | `FunctionExpression` | sim | `providerIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584846-584856](../../../../../../reference/runtime/sand-eval-runner.cjs#L584846-L584856) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584846

Chamadas escritas diretamente neste corpo: `boxStillReportsSignIn`, `clock.now`, `errors.get`, `onComputerSignInSinceMs.get`, `release`.

SHA-256 do trecho: `5cffc7ec82f54b495978f3e24b2fe5c2e89bc6f65521d67794f2407c5090d15e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
