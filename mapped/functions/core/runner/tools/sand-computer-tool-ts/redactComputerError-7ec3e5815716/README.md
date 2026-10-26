# `redactComputerError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777261-777268](../../../../../../../reference/runtime/host-main.cjs#L777261-L777268) | `FunctionDeclaration` | sim | `ctx, result, guard` |
| [evaluation:576906-576913](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576906-L576913) | `FunctionDeclaration` | sim | `ctx, result, guard` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777261-777268](../../../../../../../reference/runtime/host-main.cjs#L777261-L777268) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:576906-576913](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576906-L576913) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:777261

Chamadas escritas diretamente neste corpo: `guard.textRedactor`, `new ComputerUseResult`, `redact`, `result.result.value.clone`.

Alvos de atribuição ou incremento: `error64.error`.

SHA-256 do trecho: `6727f95a7f131d74b6d75b9d26fcc227f2ebdddeb348f20ccea1690a63c6eb6f`.

### evaluation:576906

Chamadas escritas diretamente neste corpo: `guard.textRedactor`, `new ComputerUseResult`, `redact`, `result.result.value.clone`.

Alvos de atribuição ou incremento: `error63.error`.

SHA-256 do trecho: `948f300cd56c1f790be5daac85394175b1e881fc322479de072bb43d818235bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
