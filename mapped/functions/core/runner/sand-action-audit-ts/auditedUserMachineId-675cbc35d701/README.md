# `auditedUserMachineId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512849-512853](../../../../../../reference/runtime/sand-eval-runner.cjs#L512849-L512853) | `FunctionDeclaration` | não | `machineIds, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512849-512853](../../../../../../reference/runtime/sand-eval-runner.cjs#L512849-L512853) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512849

Chamadas escritas diretamente neste corpo: `machineIds.includes`.

SHA-256 do trecho: `1f4c1bb5445e2c982c78db3635fd417790827e457dbe7427fb6fb1de84c9c058`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
