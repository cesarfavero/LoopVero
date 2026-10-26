# `reportedDeniedCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750664-750667](../../../../../../../reference/runtime/host-main.cjs#L750664-L750667) | `FunctionDeclaration` | não | `value` |
| [evaluation:523515-523518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523515-L523518) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750664-750667](../../../../../../../reference/runtime/host-main.cjs#L750664-L750667) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523515-523518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523515-L523518) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750664

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `brandedErrorClass`, `reportedDeniedCommandSchema.safeParse`.

SHA-256 do trecho: `bc4d3c1b9b1a70f9d397c45a154ec8ec1decec3f9776b21972627fd6ba9aee30`.

### evaluation:523515

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `brandedErrorClass`, `reportedDeniedCommandSchema.safeParse`.

SHA-256 do trecho: `b8e64ef2cd7ff8a86d9eb6677e7eaa7092e19142ec6b903263bdea35968790b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
