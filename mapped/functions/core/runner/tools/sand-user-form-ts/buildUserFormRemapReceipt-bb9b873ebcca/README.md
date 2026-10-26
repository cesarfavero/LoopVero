# `buildUserFormRemapReceipt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-user-form.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-user-form-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725798-725829](../../../../../../../reference/runtime/host-main.cjs#L725798-L725829) | `FunctionDeclaration` | não | `outcome` |
| [evaluation:550179-550210](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550179-L550210) | `FunctionDeclaration` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725798-725829](../../../../../../../reference/runtime/host-main.cjs#L725798-L725829) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550179-550210](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550179-L550210) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:725798

Chamadas escritas diretamente neste corpo: `.join`, `outcome.heldFieldIds.map`, `outcome.notRemappedFieldIds.map`, `outcome.outcomes.map`, `outcome.outcomes.some`, `outcome.unknownFieldIds.map`.

SHA-256 do trecho: `71a2f5e991c56a58c4be111f22fca03e35e495f23f7984d419adc1ecef7cbf1c`.

### evaluation:550179

Chamadas escritas diretamente neste corpo: `.join`, `outcome.heldFieldIds.map`, `outcome.notRemappedFieldIds.map`, `outcome.outcomes.map`, `outcome.outcomes.some`, `outcome.unknownFieldIds.map`.

SHA-256 do trecho: `71a2f5e991c56a58c4be111f22fca03e35e495f23f7984d419adc1ecef7cbf1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
