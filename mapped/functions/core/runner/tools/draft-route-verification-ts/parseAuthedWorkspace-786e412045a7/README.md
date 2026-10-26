# `parseAuthedWorkspace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735131-735138](../../../../../../../reference/runtime/host-main.cjs#L735131-L735138) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540705-540712](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540705-L540712) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735131-735138](../../../../../../../reference/runtime/host-main.cjs#L735131-L735138) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540705-540712](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540705-L540712) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:735131

Chamadas escritas diretamente neste corpo: `/^Email:\s*(\S+@\S+)$/m.exec`, `/^Organization Name:\s*(.+)$/m.exec`, `[computed].trim`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `3c92fe6a76dd5afd1f74ab1c59bff10f11ad548ff2e6d8b6d19698deee3610d5`.

### evaluation:540705

Chamadas escritas diretamente neste corpo: `/^Email:\s*(\S+@\S+)$/m.exec`, `/^Organization Name:\s*(.+)$/m.exec`, `[computed].trim`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `3c92fe6a76dd5afd1f74ab1c59bff10f11ad548ff2e6d8b6d19698deee3610d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
