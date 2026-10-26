# `playwrightRunCodeSuccessMeter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-meter.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742514-742523](../../../../../../reference/runtime/host-main.cjs#L742514-L742523) | `FunctionDeclaration` | não | `success2` |
| [evaluation:479686-479695](../../../../../../reference/runtime/sand-eval-runner.cjs#L479686-L479695) | `FunctionDeclaration` | não | `success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742514-742523](../../../../../../reference/runtime/host-main.cjs#L742514-L742523) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479686-479695](../../../../../../reference/runtime/sand-eval-runner.cjs#L479686-L479695) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:742514

Chamadas escritas diretamente neste corpo: `meterOf`, `numberOf`.

SHA-256 do trecho: `606f56ae8a3bbe78d7123af5c116082982282c9b692e2ffa3a20087402751ea3`.

### evaluation:479686

Chamadas escritas diretamente neste corpo: `meterOf`, `numberOf`.

SHA-256 do trecho: `606f56ae8a3bbe78d7123af5c116082982282c9b692e2ffa3a20087402751ea3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
