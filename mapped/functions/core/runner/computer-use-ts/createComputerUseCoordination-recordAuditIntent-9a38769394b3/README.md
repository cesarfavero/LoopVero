# `createComputerUseCoordination/recordAuditIntent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525482-525487](../../../../../../reference/runtime/sand-eval-runner.cjs#L525482-L525487) | `FunctionExpression` | não | `actionCase` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525482-525487](../../../../../../reference/runtime/sand-eval-runner.cjs#L525482-L525487) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525482

Chamadas escritas diretamente neste corpo: `auditActionCounts.get`, `auditActionCounts.set`, `computerUseAuditKind`, `deps.actionAuditor`.

SHA-256 do trecho: `8f72c476c8877e0c4675bd406e382b3af23efff4799184c733830e93f3c15ab2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
