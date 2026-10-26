# `createSandAutomationStateTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771939-771953](../../../../../../../../reference/runtime/host-main.cjs#L771939-L771953) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:571172-571186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571172-L571186) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771939-771953](../../../../../../../../reference/runtime/host-main.cjs#L771939-L771953) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:571172-571186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571172-L571186) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:771939

Chamadas escritas diretamente neste corpo: `d.canCreateAutomation`, `executeStateUpdate`, `inOwnName`, `readAutomation`, `renderOutcome`.

SHA-256 do trecho: `031bbc0596548ffd6434492b2b807179fa8e2118b1d53dd28a021d5ac064a3a5`.

### evaluation:571172

Chamadas escritas diretamente neste corpo: `d.canCreateAutomation`, `executeStateUpdate`, `inOwnName`, `readAutomation`, `renderOutcome`.

SHA-256 do trecho: `031bbc0596548ffd6434492b2b807179fa8e2118b1d53dd28a021d5ac064a3a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
