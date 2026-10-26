# `meterOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-meter.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742508-742513](../../../../../../reference/runtime/host-main.cjs#L742508-L742513) | `FunctionDeclaration` | não | `value` |
| [evaluation:479676-479681](../../../../../../reference/runtime/sand-eval-runner.cjs#L479676-L479681) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742508-742513](../../../../../../reference/runtime/host-main.cjs#L742508-L742513) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479676-479681](../../../../../../reference/runtime/sand-eval-runner.cjs#L479676-L479681) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:742508

Chamadas escritas diretamente neste corpo: `isCount3`, `isUnknownRecord2`.

SHA-256 do trecho: `c243a2a728089b51fde62513ada60b2ab2602e4e4a3ed6c0bb4692caa02e8861`.

### evaluation:479676

Chamadas escritas diretamente neste corpo: `isCount`, `isUnknownRecord2`.

SHA-256 do trecho: `7a20258363faa6387094a2fefd6140b84c1f7adb75169884db14cff21b436cc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
